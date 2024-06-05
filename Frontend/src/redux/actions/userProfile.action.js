export const PROFILE_DATA = "PROFILE_DATA"


export const profileData = (userData) => {
  return { type: "PROFILE_DATA", payload: userData }
}



// Gestion de la connexion de l'utilisateur
export const userProfile = (token) => {
  return async (dispatch) => { 
    try { const userPost = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`
            },          
        })
        const response = await userPost.json()
        if(response.status === 200){
          const userData = response.body
          dispatch(profileData(userData))
        } else {
          console.log(`Authorisation non reconnue par l'API`)
        }      
    }
    catch(error){
      console.log(error);
    }
  }
}



// Gestion du changement de nom "userName"
export const changeUserName = (newName, token) => {
  return async (dispatch) => { 
    try { const userPut = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ userName: newName }),          
        })
        const response = await userPut.json()
        console.log(response)
        // Ajout de l'affichage d'un message de confirmation / d'erreur

        if(response.status === 200){ 
          const newData = response.body        
          dispatch(profileData(newData))
        } else {
          console.log(`Authorisation non reconnue par l'API`)
        }      
    }
    catch(error){
      console.log(error);
    }
  }
}
