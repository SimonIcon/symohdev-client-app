import * as React from "react";
import * as ReactDOM from "react-dom";
import RootPage from './pages/RootPage';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import ProjectPage from './pages/ProjectPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "chat",
          element: <ChatPage />
        },
        {
          path: "/project",
          element: <ProjectPage />
        }
      ],
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
}

export default App