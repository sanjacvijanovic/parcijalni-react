import React, { useState } from "react";
import "./App.css";
import UserDetails from "./components/UserDetails";
import UserForm from "./components/UserForm";

const App = () => {
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);

  const handleSubmit = async (username) => {
    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      const user = await userResponse.json();

      const repositoriesResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const repositories = await repositoriesResponse.json();

      setUser(user);
      setRepositories(repositories);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleReset = () => {
    setUser(null);
    setRepositories([]);
  };

  return (
    <div>
      {!user ? (
        <UserForm onSubmit={handleSubmit} />
      ) : (
        <>
          <UserDetails user={user} repositories={repositories} />
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </div>
  );
};

export default App;
