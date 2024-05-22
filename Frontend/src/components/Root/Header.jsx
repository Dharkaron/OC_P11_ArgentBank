import { useState } from "react";
import {NavLink} from "react-router-dom";


export function Header() {
  
  ////Recup du token stocké dans le cache
  // const token = sessionStorage.getItem("token")

  /* Simulation de la récup d'un token, et de son utilisation pour l'affichage du menu de navigation */
    const [token, setToken] = useState(false)

    const removeToken = () => {setToken(false)}
    const addToken = () => {setToken(true)}

  return <>
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./src/assets/img/argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {token ? 
              <>
                <NavLink className="main-nav-item" to="/user">
                  <i className="fa fa-user-circle"></i>
                  Tony</NavLink>
                <NavLink className="main-nav-item" to="/" onClick={removeToken}>
                  <i className="fa fa-sign-out"></i>
                  Sign Out
                </NavLink>
              </>
              : 
              <NavLink className="main-nav-item" to="/sign-in" onClick={addToken}>
                <i className="fa fa-user-circle"></i>
                Sign In</NavLink>
        }
      </div>
    </nav>
  </>
}


/* Condition pour l'affichage: présence du token d'authentification */
/* Affichage dynamique du nom d'utilisateur (récup sur l'api) */
/* Bouton de déconnexion => suppression du token et renvoi vers la page d'accueil */