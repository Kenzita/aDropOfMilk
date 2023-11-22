import styles from "./App.module.scss";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer"


function App() {

    return (
        <div className={`d-flex flex-column  ${styles.appContainer}`}>
            
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;

