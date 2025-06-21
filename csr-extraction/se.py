from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import pandas as pd
import time
import os

# ----- CONFIG -----
CHROME_DRIVER_PATH = "D:/JPMC-Mock/csr-extraction/chromedriver-win32/chromedriver.exe"  # or use full path like "C:/path/to/chromedriver.exe"
OUTPUT_FILE = "D:/JPMC-Mock/csr-extraction/companiesl_list.xlsx"
TARGET_URL = "https://www.csr.gov.in/content/csr/global/master/home/home/csr-spent--development-sector-wise/sector-division/companies.html?=Sanitation=FY%202023-24=Health,%20Eradicating%20Hunger,%20Poverty%20and%20Malnutrition,%20Safe%20Drinking%20water,%20Sanitation"

# ----- SETUP CHROME -----
options = Options()
# options.add_argument("--headless")  # Try commenting this out
options.add_argument("--disable-gpu")
options.add_argument("--window-size=1920,1080")
options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36")

driver = webdriver.Chrome(service=Service(CHROME_DRIVER_PATH), options=options)

# ----- SCRAPE DATA -----
print("🔄 Opening CSR website...")
driver.get(TARGET_URL)

# Wait for any table row to be visible
try:
    WebDriverWait(driver, 30).until(
        EC.visibility_of_element_located((By.XPATH, '//*[@id="compTableBody"]'))
    )
except Exception as e:
    print("❌ Table did not load in time:", e)

# Scroll to ensure full table loads
driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
time.sleep(5)  # Increase wait time

# Try to find all iframes and print their src
iframes = driver.find_elements(By.TAG_NAME, "iframe")
print(f"Found {len(iframes)} iframes.")
for idx, iframe in enumerate(iframes):
    print(f"Iframe {idx}: {iframe.get_attribute('src')}")

print("🔍 Extracting data...")
company_data = []

while True:
    # Extract data from the current page
    rows = driver.find_elements(By.XPATH, '//*[@id="compTableBody"]/tr')
    for row in rows:
        cols = row.find_elements(By.TAG_NAME, "td")
        if len(cols) >= 3:
            company_data.append({
                "Company Name": cols[1].text.strip(),
                "Amount Spent (INR)": cols[2].text.strip(),
            })
    # Try to find the next page button (not disabled)
    try:
        # Find the current active page number
        current_page_li = driver.find_element(By.XPATH, '//li[contains(@class, "paginationjs-page") and contains(@class, "active")]')
        current_page_num = int(current_page_li.get_attribute("data-num"))
        next_page_num = current_page_num + 1

        # Find the next page button by data-num
        next_btn_xpath = f'//li[contains(@class, "paginationjs-page") and @data-num="{next_page_num}"]/a'
        next_btns = driver.find_elements(By.XPATH, next_btn_xpath)
        if not next_btns:
            print("No next page button found. Stopping.")
            break

        next_btn = next_btns[0]
        driver.execute_script("arguments[0].scrollIntoView();", next_btn)
        WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, next_btn_xpath)))
        next_btn.click()
        # Wait for the table to update
        WebDriverWait(driver, 10).until(EC.staleness_of(rows[0]))
        time.sleep(20)
    except Exception as e:
        print("No more pages or error:", e)
        break

# ----- SAVE TO EXCEL -----
if os.path.exists(OUTPUT_FILE):
    old_df = pd.read_excel(OUTPUT_FILE)
    df = pd.concat([old_df, pd.DataFrame(company_data)], ignore_index=True)
else:
    df = pd.DataFrame(company_data)

df.to_excel(OUTPUT_FILE, index=False)

print(f"✅ Extracted {len(company_data)} companies")
print(f"📁 Saved to: {OUTPUT_FILE}")

driver.quit()