import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { userLogout } from "../../redux/actions/userConnection.action"




export function Header() {
 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // On récupère les informations de l'utilisateur stockés dans le Store
  const userData = useSelector(state => state.user?.userData)

  // Logique pour l'affichage du menu de navigation, à partir du token de connexion,
  let LoggedIn = window.localStorage.getItem("localToken")
    if(LoggedIn === null) {
      LoggedIn = window.sessionStorage.getItem("sessionToken")
    }


  // Déconnexion au clic du bouton "Sign Out"
    const handleLogout = () => {
      dispatch(userLogout(navigate))
    }

  return <>
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="/src/assets/img/argentBankLogo.webp"
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

