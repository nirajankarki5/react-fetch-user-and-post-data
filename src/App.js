import UsersList from "./UsersList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostsList from "./PostsList";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Users");

  const userName = (name, path) => {
    setName(name);
  };
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>{name}</h1>
        </header>

        <div className="content">
          <Routes>
            <Route path="/" element={<UsersList userName={userName} />} />
            <Route path="/users/:id/posts" element={<PostsList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
