import styles from "./App.module.scss";
import { Outlet } from "react-router-dom";


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
        </div>
    );
}

export default App;

