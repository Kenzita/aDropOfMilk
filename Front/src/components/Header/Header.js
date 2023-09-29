import Banner from "../Banner/Banner"
import NavBar from "../NavBar/Navbar"

function Header({seeLoginForm, seeRegisterForm, seeHomepage, seeProfile, user, logout}) {
    return (
        <>
    <Banner  seeLoginForm={seeLoginForm}
                seeRegisterForm={seeRegisterForm}
                seeHomepage={seeHomepage}
                user={user}
                seeProfile={seeProfile}
                logout={logout}/>
    <NavBar />
        </>
    )
}

export default Header
