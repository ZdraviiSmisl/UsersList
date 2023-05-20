import React, { useState } from "react";
import UserList from "./components/UserInfo/UsersList/UsersList";
import UserForm from "./components/UserInfo/UserForm/UserForm";
import styles from "./App.module.css";

const INITIAL_PERSONS_LIST = [
  { name: "Piter", age: 33, id: "p1" },
  { name: "Evgeniy", age: 25, id: "p2" },
  { name: "Kate", age: 50, id: "p3" },
];

function App() {
  const [personsList, setPersonsList] = useState(INITIAL_PERSONS_LIST);

  const AddPersonHandler = (newPerson) => {
    setPersonsList((prevPersons) => {
      return [newPerson, ...prevPersons];
    });
  };

  const DeleteHandlerPerson = () => {};

  return (
    <div className={styles["users-list"]}>
      <section className={styles["users-list__section"]}>
        <UserForm onAddPerson={AddPersonHandler} />
      </section>
      <section className={styles["users-list__section"]}>
        <UserList persons={personsList} />
      </section>
    </div>
  );
}

export default App;
