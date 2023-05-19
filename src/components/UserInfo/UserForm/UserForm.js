import styles from "./UserForm.module.css";
import Button from "../../UI/Button";

const UserForm = () => {
  return (
    <div>
      <form>
        <div>
          <label>
            UserName
            <input />
          </label>
          <label>
            Age(Years)
            <input />
          </label>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

export default UserForm;
