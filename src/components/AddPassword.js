// src/components/AddPassword.js
import React, { useState } from 'react';
import { Card, CardContent, TextField, Button as MUIButton, Container, Grid } from '@mui/material';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button as RSButton } from 'reactstrap';
import '../assets/css/addpassword.css';

const AddPassword = () => {
  const [siteName, setSiteName] = useState('');
  const [siteUrl, setSiteUrl] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalIcon, setModalIcon] = useState('');

  const handleSavePassword = () => {
    // Validaciones y lógica de guardado en localStorage
    try {
      // Guardar en localStorage o enviar al servidor
      const newPassword = { siteName, siteUrl, password };
      const storedPasswords = JSON.parse(localStorage.getItem('passwords')) || [];
      const updatedPasswords = [...storedPasswords, newPassword];
      localStorage.setItem('passwords', JSON.stringify(updatedPasswords));

      // Mostrar modal de éxito
      setModalMessage('Password guardada con éxito');
      setModalIcon('success');
      setShowModal(true);
    } catch (error) {
      // Mostrar modal de error
      setModalMessage('Error al guardar la password');
      setModalIcon('error');
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    // Puedes añadir más lógica si es necesario al cerrar el modal
  };

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card className="account-container">
            <CardContent>
              <h2>Add Password</h2>
              <form>
                <TextField
                  label="Site Name"
                  type="text"
                  value={siteName}
                  onChange={(e) => setSiteName(e.target.value)}
                  placeholder="Enter site name"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="URL"
                  type="text"
                  value={siteUrl}
                  onChange={(e) => setSiteUrl(e.target.value)}
                  placeholder="Enter URL"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  fullWidth
                  margin="normal"
                />
                <MUIButton variant="contained" onClick={handleSavePassword} fullWidth>
                  Save
                </MUIButton>
              </form>
            </CardContent>
            <Modal isOpen={showModal} toggle={closeModal} className={modalIcon}>
              <ModalHeader toggle={closeModal}></ModalHeader>
              <ModalBody>
                <p>{modalMessage}</p>
              </ModalBody>
              <ModalFooter>
                <RSButton color="primary" onClick={closeModal}>
                  Close
                </RSButton>
              </ModalFooter>
            </Modal>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddPassword;
