// import {
//     BrowserRouter,
//     Routes,
//     Route,
//     useNavigate
// } from "react-router-dom";
// import User from './components/User';
// import Admin from './components/Admin/Admin';
// import HomePage from './components/HomePage';
// import OTP from './components/OTP/OTP';
// import DashBoard from './components/Admin/DashBoard';
// import ManageUser from './components/Admin/Manage/ManageUser';
// import Login from './components/auth/Login';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Register from "./components/auth/Register";
// import { useEffect } from "react";

// const Layout = () => {
//     //     const navigate = useNavigate();
//     //     useEffect(() => {
//     //         let session = sessionStorage.getItem('account');
//     //         if (!session) {
//     //             navigate("/login");
//     //         }
//     //     }, [])
//     return (
//         <>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/" element={<App />} >
//                         <Route index element={<HomePage />} />
//                         <Route path="users" element={<User />} />
//                         <Route path="otpapp" element={<OTP />} />
//                     </Route >
//                     <Route path="/admin" element={<Admin />} >
//                         <Route index element={<DashBoard />}></Route>
//                         <Route path="manage-users" element={<ManageUser />}></Route>
//                     </Route>
//                     <Route path="/login" element={<Login />}></Route>
//                     <Route path="/register" element={<Register />}></Route>
//                 </Routes>
//             </BrowserRouter>
//             <ToastContainer
//                 position="bottom-right"
//                 autoClose={4500}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="dark"
//             />
//         </>
//     )
// }
// export default Layout;

import React, { useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate
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
                        <Route path="users" element={<User />} />
                        <Route path="otpapp" element={<OTP />} />
                    </Route >
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/admin" element={<Admin />} >
                        <Route index element={<DashBoard />} />
                        <Route path="manage-users" element={<ManageUser />} />
                    </Route>
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