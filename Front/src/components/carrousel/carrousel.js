import styles from "./Carrousel.module.scss";

function Carrousel() {
    return (
        <>
            <div className={`${styles.container}`}>
                <div>
                    <div className={`${styles.content}`}>
                        <button className="btn btn-primary"> Télécharger</button>
                    </div>
                </div>
                <div>
                    <div className={`${styles.content}`}>
                        <button className="btn btn-primary"> Télécharger</button>
                    </div>
                </div>
                <div>
                    <div className={`${styles.content}`}>
                        <button className="btn btn-primary"> Télécharger</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Carrousel;
