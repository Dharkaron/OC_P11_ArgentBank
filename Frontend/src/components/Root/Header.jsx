import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { userLogout } from "../../redux/actions/userConnection.action"




export function Header() {
 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isRemembered = useSelector(state => state.login.isCheck)
  const userData = useSelector(state => state.user?.userData)
  const persistToken = useSelector(state => state.login.token)

  // Logique pour l'affichage du menu de navigation, à partir du token de connexion,
  // en fonction du state du bouton "rememberMe"
  let LoggedIn
  if(isRemembered) {
    LoggedIn = window.localStorage.getItem("localToken")
  }else {
    LoggedIn = window.sessionStorage.getItem("sessionToken")
  }

    //// Affichage test pour les info de connexion (token, info api...)
      let tok = window.sessionStorage.getItem("sessionToken")
      let tokn = window.localStorage.getItem("localToken")

      const displayToken = () => {   
        console.log("window.sessionStorage: ", tok ? true : false)
        console.log("window.localStorage: ", tokn ? true : false)
        console.log("Redux-Persist token storage: ", persistToken ? true : false)
        console.log("état du check du formulaire: ", isRemembered)
        console.log("Récup infos user: ", userData)
      }
    ////

    // Déconnexion au clic du bouton "Sign Out"
    const handleLogout = () => {
      dispatch(userLogout(navigate))
    }

  return <>
    <nav className="main-nav">

      <button onClick={displayToken}>connexion test</button>

      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./src/assets/img/argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div className="main-nav-menu">
        {LoggedIn ? (
              <>
                <NavLink className="main-nav-menu-item" to="/user">
                  <i className="fa fa-user-circle main-nav-menu-icon"></i>
                  {userData?.userName}</NavLink>
                <NavLink className="main-nav-menu-item" onClick={() => handleLogout()}>
                  <i className="fa fa-sign-out main-nav-menu-icon"></i>
                  Sign Out
                </NavLink>
              </> 
            ) : (
              <NavLink className="main-nav-menu-item" to="/sign-in">
                <i className="fa fa-user-circle main-nav-menu-icon"></i>
                Sign In</NavLink> )
        }
      </div>
    </nav>
  </>
}

