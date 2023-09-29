import React from 'react';
import styles from "./Navbar.module.scss";
import logo from "../../assets/images/logos/logo_gouttte.png";
import { Link } from 'react-router-dom';

function Navbar({ seeLoginForm, seeRegisterForm, seeHomepage, seeProfile, user, logout }) {

  return (
    <div className={`d-flex  justify-content-between align-items-center ${styles.navbar} `}>
      <Link to='/'> <img
        onClick={seeHomepage}
        src={logo}
        alt="goutte de lait" /></Link>
      <ul className='d-flex justify-content-around '>
        <li>
          <Link to="/Bienfaits" > Bienfaits</Link>
        </li>
        <li>
          <Link to="/Recettes"> Recettes</Link>
        </li>
        <li>
          <Link to="/eBook">E-Books</Link>
        </li>
      </ul>

      <div>
        {
          user ? (
            <><button
              onClick={logout}
              className={`mr10 btn btn-primary`}>
              <span>Deconnexion</span>
            </button>

              <button
                onClick={seeProfile}
                className={`mr10 btn btn-primary-reverse`}>
                <i className=" fas fa-right-to-bracket mr5"></i>
                <Link to="/Profile">Profil</Link>
              </button>
            </>
          ) : (
            <><Link to="/inscription"> <button
              onClick={seeRegisterForm}
              className={`mr10 btn btn-primary`}>
              <span>Inscription</span> </button> </Link>
              <Link to="/connexion">
              <button
                onClick={seeLoginForm}
                className={`mr10 btn btn-primary-reverse`}>  <i className=" fas fa-right-to-bracket mr5"></i>
                <span>Connexion</span> </button>
              </Link>
           </>)
        }
      </div>
    </div>
  );
}

export default Navbar;
