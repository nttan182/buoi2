import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./component/Login";
import { Hello } from "./component/Hello";
import Car from "./component/Car";
import ViewListGroup from "./component/ViewListGroup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "hello",
        element: <Hello />,
      },
      {
        path: "car",
        element: <Car />,
      },
      {
        path: "viewlistgroup",
        element: <ViewListGroup />,
      },
    ],
  },
]);
function RouteWeb() {
  return <RouterProvider router={router} />;
}
export default RouteWeb;
