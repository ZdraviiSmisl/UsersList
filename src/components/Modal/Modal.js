import styles from "./Modal.module.css";
import Button from "../UI/Button";

const Modal = (props) => {
  return (
    <section>
      <div>
        <h3>Invalid Input</h3>
        <p>{props.text}</p>
      </div>
      <div>
        <Button type="button">Okay</Button>
      </div>
    </section>
  );
};

export default Modal;
