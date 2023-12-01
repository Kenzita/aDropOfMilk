import React, { useState } from 'react';
import styles from "./Navbar.module.scss";
import logo from "../../assets/images/logos/logo_gouttte.png";
import { NavLink } from 'react-router-dom';


function Navbar({ user, logout }) {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuBurger = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className={`d-flex  justify-content-between align-items-center ${styles.navbar} `}>
        <NavLink end to='/'> <img
          src={logo}
          alt="goutte de lait" /></NavLink>
        <ul className={`d-flex justify-content-around  ${styles.menu}`}>
          <li>
            <NavLink to="/bienfaits" > Bienfaits</NavLink>
          </li>
          <li>
            <NavLink to="/recettes"> Recettes </NavLink>
          </li>
          <li>
            <NavLink to="/ebook">E-Books</NavLink>
          </li>
        </ul>
        <div>
          <NavLink to="/profile" className={`${styles.navlink}`}>
            <i className="fa-solid fa-person-breastfeeding"></i>
          </NavLink>
        </div>
      </nav>


      <div className={`d-flex  justify-content-between align-items-center ${styles.menuBurger}`}>
        <i class="fa-solid fa-ellipsis" onClick={showMenuBurger}></i>

        {
          showMenu ? ( 
          <ul onClick={showMenuBurger} className={`d-flex  flex-column justify-content-evenly  ${styles.menuB}`}>
            <li>
              <NavLink end to='/'> Accueil </NavLink>
            </li>

            <li>
              <NavLink to="/bienfaits" > Bienfaits</NavLink>
            </li>
            <li>
              <NavLink to="/recettes"> Recettes </NavLink>
            </li>
            <li>
              <NavLink to="/ebook">E-Books</NavLink>
            </li>
            <li>
              <NavLink to="/profile">
                Connexion / Inscription
              </NavLink>

            </li>
          </ul>) : ("")
        }

        <div>
        </div>

      </div>
    </>
  );
}

export default Navbar;
