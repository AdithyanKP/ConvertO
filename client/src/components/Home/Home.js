import React, { useState } from "react";
import styles from "./Home.module.css";
import { Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const Home = () => {
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    setShow(!show);
  };
  return (
    <>
      {show ? (
        <div className={styles.container}>
          <h1 className={styles.title}>Upload File Here</h1>
          <form
            style={{ padding: 20, display: "flex", flexDirection: "row" }}
            action="upload"
            method="post"
            enctype="multipart/form-data"
          >
            <input
              type="file"
              name="upfile"
              value=""
              style={{ color: "rgb(134, 129, 129)" }}
            />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Button variant="outlined" size="small" color="secondary">
                Submit
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <div className={styles.startContainer}>
          <p className={styles.para}>Here you can convert your word to PDF !</p>
          <Button
            variant="contained"
            size="large"
            style={{
              backgroundColor: "white",
              color: "black",
              fontFamily: "monospace",
            }}
            endIcon={<KeyboardArrowRightIcon />}
            onClick={clickHandler}
          >
            Get Started
          </Button>
        </div>
      )}
    </>
  );
};

export default Home;
