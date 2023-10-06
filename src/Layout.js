import React, { useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,

} from "react-router-dom";
import User from './components/User';
import Admin from './components/Admin/Admin';
import HomePage from './components/HomePage';
import OTP from './components/OTP/OTP';
import DashBoard from './components/Admin/DashBoard';

import Login from './components/auth/Login';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from "./components/auth/Register";
import ManageUser from "./components/Admin/Manage/ManageUser";
import NotFound from "./components/Route/NotFound";
import { PrivateRoute } from "./components/Route/PrivateRoute";
import Code from "./components/SSO/Code";
const Layout = () => {
    // const navigate = useNavigate();

    // useEffect(() => {
    //     let session = sessionStorage.getItem('account');
    //     if (!session) {
    //         navigate("/login");
    //     }
    // }, [])

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} >
                        <Route index element={<HomePage />} />
                        <Route path="users" element={<PrivateRoute><User /> </PrivateRoute>} />
                        <Route path="otpapp" element={<OTP />} />
                        <Route path="loginsso" element={<HomePage />} />
                    </Route >
                    <Route path="code" element={< Code />}></Route >
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/admin" element={<Admin />} >
                        <Route index element={<DashBoard />} />
                        <Route path="manage-users" element={<ManageUser />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer
                position="bottom-right"
                autoClose={4500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}

export default Layout;