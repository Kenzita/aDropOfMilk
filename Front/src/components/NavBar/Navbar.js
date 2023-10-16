import React, { useState } from 'react';
import styles from "./Navbar.module.scss";
import logo from "../../assets/images/logos/logo_gouttte.png";
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

function Navbar({ user, logout }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
    <div className={`d-flex  justify-content-between align-items-center ${styles.navbar} `}>
      <Link to='/'> <img
        src={logo}
        alt="goutte de lait" /></Link>
<div className={styles.desktopHeader}>
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
      </div>
      <div>
        {
          user ? (
            <><button
              onClick={logout}
              className={`mr10 btn btn-primary`}>
              <span>Deconnexion</span>
            </button>

              <button
                className={`mr10 btn btn-primary-reverse`}>
                <Link to="/Profile">Profil</Link>
              </button>
            </>
          ) : (
            <><Link to="/inscription"> <button
              className={`mr10 btn btn-primary`}>
              <span>Inscription</span> </button> </Link>
              <Link to="/connexion">
                <button
                  className={`mr10 btn btn-primary-reverse`}> 
                  <span>Connexion</span> </button>
              </Link>
            </>)
        }
      </div>
     
      </div>
      <i
                onClick={() => setShowMenu(true)}
                className={`fas fa-bars mr10 ${styles.mobileHeader}`} ></i>
            {showMenu && (
                <>
                <div onClick={() => setShowMenu(false)} className="calc"> </div>
                <MobileMenu/>
                </>
    )
}
    </>
  );
}

export default Navbar;
