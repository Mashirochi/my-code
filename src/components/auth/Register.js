import { useState } from 'react';
import './Register.scss'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { registerNewUser } from '../../service/userService';
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const defaultValidInput = {
        isValidEmail: true,
        isValidPhone: true,
        isValidPassword: true,
        isValidConfirmedPassword: true
    }
    const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);
    const isInvalidInput = () => {
        const regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        setObjCheckInput(defaultValidInput);
        if (!email) {
            toast.error("email is required");
            setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
            return false;
        }
        if (!regx.test(email)) {
            toast.error("Invalid Email");
            setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
            return false;
        }
        if (!password) {
            toast.error("password is required");
            setObjCheckInput({ ...defaultValidInput, isValidPassword: false });
            return false;
        }
        if (!phone) {
            toast.error("Phone is required")
            setObjCheckInput({ ...defaultValidInput, isValidPhone: false });
            return false;
        }
        if (!confirmedPassword) {
            toast.error("Pls re-enter password");
            setObjCheckInput({ ...defaultValidInput, isValidConfirmedPassword: false });
            return false;
        }
        if (password !== confirmedPassword) {
            toast.error("Your password is not the same");
            return false;
        }

        return true;
    }

    const navigate = useNavigate();

    const handleSignUp = async () => {
        let check = isInvalidInput()
        if (check === true) {
            let res = await registerNewUser(email, phone, username, password);
            let serverData = res.data;
            if (+serverData.EC === 0) {
                toast.success(serverData.EM)
                navigate("/")
            }
            else {
                toast.error(serverData.EM)
            }
        }
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
                    <button className="btn-submit" type="submit"
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