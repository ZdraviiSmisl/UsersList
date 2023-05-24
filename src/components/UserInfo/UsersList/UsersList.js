import styles from "./UsersList.module.css";
import UserItem from "./../UserItem/UserItem";

const UserList = (props) => {
  if (props.persons.length === 0) {
    return (
      <p className={styles["users-list__no-users"]}>
        No one person has been found. How about adding someone?
      </p>
    );
  }
  return (
    <ul className={styles["users-list"]}>
      {props.persons.map((item) => (
        <UserItem
          key={item.id}
          name={item.name}
          age={item.age}
          id={item.id}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
};
export default UserList;
