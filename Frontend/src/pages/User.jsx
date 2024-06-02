import PropTypes from 'prop-types'
import accountData from '../assets/data/accountData.json'

export function User() {
  return <>
    <main className="main bg-dark">
      <div className="header">
          <h1>Welcome back<br />Tony Jarvis!{/* Recup du nom de l'utilisateur à afficher, via l'api */}</h1>
          <button className="edit-button">Edit Name</button>
          {/* Bouton de modif, renvoi sur modale/nouvelle page ? */}
          {/* => condition d'affichage pour une modale/ contenu sur la page */}
      </div>
        <h2 className="sr-only">Accounts</h2>

        {/* section account en tant que Composant? */}
        {accountData.map((data) =>     
            <section className="account" key={data.accountType}>
              <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank {data.accountType} ({data.accountNumber})</h3>
                <p className="account-amount">{data.amount}</p>
                <p className="account-amount-description">{data.description}</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
              </div>
            </section>          
        )}
    </main>
  </>
}

User.propTypes = {
  data: PropTypes.object
}