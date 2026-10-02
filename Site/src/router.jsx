import { createBrowserRouter, Navigate } from "react-router";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/home" replace />,
	},
	{
		path: "/home",
		lazy: () => import("./pages/Home.jsx"),
	},
]);

export default router;
