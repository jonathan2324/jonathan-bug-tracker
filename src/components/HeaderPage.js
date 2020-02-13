import React from 'react';
import {Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'


const HeaderPage = ({ startLogout }) => {
  return (
    <div>
      <h1>Task Manager</h1>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/create">Add Bug</Link>
      <button onClick={startLogout}>Logout</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    startLogout: () => dispatch(startLogout())
  }
}

export default connect(undefined, mapDispatchToProps)(HeaderPage)