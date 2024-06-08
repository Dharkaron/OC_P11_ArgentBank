import { useSelector } from "react-redux"
import { PropTypes } from "prop-types"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


export default function ProtectedRoute({children}) {
  const isConnected = useSelector(state => state.login.token)
  const navigate = useNavigate()

  useEffect(() => {
    if(isConnected === null){
      navigate('/sign-in')
    }
  }, [navigate, isConnected])

  return children 
}


ProtectedRoute.propTypes = {
  children: PropTypes.node
}