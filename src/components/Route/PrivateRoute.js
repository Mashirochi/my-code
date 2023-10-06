// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = (props) => {
    //when have redux
    // const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    // if (!isAuthenticated) {
    //     return <Navigate to="/login"></Navigate>
    const session = sessionStorage.getItem('account');
    if (!session) {
        return <Navigate to="/login"></Navigate>
    }

    return (
        <>
            {props.children}</>
    )
}

