import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={styles["users-list__button"]}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
