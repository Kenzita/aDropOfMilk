import React from 'react';
import styles from './MobileMenu.module.scss';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logos/logo_gouttte.png";

function MobileMenu({ user, logout }) {
    return (
        <>
            <div className={`card p20 ${styles.menuContainer}`}> <Link to='/'> <img
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
                                    className={`mr10 btn btn-primary-reverse`}>
                                    <i className=" fas fa-right-to-bracket mr5"></i>
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
        </>
    );
}

export default MobileMenu;
