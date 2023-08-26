import { useState, useEffect } from "react";
import "./Login.scss"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from "../../service/userService";

const Login = () => {
    useEffect(() => {
        document.title = 'Login';
    }, []);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const defaultObjValidInput = {
        isValidEmail: true,
        isValidPassword: true
    }
    const [objValidInput, setObjValidInput] = useState(defaultObjValidInput)
    const handleLogin = async () => {
        setObjValidInput(defaultObjValidInput);
        if (!email) {
            setObjValidInput({
                ...defaultObjValidInput, isValidEmail: false
            })
            toast.error("Pls enter email or phone")
            return;
        }
        if (!password) {
            setObjValidInput({
                ...defaultObjValidInput, isValidPassword: false
            })
            toast.error("Pls enter your password")
            return;
        }

        let res = await loginUser(email, password);
        if (res && res.data && +res.data.EC === 0) {
            //success
            let data = {
                isAuthenticated: true,
                token: "fake token"
            }
            sessionStorage.setItem('account', JSON.stringify(data))
            navigate("/")
            window.location.reload();
        }
        if (res && res.data && +res.data.EC !== 0) {
            toast.error(res.data.EM)
        }
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
                        className={objValidInput.isValidEmail ? 'form-control' : "is-invalid form-control"}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label>Password</label>
                    <input
                        required
                        type={"password"}
                        value={password}
                        className={objValidInput.isValidPassword ? 'form-control' : "is-invalid form-control"}
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