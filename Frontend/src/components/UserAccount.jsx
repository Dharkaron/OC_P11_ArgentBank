import accountData from '../assets/data/accountData.json'


export function UserAccount() {
   return <>
      <h2 className="sr-only">Accounts</h2>

      {accountData.map((data) =>     
        <section className="account" key={data.accountType}>
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank {data.accountType} ({data.accountNumber})</h3>
            <p className="account-amount">{data.amount}</p>
            <p className="account-amount-description">{data.description}</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
            {/* bouton pour afficher les détails des transactions */}
          </div>
        </section>          
      )}
   </>
}