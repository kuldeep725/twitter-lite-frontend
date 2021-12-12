import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from './Common';

// handle the private routes
function PrivateRoute() {
    const isAuthorized = getToken() !== null;
    return isAuthorized ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;