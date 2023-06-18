import * as React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import { BasicForm, Layout } from "./Component";

interface Props {}

function App(props: Props) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <h1>Dashboard</h1>,
        },
        {
          path: "basic-form",
          element: <BasicForm topic="Basic From" />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
