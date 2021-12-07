import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { selectAuth } from "../store/user/selectors";


export const PublicRoute = ({children}) => {
    const  authed = useSelector(selectAuth)
    return !authed ? children : <Navigate to='/chats' replace />
}