import React from "react";
import styles from "./textLanding.module.css"
const TextLanding = () => {
    return <div>
        <h1 className={styles.h1}>Geomagnetic Storms</h1>

        <p className={styles.p}>
            Witness nature&apos;s cosmic light show as <span className={styles.highlight}>
                solar winds dance with Earth&apos;s magnetic field
            </span>
            , creating spectacular auroras and reminding us of our planet&apos;s connection to the cosmos.
        </p>     </div>;
};

export default TextLanding;
