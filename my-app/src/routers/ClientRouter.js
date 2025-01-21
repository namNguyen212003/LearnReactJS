/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeSreen from "../screens/client/HomeSreen";
import AboutScreen from "../screens/client/AboutScreen";
import Header from "../component/client/Header";
import Footer from "../component/client/Footer";
import Banner from "../component/client/Banner";


const ClientRouter = () => {
    const location = useLocation();

    // add css
    const addCssLink = (href) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
    };

    const addInitialCssLinks = () => {
       
        addCssLink(`https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css`);
       
    };

    addInitialCssLinks();

    // chua router, page 
    const routes = [
        {
            path: '/',
            element: <HomeSreen />,
            showFilter: false,
            showBanner: true,
            showHeader: true,
            showFooter: true
        },
        {
            path: '/about',
            element: <AboutScreen />,
            showFilter: false,
            showBanner: true,
            showHeader: true,
            showFooter: true
        }
    ];

    const currentRoute = routes.find(route =>
        matchPath({ path: route.path, end: true }, location.pathname)
    );
    

    return (
        <div>
            <div className="headerClient">
                <Header />
                <Banner/>
            </div>
            <div className="contentClient">
                <Routes>
                    {routes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element} />
                    ))}
                </Routes>
            </div>
            <div className="footerClient">
                <Footer />
            </div>
        </div>
    );
};

export default ClientRouter;
