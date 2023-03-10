import React from "react";
import "./Navbar.css";
import logo from "../images/Movieslogo.png";
import { getAuth, signOut } from "firebase/auth";

 
const Navbar =({onLogout})=>{

  const logout =()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
      onLogout();
      localStorage.removeItem('token');
    }).catch((error) => {
      alert(error.message)
    });
  }

return <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid">
<img className="logo" src={logo} alt="logo" />
  {/* <a className="navbar-brand" to="#">MoviesX</a> */}
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" to="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" to="#">Link</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Disabled</a>
      </li>
      
    </ul>
    <button  type="button" className="btn loginbtn btn-light" onClick={logout}>Logout</button>
  </div>
  
</div>
</nav>

}
export default Navbar;