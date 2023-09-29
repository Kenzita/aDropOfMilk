import styles from "./App.module.scss";
import { useState } from "react";
import Layout from "./Layout/Layout"


function App() {

    // const [seeComponent, setSeeComponent] = useState(1);
    // const [user, setUser] = useState(null);

    // console.log(user);

    // const seeRegisterForm = () => {
    //     setSeeComponent(2);
    // };

    // const seeLoginForm = () => {
    //     setSeeComponent(3);
    // };

    // const seeHomepage = () => {
    //     setSeeComponent(1);
    // };
    // const seeProfile = () => {
    //     setSeeComponent(4);
    // };
    // const logout = () => {
    //     setSeeComponent(3);
    //     setUser(null);
    // };

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

