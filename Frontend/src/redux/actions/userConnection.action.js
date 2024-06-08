import { userProfile } from "./userProfile.action"

export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_ALERT = "LOGIN_ALERT"
export const RESET_ALERT = "RESET_ALERT"
export const LOGOUT = "LOGOUT"


export const loginSuccess = (token) => {
  return { type: "LOGIN_SUCCESS", payload: token }
}

export const loginAlert = (alertMessage) => {
  return { type: "LOGIN_ALERT", payload: alertMessage }
} 

export const resetAlert = () => {
  return { type: "RESET_ALERT" }
}



// Gestion de la connexion de l'utilisateur
export const userLogin = (loginData, navigate, rememberMe) => {
  return async (dispatch) => { 
    try { const loginPost = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(loginData),
          })
          const response = await loginPost.json()

          if (response.status === 200){
            const token = response.body.token
            if (rememberMe) {                  
            window.localStorage.setItem("localToken", token)
          } else {
            window.sessionStorage.setItem("sessionToken", token)
          }           
            dispatch(loginAlert(`${response.message}. \n Redirecting to User page`))
              // test contact api (code 200 attendu)
            console.log(response)
            console.log(token)
              // renvoi vers la page de l'utilisateur
              // Dispatch "loginSuccess" pour stocker le token dans le store de redux
              // Dispatch de "getUserProfile" pour récupérer les données d'utilisateur, et les stocker dans le store
             setTimeout(() => {
              dispatch(loginSuccess(token))
              dispatch(userProfile(token))
              navigate("/user")
            }, 2000);
            
          } else{
            dispatch(loginAlert(response.message))
            }
    } 
    catch (error) {
      dispatch(loginAlert(`erreur de connexion avec l'api`))
      console.log(error)
      }
  } 
}


//Gestion de la déconnexion de l'utilisateur
export const userLogout = (navigate) => {
    // Suppression du token d'identification
  localStorage.removeItem("localToken")
  sessionStorage.removeItem("sessionToken")
    // Renvoi vers la page d'accueil
  navigate("/")
    // Réinitialisation de tout les états stockés dans le store
  return { type: "LOGOUT" }  
}
