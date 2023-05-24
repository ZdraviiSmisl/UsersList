import styles from "./UserItem.module.css";

const UserItem = (props) => {
  const deletePersonHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <li>
      <p
        className={styles["users-list__user"]}
        onClick={deletePersonHandler}
      >{`${props.name} (${props.age} years old)`}</p>
    </li>
  );
};

export default UserItem;
