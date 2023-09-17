import { lazy } from "react";
const Login = lazy(() => import("../services/auth/Login"));
const Home = lazy(() => import("../pages/home/Home"));
const authUser = localStorage.getItem("authToken")

export const routes = [
    { _id: "h-o-m-e-1", path: "/", Component: authUser ? Home : Login },
]
