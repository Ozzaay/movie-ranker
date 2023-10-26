import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  const fetchUserList = async () => {
    try {
      const response = await fetch("http://localhost:5000/user_list");
      if (response.ok) {
        const jsonData = await response.json();
        setUsers(jsonData);
      } else {
        console.error('Failed to fetch user list');
      }
    } catch (error) {
      console.error('Error fetching user list:', error);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;