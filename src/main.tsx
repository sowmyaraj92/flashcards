import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import CategorySelectionPage from "./pages/CategorySelectionPage.tsx";
import QuizPage from "./pages/QuizPage.tsx";
import StatsPage from "./pages/StatsPage.tsx";
import FlashcardPage from "./pages/FlashcardPage.tsx";

/**
 * Defines the application's routes using React Router.
 * Each route maps a URL path to a specific page component.
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    // Page for selecting a study category
    path: "study",
    element: <CategorySelectionPage />,
  },
  {
    // Dynamic route for studying a specific category of flashcards
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

/**
 * Renders the application to the DOM.
 * RouterProvider makes the routing configuration available to the entire app.
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
