import CookieConsent from "react-cookie-consent";
import Banner from "../components/Banner/Banner";
import styles from "./Homepage.module.scss";
import bebe1 from "../assets/images/accueil/bebe1.png";
import bebe2 from "../assets/images/accueil/bebe2.png";
import bebe3 from "../assets/images/accueil/bebe3.png";
import intro from "../assets/images/accueil/introImage.png";
import bienfaits from "../assets/images/accueil/bienfaits.png";
import { NavLink } from "react-router-dom";


function Homepage() {


    return (
        <>
            <div>
                <CookieConsent
                    location="bottom"
                    buttonText="Accepter"
                    cookieName="myAwesomeCookieName"
                    style={{ background: "var(--text-color)", fontSize: "1.3em", textAlign: "center" }}
                    buttonStyle={{
                        padding: ".3em 1em",
                        borderRadius: "3em",
                        fontFamily: "var(--font-family-main)",
                        fontSize: " .8em",
                        backgroundColor: "var(--divider)",
                        color: "var(--main)",
                        border: "2px solid var(--divider)"
                    }}
                    expires={150}
                    overlay>
                    🍪 Ce site Web utilise des cookies pour améliorer l'expérience utilisateur 🍪 </CookieConsent>
                <Banner />

            </div >
            <main className="d-flex flex-column align-items-center justify-content-center">
                <section className={`${styles.intro}  mb20`}>
                    <article className={`${styles.introArticle} d-flex flex-wrap justify-content-center align-items-center m10`}>
                        <p>Plongez dans l'univers des recettes cosmétiques à base de lait maternel spécialement conçues pour les tout-petits sur notre site dédié ! Nous mettons en avant les vertus exceptionnelles du lait maternel pour la peau délicate des bébés. Notre plateforme propose une approche douce et naturelle, offrant les bienfaits du lait maternel non seulement aux tout-petits, mais aussi aux adultes. Découvrez nos recettes innovantes qui utilisent les propriétés apaisantes et nourrissantes du lait maternel pour prendre soin de la peau de votre bébé. Offrez à votre enfant une expérience de soin naturelle et bienveillante, grâce à nos produits cosmétiques riches en nutriments bienfaisants.</p>
                        <img src={intro} alt="" />
                        {/* <details>
                            <summary>
                                Plongez dans l'univers des recettes cosmétiques à base de lait maternel spécialement conçues pour les tout-petits sur notre site dédié ! Nous mettons en avant les vertus exceptionnelles du lait maternel pour la peau délicate des bébés.
                            </summary>
                            <p> Notre plateforme propose une approche douce et naturelle, offrant les bienfaits du lait maternel non seulement aux tout-petits, mais aussi aux adultes. Découvrez nos recettes innovantes qui utilisent les propriétés apaisantes et nourrissantes du lait maternel pour prendre soin de la peau de votre bébé. Offrez à votre enfant une expérience de soin naturelle et bienveillante, grâce à nos produits cosmétiques riches en nutriments bienfaisants.</p>
                        </details> */}
                    </article>
                </section>
                <section className={`${styles.bebeSection}`}>
                    <article className={`${styles.bebe} d-flex justify-content-around align-items-center flex-wrap`}>
                        <img src={bebe1} alt="" />
                        <img src={bebe2} alt="" />
                        <img src={bebe3} alt="" />
                    </article>
                    <h2>Les bienfaits du lait maternel</h2>
                </section>
                <section className={`${styles.bienfaits}  mb20`}>
                    <article className={`${styles.bienfaitsArticle} d-flex  justify-content-center align-items-center  flex-wrap m10`}>
                        <img src={bienfaits} alt="" />
                        <div className={`${styles.bienfaitsTexte} d-flex flex-column justify-content-center align-items-cente`}>
                            <p>Nous vous proposons une variété de recettes  pour vous permettre de créer vos propres soins naturels à base de lait maternel. Des baumes hydratants aux lotions apaisantes, en passant par les masques nourrissants, vous aurez la possibilité de personnaliser les produits selon les besoins spécifiques de votre bébé.</p>
                            <NavLink to="/recettes">
                                <button className="btn btn-primary-reverse">Découvrir</button>
                            </NavLink>
                        </div>
                    </article>
                </section>
                <section className="eBook">
                </section>

            </main>

        </>
    );
}

export default Homepage;
