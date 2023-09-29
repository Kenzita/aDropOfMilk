import React from 'react';
import styles from "./Banner.module.scss"
import logoText from "../../assets/images/logos/ADOM.png"

function Banner() {
    return (
        <div>
            <header className="d-flex flex-column  justify-content-between align-items-center p10">
                <img src={logoText} alt="" />
                <h2 className="p1"> Un soin tendrement lacté pour la peau de votre bébé, pour une beauté douce et naturelle <p className="p2" >  Mettez un peu de douceur lactée dans votre quotidien et celui de bébé</p>  </h2>
            </header>
        </div>
    );
}

export default Banner;
