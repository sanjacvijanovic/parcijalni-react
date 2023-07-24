import React from "react";

const UserDetails = ({ user, repositories }) => {
  return (
    <div>
      <img src={user.avatar_url} alt="Profile" />
      <h2>{user.name}</h2>
      <p>Location: {user.location}</p>
      <p>Bio: {user.bio}</p>
      <h3>Repositories:</h3>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;
