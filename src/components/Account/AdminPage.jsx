import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Box,
  IconButton,
} from "@mui/material";
import { Edit, Delete, Add, Cancel } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Table, Space } from "antd";

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

const TableCellActions = styled("div")({
  display: "flex",
  justifyContent: "left",
});

const ActionButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(0),
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
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await axios.get("https://localhost:7150/api/Account");
      setAccounts(response.data);
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

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "Username",
      dataIndex: "userName",
      key: "userName",
      sorter: (a, b) => a.userName.length - b.userName.length,
      sortOrder: sortedInfo.columnKey === "userName" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.length - b.email.length,
      sortOrder: sortedInfo.columnKey === "email" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      sorter: (a, b) => a.phoneNumber.localeCompare(b.phoneNumber),
      sortOrder: sortedInfo.columnKey === "phoneNumber" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Role",
      dataIndex: "roles",
      key: "role",
      render: (roles) => roles.join(", "),
      filters: Array.from(new Set(accounts.flatMap((account) => account.roles))).map((role) => ({
        text: role,
        value: role,
      })),
      filteredValue: filteredInfo.role || null,
      onFilter: (value, record) => record.roles.includes(value),
      sorter: (a, b) => a.roles.join(", ").localeCompare(b.roles.join(", ")),
      sortOrder: sortedInfo.columnKey === "role" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <TableCellActions>
          <ActionButton onClick={() => handleEdit(record)} color="primary">
            <Edit />
          </ActionButton>
          <IconButton onClick={() => handleDelete(record.id)} color="secondary">
            <Delete />
          </IconButton>
        </TableCellActions>
      ),
    },
  ];

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
      <Space
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={() => { setFilteredInfo({}); setSortedInfo({}); }}>
          Clear filters and sorters
        </Button>
      </Space>
      <Table
        columns={columns}
        dataSource={accounts}
        onChange={handleChange}
        rowKey="id"
      />
    </Container>
  );
};

export default AdminPage;
