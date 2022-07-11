import React from "react";
import styles from "./About.module.css";
const About = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title} style={{ fontFamily: "cursive" }}>
            Hai Iam Adithyan
          </h1>
          <p style={{ fontSize: 20, fontFamily: "cursive", color: "white" }}>
            Work as a Software Engineer at Neoito.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
