import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const ProtectRoute = ({children}) => {
    const {accessToken} = useAuth();
    console.log(accessToken);
    
  
    return accessToken ? children : <Navigate to="/login" replace />
}

export default ProtectRoute
