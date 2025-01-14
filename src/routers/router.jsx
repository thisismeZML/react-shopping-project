import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";

const router = createBrowserRouter([
    ...PublicRoute,
])

export default router;