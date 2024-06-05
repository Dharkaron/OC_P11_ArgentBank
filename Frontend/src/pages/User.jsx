import { UserAccount } from '../components/UserAccount'
import { UserInfo } from '../components/UserInfo'


export function User() {


  return <>
    <main className="main bg-dark">
      <UserInfo />
      <UserAccount />
    </main>
  </>
}
