import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Rootlayout";
import Home from "./components/Home";
import Dashboard from "./components/Liveimpactdashboard";
import DonatePage from "./components/Donatepage";
import OrgRegistration from "./components/Orgregistration";
import UserRegistration from "./components/Userregistration";
import ImpactStories from "./components/Impactstories";
import Feedback from "./components/Feedback";
function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/donate",
          element: <DonatePage />,
        },
        {
          path: "/donate/organization",
          element: <OrgRegistration />,
        },
        {
          path: "/donate/individual",
          element: <UserRegistration />,
        },
        {
          path: "/impact-stories",
          element: <ImpactStories />,
        },
        {
          path: "/feedback",
          element: <Feedback />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
