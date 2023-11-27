import styles from "./App.module.scss";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer"
import UserProvider from "./components/Providers/UserProvider";
import Navbar from "./components/NavBar/Navbar";


function App() {

    return (
        <UserProvider>
        <div className={`d-flex flex-column  ${styles.appContainer}`}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
        </UserProvider>
    );
}

export default App;

