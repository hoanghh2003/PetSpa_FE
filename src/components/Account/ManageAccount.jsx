import React from 'react';

const users = [
  {
    name: 'Amanda Harvey',
    email: 'amanda@example.com',
    position: 'Director',
    department: 'Human resources',
    country: 'United Kingdom',
    status: 'Active',
    portfolio: 72,
    role: 'Employee',
    avatar: 'https://example.com/avatar1.png',
  },
  {
    name: 'Anne Richard',
    email: 'anne@example.com',
    position: 'Seller',
    department: 'Branding products',
    country: 'United States',
    status: 'Pending',
    portfolio: 24,
    role: 'Employee',
    avatar: null,
  },
  {
    name: 'David Harrison',
    email: 'david@example.com',
    position: 'Unknown',
    department: 'Unknown',
    country: 'United States',
    status: 'Active',
    portfolio: 100,
    role: 'Employee',
    avatar: 'https://example.com/avatar2.png',
  },
  {
    name: 'Finch Hoot',
    email: 'finch@example.com',
    position: 'Designer',
    department: 'IT department',
    country: 'Argentina',
    status: 'Suspended',
    portfolio: 50,
    role: 'Employee',
    avatar: 'https://example.com/avatar3.png',
  },
  {
    name: 'Bob Dean',
    email: 'bob@example.com',
    position: 'Executive director',
    department: 'Marketing',
    country: 'Austria',
    status: 'Active',
    portfolio: 5,
    role: 'Employee',
    avatar: null,
  },
];

const statusColors = {
  Active: 'green',
  Pending: 'orange',
  Suspended: 'red',
};

const UserManagement = () => {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Users</h1>
        <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Add user
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>
        <div style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
          <h2>Total Users</h2>
          <p>24 <span style={{ fontSize: '12px', color: '#6c757d' }}>from 22</span></p>
          <p style={{ color: '#28a745' }}>+5.0%</p>
        </div>
        <div style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
          <h2>Active Members</h2>
          <p>12 <span style={{ fontSize: '12px', color: '#6c757d' }}>from 11</span></p>
          <p style={{ color: '#28a745' }}>+1.2%</p>
        </div>
        <div style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
          <h2>New/Returning</h2>
          <p>56% <span style={{ fontSize: '12px', color: '#6c757d' }}>from 48.7</span></p>
          <p style={{ color: '#dc3545' }}>-2.8%</p>
        </div>
        <div style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
          <h2>Active Members</h2>
          <p>28% <span style={{ fontSize: '12px', color: '#6c757d' }}>from 28.6%</span></p>
          <p style={{ color: '#28a745' }}>0.0%</p>
        </div>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>Name</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>Position</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>Country</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>Status</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>Portfolio</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>Role</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6', display: 'flex', alignItems: 'center' }}>
                <img src={user.avatar || 'https://example.com/default-avatar.png'} alt={user.name} style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                {user.name}
              </td>
              <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{user.position}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{user.country}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>
                <span style={{ padding: '5px 10px', borderRadius: '5px', color: 'white', fontSize: '12px', backgroundColor: statusColors[user.status] }}>{user.status}</span>
              </td>
              <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>
                <div style={{ backgroundColor: '#e9ecef', borderRadius: '5px', overflow: 'hidden' }}>
                  <div style={{ height: '10px', width: `${user.portfolio}%`, backgroundColor: '#007bff' }}></div>
                </div>
              </td>
              <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{user.role}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>
                <button style={{ padding: '5px 10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;