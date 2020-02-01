import React from 'react';
import {Link } from 'react-router-dom';


const HeaderPage = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <Link to="/">Dashboard</Link>
      <Link to="/create">Add Bug</Link>
    </div>
  );
}

export default HeaderPage;