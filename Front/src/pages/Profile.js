import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styles from './Profile.module.scss';
import Navbar from '../components/NavBar/Navbar';


function Profile() {
    return (
        <div className={`${styles.container} d-flex flex-column justify-content-center`} >
            <div className={`d-flex justify-content-around align-items-center ${styles.titre} my60`}>
                <NavLink end to=""> <button
                    className={`mr10 btn btn-primary`}>
                    Inscription</button> </NavLink>
                <NavLink to="connexion">
                    <button
                        className={`mr10 btn btn-primary`}>
                        Connexion </button>
                </NavLink>
            </div>
            <Outlet />
        </div>

    );
}

export default Profile;
