import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from '../components/UserForm';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch users');
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      });
  };

  const handleSave = (user) => {
    if (editingUser) {
      // Update user
      setUsers(users.map(u => u.id === user.id ? user : u));
    } else {
      // Create new user
      setUsers([user, ...users]);
    }
    setEditingUser(null);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>User Management</h1>

      <UserForm user={editingUser} onSave={handleSave} />

      <table className='w100'>
        {users.map(user => (
          <tr key={user.id}>
            <td>
            <Link to={`/user/${user.id}`}>
              {user.name} - {user.email} - {user.phone}
            </Link>
            </td>
            <td>
            <button onClick={() => setEditingUser(user)}>Edit</button>
            </td>
            <td>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default HomePage;
