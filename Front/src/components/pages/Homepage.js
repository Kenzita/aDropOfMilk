import CookieConsent from "react-cookie-consent";


function Homepage() {
    return (
        <div>
            <CookieConsent
            location="bottom"
            buttonText="Accepter"
            cookieName="myAwesomeCookieName"
            style={{ background: "var(--text-color)", fontSize:"1.3em", textAlign:"center" }}
            buttonStyle={{ padding: ".3em 1em", 
                borderRadius: "3em",
                fontFamily: "var(--font-family-main)",
                fontSize:" .8em",
                backgroundColor: "var(--divider)",
                color: "var(--main)",
                border: "2px solid var(--divider)" }}
            expires={150}
            overlay>
                🍪 Ce site Web utilise des cookies pour améliorer l'expérience utilisateur 🍪 </CookieConsent>

   <h1>Homepage </h1>
        </div >
    );
}

export default Homepage;
