import { useState } from "react";

const GenerateOTP = (props) => {
    const [orgOTP, setOrgOTP] = useState("");
    const handleCLickButton = () => {
        const otp = Math.floor(100000 + Math.random() * 900000);
        setOrgOTP(otp);
        props.setOrgOTPParent(otp)
    }

    return (
        <div className="generate-otp-container">
            <button onClick={() => handleCLickButton()}> GenerateOTP </button>
            <div>Your OTP is: {orgOTP}</div>
        </div>
    )
}

export default GenerateOTP;
