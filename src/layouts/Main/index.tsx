import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../../pages/home";
import NotFound from "../../pages/not-found";

function Main() {
  return (
    <main className="mx-auto overflow-scroll w-full">
      <RouterProvider router={createBrowserRouter([
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
