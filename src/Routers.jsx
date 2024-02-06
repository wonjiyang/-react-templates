import { BrowserRouter, Route, Routes } from "react-router-dom";
import Marketplace from "./views/marketplace/Marketplace";
import DataTables from "./views/datatables/DataTables";
import Profile from "./views/profile/Profile";
import SignIn from "./views/signin/SignIn";
import Home from "./views/home/Home";
import Layout, { LayoutNone } from "./component/layout/Layout";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/datatables" element={<DataTables />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>

                <Route element={<LayoutNone />}>
                    <Route path="/signin" element={<SignIn />} />
                </Route>    
            </Routes>
        </BrowserRouter>    
    )
}

export default Routers