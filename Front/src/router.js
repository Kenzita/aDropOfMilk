import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";
import Bienfaits from "./components/pages/Bienfaits";
import EBook from "./components/pages/EBook";
import Homepage from "./components/pages/Homepage";
import Profile from "./components/pages/Profile";
import Recettes from "./components/pages/Recettes";

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