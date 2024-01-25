// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { BiPlus, BiListUl, BiUser } from 'react-icons/bi'; // Puedes cambiar los iconos según tus necesidades
import { slide as Menu } from 'react-burger-menu';

const Sidebar = () => {
  return (
    <Menu>
      <Link to="/add-password">
        <BiPlus />
        <span>Add Password</span>
      </Link>
      <Link to="/view-passwords">
        <BiListUl />
        <span>View Passwords</span>
      </Link>
      <Link to="/account">
        <BiUser />
        <span>Account</span>
      </Link>
    </Menu>
  );
};

export default Sidebar;
