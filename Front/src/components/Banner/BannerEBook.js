import React from 'react';
import styles from "./BannerE.module.scss"
import logoText from"../../assets/images/Ebook/titreEbook2.png"

function BannerEBook() {
    return (
        <>
            <header className={`d-flex flex-column  justify-content-between align-items-center p10 ${styles.headerE}`}>
            <img src={logoText} alt="" />
                <h2 className="p1"> Éveillez la Lactation : E-Books Gourmands pour Maman et Bébé <p className="p2" >  Découvrez notre Collection d'E-Books pour Stimuler la Lactation Maternelle et Préparer des Repas Sains à Base de Lait Maternel, Parfaits pour Votre Bien-Être et Celui de Votre Bébé</p>  </h2>
            </header>


        </>
    );
}

export default BannerEBook;
