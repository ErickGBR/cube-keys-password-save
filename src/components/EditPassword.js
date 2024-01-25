// src/components/EditPassword.js
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import {
  Modal,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  Button,
} from '@mui/material';

const EditPassword = ({ password, onClose, onUpdate }) => {
  const [editedPassword, setEditedPassword] = useState({ ...password });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setEditedPassword({ ...password });
  }, [password]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedPassword({ ...editedPassword, [name]: value });
  };

  const handleUpdatePassword = () => {
    // Aquí puedes realizar las validaciones necesarias antes de actualizar la contraseña

    const updatedPasswords = JSON.parse(localStorage.getItem('passwords')) || [];
    const index = updatedPasswords.findIndex((pw) => pw === password);
    updatedPasswords[index] = editedPassword;

    localStorage.setItem('passwords', JSON.stringify(updatedPasswords));
    onUpdate(updatedPasswords);

    Swal.fire('Updated!', 'Password has been updated.', 'success');
    onClose();
  };

  return (
    <Modal open={true} onClose={onClose}>
      <Card>
        <CardHeader title="Edit Password" />
        <CardContent>
          <TextField
            label="Site Name"
            type="text"
            name="siteName"
            value={editedPassword.siteName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Site URL"
            type="text"
            name="siteUrl"
            value={editedPassword.siteUrl}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={editedPassword.password}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            InputProps={{
              endAdornment: (
                <Button onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              ),
            }}
          />
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={handleUpdatePassword}>
            Update
          </Button>
          <Button variant="contained" onClick={onClose}>
            Cancel
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
};

export default EditPassword;
