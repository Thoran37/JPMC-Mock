from googlesearch import search
import pandas as pd
import requests
from bs4 import BeautifulSoup
import re
import time

# Load company list
df = pd.read_excel(r"D:\JPMC-Mock\csr-extraction\companiesl_list.xlsx")

emails = []

for company in df["Company Name"]:
    term = company + " official website"
    email = "Not found"
    try:
      results = list(search(term=term, num_results=1, sleep_interval=2))
      if not results:
          raise Exception("No results found")

      website = results[0]

      headers = {"User-Agent": "Mozilla/5.0"}

      # ⚠️ Ignore SSL errors temporarily
      response = requests.get(website, headers=headers, timeout=10, verify=False)

      if response.status_code != 200:
          raise Exception(f"HTTP Error {response.status_code}")

      soup = BeautifulSoup(response.text, 'html.parser')
      text = soup.get_text()
      found_emails = set(re.findall(r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}", text))
      email = next(iter(found_emails)) if found_emails else "Not found"

    except Exception as e:
        print(f"{company} → Error: {e}")
        email = "Error"

    # print(f"{company} → {email}")
    emails.append(email)
    time.sleep(1.5)  # Be polite to Google

# Add email column to the DataFrame
df["Email"] = emails

# Save updated data to a new Excel file
output_file = r"D:\JPMC-Mock\csr-extraction\companies_with_emails.xlsx"
df.to_excel(output_file, index=False)

print(f"\n✅ Emails saved to {output_file}")
