import { Navigate } from "react-router";
import { removeUserSession } from "../Utils/Common"

const Logout = () => {
    removeUserSession();
    return <Navigate to="/login" />;
}

export default Logout;