import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ListedBooksPage from "../Pages/ListedBooksPage";
import PagesToReadBooks from "../Pages/PagesToReadBooks";
import NotFound from "../Pages/NotFound";
import RootLayout from "../Components/RootLayout/RootLayout";


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
                element: <PagesToReadBooks />
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default routes;