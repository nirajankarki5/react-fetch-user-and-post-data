import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const User = ({ user, userName }) => {
  return (
    <div className="user-container">
      <Link to={`/users/${user.id}/posts`} onClick={() => userName(user.name)}>
        <AccountCircleIcon style={{ fontSize: "50px", color: "#3f37c9" }} />

        <div className="user-details">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      </Link>
    </div>
  );
};

export default User;
