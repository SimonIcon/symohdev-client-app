import * as React from "react";
import * as ReactDOM from "react-dom";
import RootPage from './pages/RootPage';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import ProjectPage from './pages/ProjectPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AuthPage from "./pages/AuthPage";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import RecoverPassword from "./component/RecoverPassword";

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
        },
        {
          path: "/auth",
          element: <AuthPage />,
          children: [
            {
              path: "/auth",
              element: <SignIn />

            }, {
              path: "/auth/register",
              element: <SignUp />
            }, {
              path: "/auth/recover",
              element: <RecoverPassword />
            }
          ]
        }
      ],
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
}

export default App