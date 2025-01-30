import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ user, onSave }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, phone };

    if (user) {
      axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, userData)
        .then(response => onSave(response.data));
    } else {
      axios.post('https://jsonplaceholder.typicode.com/users', userData)
        .then(response => onSave(response.data));
    }

    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className='formdiv'>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        required
      />
      <button type="submit">{user ? 'Update' : 'Create'} User</button>
    </form>
    </div>
  );
};

export default UserForm;
