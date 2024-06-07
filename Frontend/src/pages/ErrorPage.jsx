import { NavLink } from "react-router-dom";

export function ErrorPage() {
  return <>
    <main className="error-page">
      <h2 className="error-title">Error 404</h2>
      <p className="error-subtitle">{`"This is not the page you're looking for"`}</p>
      <NavLink to={"/"} className="error-link">Go back <i className="fa-solid fa-house"></i></NavLink>
    </main>
  </>
}