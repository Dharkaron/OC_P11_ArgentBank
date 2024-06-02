import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { userLogout } from "../../redux/actions/userConnection.action";



export function Header() {
 
  const dispatch = useDispatch()
  const LoggedIn = useSelector(state => state.login.token)
  const navigate = useNavigate()

    let tok = sessionStorage.getItem("token")
      if (!tok) {
        tok = localStorage.getItem("token")
      }

    const displayToken = () => {   
      console.log(tok);
    }

    const handleLogout = (e) => {
      e.stopPropagation()
      dispatch(userLogout(navigate))
    }

  return <>
    <nav className="main-nav">

      <button onClick={displayToken}>token test</button>

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
                  Tony</NavLink>
                <NavLink className="main-nav-menu-item" onClick={(e) => handleLogout(e)}>
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

/* Affichage dynamique du nom d'utilisateur (récup sur l'api) */
