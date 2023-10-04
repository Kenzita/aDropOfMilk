import React from 'react';
import styles from "./BannerRecettes.module.scss"
import logoText from"../../assets/images/Recettes/titreRecettes.png"

function BannerBienfaits() {
    return (
        <>
            <header className={`d-flex flex-column  justify-content-between align-items-center p10 ${styles.headerR}`}>
            <img src={logoText} alt="" />
                <h2 className="p1"> une source naturelle de soin pour les bébés et les adultes <p className="p2" >  Plongez dans l'Atelier Lacté et découvrez des formules naturelles et bienfaisantes pour prendre soin de la peau de votre bébé, grâce aux propriétés nourrissantes et régénérantes du lait maternel</p>  </h2>
            </header>


        </>
    );
}

export default BannerBienfaits;
