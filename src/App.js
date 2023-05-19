import React from "react";
import UserList from "./components/UserInfo/UsersList/UsersList";
import UserForm from "./components/UserInfo/UserForm/UserForm";

function App() {
  return (
    <div>
      <section>
        <UserForm />
      </section>
      <section>
        <UserList />
      </section>
    </div>
  );
}

export default App;
