import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardActions, TextField, Button as MUIButton, Container, Grid, Switch, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import '../assets/css/account.css';
import Swal from 'sweetalert2';

const Account = () => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [nickname, setNickname] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    // Recuperar información de sessionStorage al cargar el componente
    const storedNickname = sessionStorage.getItem('nickname') || '';
    const storedProfilePicture = sessionStorage.getItem('profilePicture') || '';
    const storedBirthDate = sessionStorage.getItem('birthDate') || '';
    const storedGender = sessionStorage.getItem('gender') || '';
    const storedLightMode = sessionStorage.getItem('lightMode') === 'true';

    setNickname(storedNickname);
    setProfilePicture(storedProfilePicture);
    setBirthDate(storedBirthDate);
    setGender(storedGender);
    setLightMode(storedLightMode);
  }, []);

  const handleSaveAccount = () => {
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to save changes?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Save',
    }).then((result) => {
      if (result.isConfirmed) {
        // Guardar información en sessionStorage
        sessionStorage.setItem('nickname', nickname);
        sessionStorage.setItem('profilePicture', profilePicture);
        sessionStorage.setItem('birthDate', birthDate);
        sessionStorage.setItem('gender', gender);
        sessionStorage.setItem('lightMode', lightMode.toString());
        Swal.fire('Saved!', 'Your changes have been saved.', 'success');
      }
    });
  };

  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: '100vh' }}
      >
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card>
            <CardContent>
              <h2>Account</h2>
              <form>
                <TextField
                  label="Nickname"
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="Enter your nickname"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Profile Picture"
                  type="text"
                  value={profilePicture}
                  onChange={(e) => setProfilePicture(e.target.value)}
                  placeholder="Enter URL for profile picture"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Birth Date"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <label>
                  Gender:
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </label>
                <label>
                  Light Mode:
                  <Switch
                    label="Light Mode"
                    onChange={(e) => setLightMode(e.target.value === 'true')}
                    fullWidth
                    margin="normal"
                    {...label}
                    defaultChecked
                  />
                </label>
              </form>
            </CardContent>
            <CardActions>
              <MUIButton variant="contained" onClick={handleSaveAccount} fullWidth>
                Save
              </MUIButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Account;
