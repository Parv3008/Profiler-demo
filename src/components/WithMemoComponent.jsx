import React, { useState, useEffect, useMemo } from "react";

export default function WithMemoComponent() {
  const [users, setUsers] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []); 

  const filteredUsers = useMemo(() => {
    console.log("Running filtering...");
    return users.filter(user => user.name.toUpperCase().includes("A"));
  }, [users]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>With useMemo</h2>
      <button onClick={() => setCounter(prev => prev + 1)}>Counter: {counter}</button>
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
