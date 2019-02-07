import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="active" exact>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="active">Create expense</NavLink>
    <NavLink to="/help" activeClassName="active">Help</NavLink>
  </header>
);

export default Header;
