import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Components/RootLayout/RootLayout";
import HomePage from "../Pages/HomePage";
import ListedBooksPage from "../Pages/ListedBooksPage";
import NotFound from "../Pages/NotFound";


const routes = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "listedBooks",
                element: <ListedBooksPage />
            },
            {
                path: "pagesToReadBooks",
                element: <HomePage />
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default routes;