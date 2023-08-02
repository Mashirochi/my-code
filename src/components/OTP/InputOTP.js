import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import CountDown from './CountDown';


const InputOTP = (props) => {
    const [otp, setOtp] = useState('');
    const handleChange = (otp) => {
        setOtp(otp);
        props.setuserInputOTPParent(otp);
    }
    const handleConfirmOTP = () => {
        props.handleSubmitOTP();
    }
    return (
        <div className='input-otp-container'>
            <div className='title'>Enter Verification Code</div>
            <OtpInput
                inputStyle={"input-customize"}
                value={otp}
                onChange={handleChange}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
            />
            <div className='timer'>
                <CountDown setOverTimeCommitOTP={props.setOverTimeCommitOTP} />
            </div>
            <div className='action'>
                <button className='clear'>Clear</button>
                <button className='confirm'
                    onClick={() => handleConfirmOTP()}
                    disabled={props.overTimeCommitOTP}>

                    Confirm</button>
            </div>
        </div>
    )
}

export default InputOTP;