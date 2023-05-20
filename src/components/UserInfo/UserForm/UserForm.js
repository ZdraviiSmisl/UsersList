import React, { useState } from "react";
import styles from "./UserForm.module.css";
import Button from "../../UI/Button";

const UserForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const inputChangeNameHandler = (event) => {
    setInputName(event.target.value);
  };

  const inputChangeAgeHandler = (event) => {
    setInputAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddPerson({
      name: inputName,
      age: inputAge,
      id: String(Date.now()).slice(-10),
    });
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label className={styles.form__label}>
            UserName
            <input
              className={styles.form__input}
              onChange={inputChangeNameHandler}
              value={inputName}
            />
          </label>
          <label className={styles.form__label}>
            Age(Years)
            <input
              className={styles.form__input}
              onChange={inputChangeAgeHandler}
              value={inputAge}
            />
          </label>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

export default UserForm;
