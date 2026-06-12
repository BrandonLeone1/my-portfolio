import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import HomePage from "../pages/HomePage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import MarketingWriteUp from "../pages/MarketingWriteUp.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "marketing-project", element: <MarketingWriteUp /> },
      { path: '/*', element: <ErrorPage /> }
        
    ],
  },
]);