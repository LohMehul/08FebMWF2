import {createBrowserRouter} from "react-router-dom";
import HomePage from "./HomePage.jsx";
import AboutPage from "./AboutPage.jsx";
import ContactPage from "./ContactPage.jsx";
import HeaderComp from "./Header";
const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <><HeaderComp/><HomePage/></>,
    },
    {
        path: "/about",
        element: <><HeaderComp/><AboutPage></AboutPage></>,
    },
    {
        path: "/contact",
        element: <><HeaderComp/><ContactPage/></>,
    },
]);


export default MainRouter;