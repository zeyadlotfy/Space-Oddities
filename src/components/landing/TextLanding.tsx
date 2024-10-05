import React from "react";
import styles from "./textLanding.module.css"
const TextLanding = () => {
    return <div>
        <h1 className=" text-3xl md:text-5xl md:pb-3 xl:text-[3rem]">Geomagnetic Storms</h1>

        <p className="font-normal md:font-bold md:text-[1.5rem]">
            Witness nature&apos;s cosmic light show as <span className={styles.highlight}>
                solar winds dance with Earth&apos;s magnetic field
            </span>
            , creating spectacular auroras and reminding us of our planet&apos;s connection to the cosmos.
        </p>     </div>;
};

export default TextLanding;
