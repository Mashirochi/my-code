import React, { useEffect, useState } from "react";

const CountDown = (props) => {
    const [count, setCount] = useState(10);
    // [count] khi thay đổi, return; code ko thực hiện gì, hook cần set lại
    useEffect(() => {
        if (count === 0) {
            props.setOverTimeCommitOTP(true)
            return;
        }
        const timer = setInterval(() => {
            setCount(count - 1)
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [count]);

    return (
        <React.Fragment>
            <div>
                {count}
            </div>
        </React.Fragment >
    )
}

export default CountDown;