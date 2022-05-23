import React from "react";
import styles from "./Home.module.css";
import { Button } from "@mui/material";
const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
