import { useSelector } from "react-redux"
import { PropTypes } from "prop-types"
import { Navigate } from "react-router-dom"


export default function ProtectedRoute({children}) {
  const isConnected = useSelector(state => state.login.token)
  return isConnected ? children : <Navigate to={"/sign-in"}/>
}


ProtectedRoute.propTypes = {
  children: PropTypes.node
}