import { useEffect, useState } from "react";
import User from "./User";

const UsersList = ({ userName }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setUsers(users);
      setIsLoading(false);
    } catch (err) {
      console.log("There was an error " + err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {!isLoading &&
        users.map((user) => {
          return (
            <div key={user.id}>
              <User user={user} userName={userName} />
            </div>
          );
        })}
    </div>
  );
};

export default UsersList;
