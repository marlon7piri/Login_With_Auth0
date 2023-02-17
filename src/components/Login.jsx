import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


export default function Login() {
  const { loginWithRedirect, user, logout, isLoading, isAuthenticated } =
    useAuth0();



  const verificacion = async () => {
    await loginWithRedirect();
  };
  if (isLoading) {
    return <div>Is Loading....</div>;
  }
  if (isAuthenticated) {
    return (
      <div>
        <h2>Bienvenido {user.name}</h2>
        <h2>Email: {user.email}</h2>
        <h2>Email: {user.gender}</h2>

        <img src={user.picture} alt="" className="imagen" />
        <button onClick={() => logout({ returnto: window.location.origin })}>
          Log out
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => verificacion()}>Log in</button>
      </div>
    );
  }
}
