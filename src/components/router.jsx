import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import HomePage from "../pages/HomePage.jsx";
import FinancialTrackerWriteUp from "../pages/FinancialTrackerWriteUp.jsx";
import ProjectManagerWriteUp from "../pages/ProjectManagerWriteUp.jsx";
import TaskTrackerWriteUp from "../pages/TaskTrackerWriteUp.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "financial-tracker", element: <FinancialTrackerWriteUp /> },
      { path: "project-manager", element: <ProjectManagerWriteUp /> },
      { path: "task-tracker", element: <TaskTrackerWriteUp /> },
      { path: '/*', element: <ErrorPage /> }
        
    ],
  },
]);