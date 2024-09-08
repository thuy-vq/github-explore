import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "@pages/home";
import NotFound from "@pages/not-found";
import Login from "@pages/login";

function Main() {
  return (
    <main className="mx-auto overflow-scroll w-full">
      <RouterProvider router={createBrowserRouter([
        {
          path: "/login",
          element: (
            <Login/>
          ),
        },
        {
          path: "/",
          element: (
            <Home/>
          ),
        },
        {
          path: "*",
          element: <NotFound/>,
        },
      ])}/>
    </main>
  );
}

export default Main;
