import { useState, useEffect } from "react";
import "./Login.scss"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    useEffect(() => {
        document.title = 'Login';
    }, []);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        toast.success("CLICk")
    }
    return (
        <div className="login-container">
            <div className="header">
                <span>Don't have an account?</span>
                <button onClick={() => navigate("/register")}>Sign up</button>
            </div>
            <div className="title col-4 mx-auto">
                HoidanIT
            </div>
            <div className="welcome col-4 mx-auto">
                Hello, who's this?
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type={"email"}
                        required
                        value={email}
                        className="form-control"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label>Password</label>
                    <input
                        required
                        type={"password"}
                        value={password}
                        className="form-control"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <button className="btn-submit"
                        onClick={handleLogin}>Login
                    </button>
                </div>
                <div className="text-center">
                    <span className="back" onClick={() => { navigate("/") }}>&#60;&#60;&#60;Go to homepage</span >
                </div>
            </div>
        </div>

    )
}

export default Login; 