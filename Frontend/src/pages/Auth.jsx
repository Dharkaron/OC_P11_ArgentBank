import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginAlert, resetAlert, userLogin } from "../redux/actions/userConnection.action"



export function Auth() {

  const form = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isChecked, setIsChecked] = useState(false);
  const alertMessage = useSelector(state => state.login.alertMessage)

  // Gestion du formulaire de connexion   
  const handleForm = async (e) => {
    e.preventDefault()
  
    const loginData = {
      "email": form.current[0].value,
      "password": form.current[1].value
    }
    
    if(loginData.email.trim() === "" || loginData.password.trim() === ""){
      dispatch(loginAlert(`Error: please fill out every field!`))
    } else {
      dispatch(userLogin(loginData, navigate, isChecked))
    }
    
      // Réinitialisation du formulaire au clic du bouton d'envoi
    form.current.reset()
      // Réinitialisation du message d'erreur après un délai
    setTimeout(() => {
      dispatch(resetAlert())
    }, 2000);
  }


  return <>
    <main className="main bg-dark">
      <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form ref={form} onSubmit={(e) => handleForm(e)}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input 
                type="checkbox" 
                id="remember-me"
                checked={isChecked}
                onChange={(event) => setIsChecked(event.target.checked)}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>           
          </form>
          {alertMessage && <div className="alert-message">{alertMessage}</div>}
        </section>
    </main>
  </>
}

