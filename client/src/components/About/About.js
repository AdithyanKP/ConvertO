import React from "react";
import styles from "./About.module.css";
const About = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hai Iam Adithyan</h1>
          <p style={{ fontSize: 20, fontFamily: "cursive" }}>
            Currently work as a Software Engineer at Infospica consultancy and
            services.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
