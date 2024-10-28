import Favorites from "../pages/Favorites";
import After from "../pages/afterCheckOut";
import CartItem from "../pages/cartItem";
import Checkout from "../pages/checkOut";
import Home from "../pages/home";

const routes = [
    {
        element: <Home />,
        path: "/"
    },
    {
        element: <Favorites />,
        path: "/favorites"
    },
    {
        element: <CartItem />,
        path: "/cart"
    },
    {
        element:<Checkout/>,
        path:"/checkout"
    },
    {
        element:<After/>,
        path:"/after"
    }
];

export default routes;