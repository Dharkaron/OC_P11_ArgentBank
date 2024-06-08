import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeUserName } from "../redux/actions/userProfile.action"


export function UserInfo() {

  const dispatch = useDispatch()
  const Token = useSelector(state => state.login.token)
  const userData = useSelector(state => state.user?.userData)
  const [newName, setNewName] = useState(userData?.userName)
  const [editMode, setEditMode] = useState(false)


  // Gestion du bouton d'édition
  const handleEdit = () => {
    setEditMode(true)
    // Affichage du "username" à la première ouverture du formulaire
    setNewName(userData?.userName)
  }

  // Fermeture du formulaire de modification, et reset du "userName"
  const handleCancel = (e) => {
    e.preventDefault()
    setEditMode(false)
    setNewName(userData?.userName)
  }

  // Fonction handleSave => appel la fonction fetch type "PUT" pour changer les infos sur l'API 
  const handleSave = (e) => {
    e.preventDefault()
    dispatch(changeUserName(newName, Token))
    // Fermeture du formulaire une fois le changement effectué
    setEditMode(false)
  }


  return <>
      <div className="user-info">
          
          { !editMode ?
            <>
            <h1>Welcome back<br />{`${userData?.firstName} ${userData?.lastName}`}</h1>
            <button className="button" onClick={handleEdit}>Edit Name</button>
            </>
            :
            <>
            <h1>Edit User Info</h1>
            <form className="user-edit">
              <div className="input-wrapper">
                  <label htmlFor="username">User Name: </label>
                  <input 
                    type="text" 
                    id="username" 
                    value={newName} 
                    onChange={(e) => setNewName(e.target.value)}
                  />
              </div>
              <div className="input-wrapper">
                  <label>First Name: </label>
                  <input 
                    className="disabled"
                    type="text" 
                    id="userfirstname" 
                    value={userData?.firstName} 
                    disabled
                  />
              </div>
              <div className="input-wrapper">
                  <label>Last Name: </label>
                  <input
                    className="disabled" 
                    type="text" 
                    id="userlastname"  
                    value={userData?.lastName} 
                    disabled
                  />
              </div>
                <div className="btn-wrapper">
                  <button className="button user-edit-btn" onClick={handleSave}>Save</button>       
                  <button className="button user-edit-btn" onClick={handleCancel}>Cancel</button>
                </div>               
            </form>
            </>
          }

      </div>
  </>
}