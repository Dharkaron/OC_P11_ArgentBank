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
            localStorage.setItem("token", token)
          } else {
            sessionStorage.setItem("token", token)
          }            
            dispatch(loginAlert(`connexion réussie!`))
              // test contact api (code 200 attendu)
            console.log(response)
            console.log(token);
              // renvoi vers la page de l'utilisateur
             setTimeout(() => {
              dispatch(loginSuccess(token))
              navigate("/user")
            }, 2000);
            
          } else{
            dispatch(loginAlert('email ou mot de passe invalide'))
            //localStorage.removeItem("token")
            }
    } 
    catch (error) {
      dispatch(loginAlert(`erreur de connexion avec l'api`))
      console.log(error);
      //localStorage.removeItem("token")
      }
  } 
}


//Gestion de la déconnexion de l'utilisateur
export const userLogout = (navigate) => {
  localStorage.removeItem("token")
  sessionStorage.removeItem("token")
  navigate("/")
  return { type: "LOGOUT" }  
}
