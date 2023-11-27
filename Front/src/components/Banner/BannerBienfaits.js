import React from 'react';
import styles from "./BannerBienfaits.module.scss";
import logoText from "../../assets/images/Bienfaits/titreBienfaits.png";

function BannerBienfaits() {
    return (
        <>
            <header className={`d-flex flex-column  justify-content-between align-items-center p10 ${styles.headerB}`}>
                <img src={logoText} alt="" />
                <h2 className="p1"> une source naturelle de soin pour les bébés et les adultes <p className="p2" >  Le lait maternel, en plus d'être essentiel pour le développement des bébés, présente des vertus cosmétiques insoupçonnées.</p>  </h2>
            </header>


        </>
    );
}

export default BannerBienfaits;
