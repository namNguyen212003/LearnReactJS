/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ClientRouter from "./ClientRouter";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
            {<Route path="/*" element={<ClientRouter />} />}
            {/* {<Route path="/admin" element={<AdminRouter />} />} */}

            </Routes>
        </BrowserRouter>
    );
};

export default Routers;