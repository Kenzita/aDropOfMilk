import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import  styles from './Profile.module.scss'
import Navbar from '../NavBar/Navbar';
import Banner from '../Banner/Banner';

function Profile() {
    return (
        <div>
            <Banner />
            <Navbar />
            <div className={`d-flex justify-content-center align-items-center ${styles.titre}`}>
                <NavLink end to=""> <button
                    className={`mr10 btn btn-primary`}>
                    <span>Inscription</span> </button> </NavLink> 
                <NavLink to="connexion">
                    <button
                        className={`mr10 btn btn-primary`}>
                        <span>Connexion</span> </button>
                </NavLink>
            </div>
            <Outlet />
        </div>

    );
}

export default Profile;
