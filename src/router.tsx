import { createBrowserRouter } from "react-router";
import RootLayout from "@layouts/RootLayout.tsx";
import CounterPage from "@pages/CounterPage.tsx";
import NotFoundPage from "@pages/errors/NotFoundPage.tsx";
import HomePage from "@pages/HomePage.tsx";
import TodosPage from "@pages/TodosPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage/>,
      }, {
        path: "/counter",
        element: <CounterPage/>,
      }, {
        path: "/todos",
        element: <TodosPage/>,
      }, {
        path: "*",
        element: <NotFoundPage/>,
      },
    ],
  },
]);
