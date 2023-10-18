import styles from "./App.module.scss";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer"


function App() {

    // const [seeComponent, setSeeComponent] = useState(1);
    // const [user, setUser] = useState(null);

    // console.log(user);

    // const getUser = (userLogged) => {
    //     setUser(userLogged);
    // };

    return (
        <div className={`d-flex flex-column  ${styles.appContainer}`}>
            
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;

