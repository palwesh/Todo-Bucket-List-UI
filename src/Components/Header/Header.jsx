import React from "react";
import styles from "./Header.module.css";
import image from "../../images/checklist_icon.png";


function Header() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="My-TODO" />
      <small>My Todo List</small>
      <br />
    </div>
  );
}
export default Header;
