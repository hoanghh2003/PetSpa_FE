import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { Edit, Delete, Add, Cancel } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const FormContainer = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
}));

const FormField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
}) => (
  <TextField
    label={label}
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    required={required}
    variant="outlined"
    fullWidth
  />
);

const TableCellActions = styled(TableCell)({
  display: "flex",
  justifyContent: "center",
});

const ActionButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

const AdminPage = () => {
  const [accounts, setAccounts] = useState([]);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
    fullName: "",
    gender: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await axios.get("https://localhost:7150/api/Account");
      setAccounts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const duplicateEmail = accounts.some(
      (account) => account.email === formData.email && account.id !== editId
    );
    const duplicateUserName = accounts.some(
      (account) =>
        account.userName === formData.userName && account.id !== editId
    );
    const duplicatePhoneNumber = accounts.some(
      (account) =>
        account.phoneNumber === formData.phoneNumber && account.id !== editId
    );

    if (duplicateEmail) {
      setError("Email is already in use.");
      return false;
    }

    if (duplicateUserName) {
      setError("Username is already in use.");
      return false;
    }

    if (duplicatePhoneNumber) {
      setError("Phone number is already in use.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (isEditing) {
      await axios.put(`https://localhost:7150/api/Account/update-user/${editId}`, formData);
      setIsEditing(false);
      setEditId(null);
    } else {
      await axios.post("https://localhost:7150/api/Account/register", formData);
    }
    setFormData({
      userName: "",
      email: "",
      password: "",
      phoneNumber: "",
      role: "",
      fullName: "",
      gender: "",
    });
    setShowForm(false);
    fetchAccounts();
  };


  const handleEdit = (account) => {
    setIsEditing(true);
    setEditId(account.id);
    setFormData({
      userName: account.userName,
      email: account.email,
      password: "",
      phoneNumber: account.phoneNumber,
      role: account.roles.join(", "),
      fullName: account.fullName,
      gender: account.gender,
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    console.log(id);
    await axios.delete(`https://localhost:7150/api/Account/delete-account/${id}`);
    fetchAccounts();
  };

  const handleAddNew = () => {
    setIsEditing(false);
    setEditId(null);
    setFormData({
      userName: "",
      email: "",
      password: "",
      phoneNumber: "",
      role: "",
      fullName: "",
      gender: "",
    });
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <Container>
      {showForm && (
        <Container maxWidth="sm" style={{ marginTop: "40px" }}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h4" gutterBottom align="center">
              Admin Page
            </Typography>
            {error && (
              <Typography variant="body2" color="error" align="center">
                {error}
              </Typography>
            )}
            <FormContainer onSubmit={handleSubmit}>
              <FormField
                label="Username"
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
                required
              />
              <FormField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <FormField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                required={!isEditing}
              />
              <FormField
                label="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
              <FormField
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                required
              />
              <FormField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
              <FormField
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              />
              <Box mt={2} display="flex" justifyContent="space-between">
                <Button type="submit" variant="contained" color="primary">
                  {isEditing ? "Update" : "Add"}
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<Cancel />}
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </Box>
            </FormContainer>
          </Paper>
        </Container>
      )}
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={handleAddNew}
        >
          Add New
        </Button>
      </Box>
      <TableContainer component={Paper} sx={{ marginTop: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accounts.map((account) => (
              <TableRow key={account.id}>
                <TableCell>{account.userName}</TableCell>
                <TableCell>{account.email}</TableCell>
                <TableCell>{account.phoneNumber}</TableCell>
                <TableCell>{account.roles.join(", ")}</TableCell>
                <TableCell>{account.name}</TableCell>
                <TableCell>{account.gender}</TableCell>
                <TableCellActions>
                  <ActionButton
                    onClick={() => handleEdit(account)}
                    color="primary"
                  >
                    <Edit />
                  </ActionButton>
                  <IconButton
                    onClick={() => handleDelete(account.id)}
                    color="secondary"
                  >
                    <Delete />
                  </IconButton>
                </TableCellActions>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AdminPage;
