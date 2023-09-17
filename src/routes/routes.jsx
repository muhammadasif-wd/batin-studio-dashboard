import { lazy } from "react";
const Login = lazy(() => import("../services/auth/Login"));
const Home = lazy(() => import("../pages/home/Home"));

export const routes = [
    { _id: "h-o-m-e-1", path: "/", Component: Home },
    { _id: "l-o-g-i-n-2", path: "/login", Component: Login },
]
