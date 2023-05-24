import React, { useState } from "react";
import UserList from "./components/UserInfo/UsersList/UsersList";
import UserForm from "./components/UserInfo/UserForm/UserForm";
import ErrorModal from "./components/UI/Modal/Modal";
import styles from "./App.module.css";

const INITIAL_PERSONS_LIST = [
  { name: "Piter", age: 33, id: "p1" },
  { name: "Evgeniy", age: 25, id: "p2" },
  { name: "Kate", age: 50, id: "p3" },
];

function App() {
  const [personsList, setPersonsList] = useState(INITIAL_PERSONS_LIST);
  //Create state without initial parameter in oder to create an error object conditionally
  const [error, setError] = useState();

  const AddPersonHandler = (userName, userAge) => {
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age(non-empty values)",
      });
      //It aborts function execution in case it was entered ivalid value
      return;
    }

    if (+userAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age(>0).",
      });
      return;
    }

    setPersonsList((prevPersons) => [
      ...prevPersons,
      { name: userName, age: userAge, id: String(Date.now()).slice(-10) },
    ]);
  };

  const DeleteHandlerPerson = (personId) => {
    return setPersonsList((prevPersons) =>
      [...prevPersons].filter((person) => person.id !== personId)
    );
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div className={styles["users-list"]}>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <section className={styles["users-list__section"]}>
        <UserForm onAddPerson={AddPersonHandler} />
      </section>
      <section className={styles["users-list__section"]}>
        <UserList persons={personsList} onDelete={DeleteHandlerPerson} />
      </section>
    </div>
  );
}

export default App;
