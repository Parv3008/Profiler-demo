import React, { useState, useEffect } from "react";

export default function WithoutMemoComponent() {
  const [users, setUsers] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []); 

  const filteredUsers = users.filter(user => user.name.toUpperCase().includes("A"));

  return (
    <div style={{ padding: "20px" }}>
      <h2>Without useMemo</h2>
      <button onClick={() => setCounter(prev => prev + 1)}>Counter: {counter}</button>
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
