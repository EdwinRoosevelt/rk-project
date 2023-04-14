import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
	BrowserRouter,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/projects",
		element: <Project />,
	},
	{
		path: "/contact",
		element: <Contacts />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <BrowserRouter>
			<App />
		</BrowserRouter> */}
		<RouterProvider router={router} />
	</React.StrictMode>
);
