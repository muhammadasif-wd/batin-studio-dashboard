import { lazy } from "react";
const Contact = lazy(() => import("../pages/Contact"));


export const routes = [
    { _id: "contact-1", path: "contact", Component: Contact },
]
