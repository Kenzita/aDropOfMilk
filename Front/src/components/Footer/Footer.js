import styles from "./Footer.module.scss";

export default function Footer() {
    return(
    <footer
        className={`d-flex justify-content-center align-items-center p20 ${styles.footer}`}> Corpyright © 2023 AdropofmilkInc.
    </footer>
    );
}