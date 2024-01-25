// src/components/Header.js
import React from 'react';
import { Card, CardImg } from 'reactstrap';

const Header = () => {
  return (
    <Card className="text-center">
      <CardImg src="URL_DEL_LOGO" alt="Logo" className="logo" />
      <h1>PasswordCube</h1>
    </Card>
  );
};

export default Header;
