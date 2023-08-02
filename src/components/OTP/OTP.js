import GenerateOTP from "./GenerateOTP";
import InputOTP from "./InputOTP";
import "./otp.scss"
import { Helmet } from 'react-helmet';
import { useEffect, useState } from "react";
import CountDownAnimation from "./CountDownAnimation";

const OTP = () => {
    const TITLE = 'OTP APP';
    const [orgOTPParent, setOrgOTPParent] = useState("");
    const [userInputOTPParent, setuserInputOTPParent] = useState("")
    const [overTimeCommitOTP, setOverTimeCommitOTP] = useState(false);
    const handleSubmitOTP = () => {
        if (+orgOTPParent === +userInputOTPParent) {
            alert("CORRECT OTP")
        } else {
            alert("WRONG OTP")
        }
    }
    return (

        <div className="otp-parent-container">
            <CountDownAnimation />
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <GenerateOTP
                setOrgOTPParent={setOrgOTPParent}
            />
            <InputOTP
                setuserInputOTPParent={setuserInputOTPParent}
                handleSubmitOTP={handleSubmitOTP}
                overTimeCommitOTP={overTimeCommitOTP}
                setOverTimeCommitOTP={setOverTimeCommitOTP}
            />
        </div>
    )

}

export default OTP;