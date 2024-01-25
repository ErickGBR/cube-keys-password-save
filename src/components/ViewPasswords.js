// src/components/ViewPasswords.js
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Modal,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Stack,
} from "@mui/material";
import EditPassword from "./EditPassword";
import "../assets/css/viewpassword.css";

const ViewPasswords = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [passwords, setPasswords] = useState([]);
  const [filteredPasswords, setFilteredPasswords] = useState([]);
  const [selectedPassword, setSelectedPassword] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const storedPasswords = JSON.parse(localStorage.getItem("passwords")) || [];
    setPasswords(storedPasswords);
  }, []);

  useEffect(() => {
    const filtered = passwords.filter(
      (pw) =>
        pw.siteUrl.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pw.siteName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPasswords(filtered);
  }, [searchTerm, passwords]);

  const handleEditPassword = (password) => {
    setSelectedPassword(password);
    setEditMode(true);
  };

  const handleDeletePassword = (password) => {
    Swal.fire({
      title: "Delete Password",
      text: "Are you sure you want to delete this password?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedPasswords = passwords.filter((pw) => pw !== password);
        localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
        setPasswords(updatedPasswords);
        Swal.fire("Deleted!", "Password has been deleted.", "success");
      }
    });
  };

  const handleCloseEdit = () => {
    setSelectedPassword(null);
    setEditMode(false);
  };

  return (
    <div className="view-passwords-container">
      <Card
        variant="outlined"
        style={{ backgroundColor: "white", width: "80%", margin: "0 auto" }}
      >
        <CardContent>
          <h2 style={{ margin: "20px 0" }}>View Passwords</h2>
          <TextField
            type="text"
            placeholder="Search by name or URL"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
            margin="normal"
          />
        </CardContent>

        <TableContainer style={{ margin: "20px 0" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Site Name</TableCell>
                <TableCell>Site URL</TableCell>
                <TableCell>Password</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredPasswords.map((pw, index) => (
                <TableRow key={index}>
                  <TableCell>{pw.siteName}</TableCell>
                  <TableCell>{pw.siteUrl}</TableCell>
                  <TableCell>{pw.password}</TableCell>
                  <TableCell>
                    <Stack spacing={1} direction="row">
                      <Button
                        onClick={() => handleEditPassword(pw)}
                        variant="contained"
                        color="primary"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => handleDeletePassword(pw)}
                        variant="contained"
                        color="error"
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      {editMode && (
        <Modal
          open={true}
          onClose={handleCloseEdit}
          className="edit-password-modal"
        >
          <Card>
            <CardHeader title="Edit Password" />
            <CardContent>
              <EditPassword
                password={selectedPassword}
                onClose={handleCloseEdit}
                onUpdate={setPasswords}
              />
            </CardContent>
            <CardActions>
              <Button variant="contained" onClick={handleCloseEdit}>
                Cancel
              </Button>
            </CardActions>
          </Card>
        </Modal>
      )}
    </div>
  );
};

export default ViewPasswords;
