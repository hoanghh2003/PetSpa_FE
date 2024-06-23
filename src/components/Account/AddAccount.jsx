import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const AddAccount = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    department: '',
    accountType: 'Individual',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Avatar</Label>
        <Input type="file" name="avatar" />
      </FormGroup>
      <FormGroup>
        <Label>Full name</Label>
        <Input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Phone (Optional)</Label>
        <Input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Organization</Label>
        <Input
          type="text"
          name="organization"
          value={form.organization}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Department</Label>
        <Input
          type="text"
          name="department"
          value={form.department}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Account type</Label>
        <RadioGroup>
          <Label>
            <Input
              type="radio"
              name="accountType"
              value="Individual"
              checked={form.accountType === 'Individual'}
              onChange={handleChange}
            />
            Individual
          </Label>
          <Label>
            <Input
              type="radio"
              name="accountType"
              value="Company"
              checked={form.accountType === 'Company'}
              onChange={handleChange}
            />
            Company
          </Label>
        </RadioGroup>
      </FormGroup>
      <Button type="submit">Next</Button>
    </Form>
  );
};

export default AddAccount;