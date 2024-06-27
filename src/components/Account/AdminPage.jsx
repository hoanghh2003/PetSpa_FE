import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Typography, Box, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const FormContainer = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
}));

const FormField = styled(TextField)({
  width: '100%',
});

const TableCellActions = styled(TableCell)({
  display: 'flex',
  justifyContent: 'center',
});

const ActionButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

const AdminPage = () => {
  const [accounts, setAccounts] = useState([]);
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    phoneNumber: '',
    role: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await axios.get('https://localhost:7150/api/Account');
      setAccounts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await axios.put(`https://localhost:7150/api/Account/${editId}`, formData);
      setIsEditing(false);
      setEditId(null);
    } else {
      await axios.post('https://localhost:7150/api/Account/register', formData);
    }
    setFormData({
      userName: '',
      email: '',
      password: '',
      phoneNumber: '',
      role: ''
    });
    fetchAccounts();
  };

  const handleEdit = (account) => {
    setIsEditing(true);
    setEditId(account.id);
    setFormData({
      userName: account.userName,
      email: account.email,
      password: '',
      phoneNumber: account.phoneNumber,
      role: account.role
    });
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://localhost:7150/api/Account/${id}`);
    fetchAccounts();
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Admin Page
      </Typography>
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
        <Button type="submit" variant="contained" color="primary" fullWidth>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </FormContainer>
      <TableContainer component={Paper} sx={{ marginTop: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accounts.map((account) => (
              <TableRow key={account.id}>
                <TableCell>{account.userName}</TableCell>
                <TableCell>{account.email}</TableCell>
                <TableCell>{account.phoneNumber}</TableCell>
                <TableCell>{account.role}</TableCell>
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