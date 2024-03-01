import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Users from "../pages/Users";
import UsersDetail from "../pages/UsersDetail";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/userdetail/:id",
    element: <UsersDetail />,
  },
];

export default routes;
