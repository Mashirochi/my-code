import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { doLogin } from "../../redux/action/accountAction"
const Code = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const firstRunRef = useRef(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const message = useSelector(state => state.account.errMessage);
    const user = useSelector(state => state.account.userInfo);


    useEffect(() => {
        const ssoToken = searchParams.get("ssoToken");
        if (ssoToken && firstRunRef.current === false) {
            firstRunRef.current = true
            dispatch(doLogin(ssoToken));
        }
    }, [])
    useEffect(() => {
        if (user && user.access_token) {
            navigate('/');
        }
    }, [user])
    return (
        <>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-3">
                            {message}
                            {message && <span>pls do login again</span>}
                        </div>
                    </div>
                </div>


            </div>
        </>
    )


};

export default Code;