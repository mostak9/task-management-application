import {  useContext } from "react";
import {AuthContext} from '../../../Providers/AuthProvider/AuthProvider'
import { Spinner } from "@material-tailwind/react";
import {Navigate, useLocation} from 'react-router-dom'
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) return <div className="flex items-center justify-center min-h-screen"><Spinner /></div>
    if(!user) return <Navigate to={'/login'} state={location.pathname} />
    return children
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}

export default PrivateRoute;