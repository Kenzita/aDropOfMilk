import Banner from "../Banner/Banner"
import NavBar from "../NavBar/Navbar"

function Header({user, logout}) {
    return (
        <>
    <Banner
                user={user}
                logout={logout}/>
    <NavBar />
        </>
    )
}

export default Header
