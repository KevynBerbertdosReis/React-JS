import { createBrowserRouter } from "react-router-dom";
import homeRoutes from "./store/home/home";
import dashboardRoutes from "./dashboard/dashboard-routes";

const router = createBrowserRouter([homeRoutes, dashboardRoutes]);

export default router;