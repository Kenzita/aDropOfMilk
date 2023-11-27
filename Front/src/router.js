import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";
import Bienfaits from "./pages/Bienfaits";
import EBook from "./pages/EBook";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Recettes from "./pages/Recettes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/bienfaits",
                element: <Bienfaits />
            },
            {
                path: "/recettes",
                element: <Recettes />
            },
            {
                path: "/ebook",
                element: <EBook />
            },
            {
                path: "/profile",
                element: <Profile />,
                children : [
                    {
                        path: "",
                        element: <Register />
                    },
                    {
                        path: "connexion",
                        element: <Login />
                    },
                ]
            },
        ]
    }
]
);