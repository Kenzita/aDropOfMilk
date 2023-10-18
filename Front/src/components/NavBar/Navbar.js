import React, { useState } from 'react';
import styles from "./Navbar.module.scss";
import logo from "../../assets/images/logos/logo_gouttte.png";
import { NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu';

function Navbar({ user, logout }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className={`d-flex  justify-content-between align-items-center ${styles.navbar} `}>
        <NavLink end to='/'> <img
          src={logo}
          alt="goutte de lait" /></NavLink>

        <ul className='d-flex justify-content-around '>
          <li>
            <NavLink to="/bienfaits" > Bienfaits</NavLink>
          </li>
          <li>
            <NavLink to="/recettes"> Recettes</NavLink>
          </li>
          <li>
            <NavLink to="/ebook">E-Books</NavLink>
          </li>
        </ul>

        <div>
          {/* {
          user ? (
            <><button
              onClick={logout}
              className={`mr10 btn btn-primary`}>
              <span>Deconnexion</span>
            </button>

              <button
                className={`mr10 btn btn-primary-reverse`}>
                <NavLink to="/profile">Profil</NavLink>
              </button>
            </>
          ) : (
            <><NavLink to="/inscription"> <button
              className={`mr10 btn btn-primary`}>
              <span>Inscription</span> </button> </NavLink>
              <NavLink to="/connexion">
                <button
                  className={`mr10 btn btn-primary-reverse`}> 
                  <span>Connexion</span> </button>
              </NavLink>
            </>)
        } */}
<NavLink to="/profile">
          <i className="fa-solid fa-person-breastfeeding"></i>
          </NavLink>
        </div>

      </div>
      <i
        onClick={() => setShowMenu(true)}
        className={`fas fa-bars mr10 ${styles.mobileHeader}`} ></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"> </div>
          <MobileMenu />
        </>
      )
      }
    </>
  );
}

export default Navbar;
