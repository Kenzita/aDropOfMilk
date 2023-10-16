import styles from "./App.module.scss";
import { useState } from "react";
import Layout from "./Layout/Layout";


function App() {

    // const [seeComponent, setSeeComponent] = useState(1);
    // const [user, setUser] = useState(null);

    // console.log(user);

    // const getUser = (userLogged) => {
    //     setUser(userLogged);
    // };

    return (
        <div className={`d-flex flex-column  ${styles.appContainer}`}>
            <Layout />
        </div>
    );
}

export default App;

