import React, { useState } from "react";

const UserForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={handleChange}
        placeholder="Enter GitHub Username"
      />
      <button type="submit">Get User Details</button>
    </form>
  );
};

export default UserForm;
