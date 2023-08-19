import { useState } from 'react';
import './Register.scss'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { VscEyeClosed, VscEye } from "react-icons/vsc";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleSignUp = () => {
        toast.success("test");
    }
    return (
        <div className="register-container">
            <div className="header">
                <span>Already have an account</span>
                <button onClick={() => navigate("/login")}>Login</button>
            </div>
            <div className="title col-4 mx-auto">
                HoidanIT
            </div>
            <div className="welcome col-4 mx-auto">
                Start your journey with me?
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email (*)</label>
                    <input
                        type={"email"}
                        required
                        value={email}
                        className="form-control"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group pass-group'>
                    <label>Password (*)</label>
                    <input
                        required
                        type={isShowPassword ? "text" : "password"}
                        value={password}
                        className="form-control"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {isShowPassword ?
                        <span className='icons-eye' onClick={() => setIsShowPassword(false)}>
                            <VscEye />
                        </span> :
                        <span className='icons-eye' onClick={() => setIsShowPassword(true)}>
                            <VscEyeClosed />
                        </span>}
                </div>
                <div className='form-group pass-group'>
                    <label>Confirmed Password (*)</label>
                    <input
                        required
                        type={isShowPassword ? "text" : "password"}
                        value={confirmedPassword}
                        className="form-control"
                        onChange={(event) => setConfirmedPassword(event.target.value)}
                    />
                    {isShowPassword ?
                        <span className='icons-eye' onClick={() => setIsShowPassword(false)}>
                            <VscEye />
                        </span> :
                        <span className='icons-eye' onClick={() => setIsShowPassword(true)}>
                            <VscEyeClosed />
                        </span>}
                </div>
                <div className='form-group'>
                    <label>Username</label>
                    <input
                        required
                        value={username}
                        className="form-control"
                        onChange={(event) => setUsername(event.target.value)}
                        type='text'
                    />
                </div>
                <div className='form-group'>
                    <label>Phone Number</label>
                    <input
                        required
                        value={phone}
                        className="form-control"
                        onChange={(event) => setPhone(event.target.value)}
                        type='text'
                    />
                </div>
                <div>
                    <button className="btn-submit"
                        onClick={handleSignUp}>Create your free account
                    </button>
                </div>

                <div className="text-center">
                    <span className="back" onClick={() => { navigate("/") }}>&#60;&#60;&#60;Go to homepage</span >
                </div>
            </div>
        </div>
    )
}

export default Register;