import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import CategorySelectionPage from "./pages/CategorySelectionPage.tsx";
import QuizPage from "./pages/QuizPage.tsx";
import StatsPage from "./pages/StatsPage.tsx";
import FlashcardPage from "./pages/FlashcardPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "study",
    element: <CategorySelectionPage />,
  },
  {
    path: "study/:category",
    element: <FlashcardPage />,
  },
  {
    path: "quiz",
    element: <QuizPage />,
  },
  {
    path: "stats",
    element: <StatsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
