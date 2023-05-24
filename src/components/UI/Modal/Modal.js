import styles from "./Modal.module.css";
import Button from "../Button/Button";
import React, { useState } from "react";

const ErrorModal = (props) => {
  return (
    <div>
      <section className={`${styles.modal}`}>
        <div className={styles.wrap}>
          <h3 className={styles["modal__head"]}>{props.title}</h3>
          <p className={styles["modal__text"]}>{props.message}</p>
        </div>
        <div className={styles.wrap}>
          <Button onClick={props.onConfirm} type="button">
            Okay
          </Button>
        </div>
      </section>
      <div
        className={`${styles["modal__overlay"]}`}
        onClick={props.onConfirm}
      ></div>
    </div>
  );
};

export default ErrorModal;
