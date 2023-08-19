import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import User from './components/User';
import Admin from './components/Admin/Admin'
import HomePage from './components/HomePage';
import OTP from './components/OTP/OTP';
import DashBoard from './components/Admin/DashBoard';
import ManageUser from './components/Admin/ManageUser';
import Login from './components/auth/Login';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from "./components/auth/Register";

const Layout = () => {
    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<App />} >
                        <Route index element={<HomePage />} />
                        <Route path="users" element={<User />} />
                        <Route path="otpapp" element={<OTP />} />
                    </Route >
                    <Route path="/admin" element={<Admin />} >
                        <Route index element={<DashBoard />}></Route>
                        <Route path="manage-users" element={<ManageUser />}></Route>
                    </Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
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