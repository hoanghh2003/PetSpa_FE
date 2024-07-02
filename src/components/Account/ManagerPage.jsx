import React, { useState, useEffect } from "react";
import { Button, Space, Table, Input, Modal, Form, message } from "antd";
import "../../assets/css/managerPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ManagerPage = () => {
  const initialEmployees = [
    {
      key: "1",
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      age: 33,
      startDate: "2008/11/28",
      salary: "$162,700",
    },
    {
      key: "2",
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: 63,
      startDate: "2011/07/25",
      salary: "$170,750",
    },
    {
      key: "3",
      name: "Angelica Ramos",
      position: "Chief Executive Officer (CEO)",
      office: "London",
      age: 47,
      startDate: "2009/10/09",
      salary: "$1,200,000",
    },
    {
      key: "4",
      name: "Paul Byrd",
      position: "Chief Financial Officer (CFO)",
      office: "New York",
      age: 64,
      startDate: "2010/06/09",
      salary: "$725,000",
    },
    {
      key: "5",
      name: "Yuri Berry",
      position: "Chief Marketing Officer (CMO)",
      office: "New York",
      age: 40,
      startDate: "2009/06/25",
      salary: "$675,000",
    },
    {
      key: "6",
      name: "Fiona Green",
      position: "Chief Operating Officer (COO)",
      office: "San Francisco",
      age: 48,
      startDate: "2010/03/11",
      salary: "$850,000",
    },
    {
      key: "7",
      name: "Donna Snider",
      position: "Customer Support",
      office: "New York",
      age: 27,
      startDate: "2011/01/25",
      salary: "$112,000",
    },
    {
      key: "8",
      name: "Serge Baldwin",
      position: "Data Coordinator",
      office: "Singapore",
      age: 64,
      startDate: "2012/04/09",
      salary: "$138,575",
    },
    {
      key: "9",
      name: "Gavin Joyce",
      position: "Developer",
      office: "Edinburgh",
      age: 42,
      startDate: "2010/12/22",
      salary: "$92,575",
    },
    {
      key: "10",
      name: "Jonas Alexander",
      position: "Developer",
      office: "San Francisco",
      age: 30,
      startDate: "2010/07/14",
      salary: "$86,500",
    },
  ];

  const initialCombos = [
    {
      key: "1",
      name: "Combo 1",
      description: "Description of Combo 1",
      price: "$150",
      servicesIncluded: "Service A, Service B",
    },
    {
      key: "2",
      name: "Combo 2",
      description: "Description of Combo 2",
      price: "$250",
      servicesIncluded: "Service B, Service C",
    },
  ];

  const initialTasks = [
    {
      key: "1",
      title: "Task 1",
      description: "Description of Task 1",
      status: "Pending",
      assignedTo: "Airi Satou",
    },
    {
      key: "2",
      title: "Task 2",
      description: "Description of Task 2",
      status: "Completed",
      assignedTo: "Garrett Winters",
    },
  ];

  const initialPayments = [
    {
      key: "1",
      payer: "John Doe",
      amount: "$1000",
      date: "2023/01/01",
      status: "Completed",
    },
    {
      key: "2",
      payer: "Jane Smith",
      amount: "$500",
      date: "2023/02/15",
      status: "Pending",
    },
  ];

  const initialCheckaccepts = [
    {
      key: "1",
      title: "Checkaccept 1",
      description: "Description of Checkaccept 1",
      status: "Waiting",
      checkedBy: "",
    },
    {
      key: "2",
      title: "Checkaccept 2",
      description: "Description of Checkaccept 2",
      status: "Waiting",
      checkedBy: "",
    },
  ];

  const [employees, setEmployees] = useState(initialEmployees);
  const [services, setServices] = useState([]);
  const [combos, setCombos] = useState(initialCombos);
  const [tasks, setTasks] = useState(initialTasks);
  const [payments, setPayments] = useState(initialPayments);
  const [checkaccepts, setCheckaccepts] = useState(initialCheckaccepts);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [searchText, setSearchText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [activeTab, setActiveTab] = useState("staff");

  const [form] = Form.useForm();

  useEffect(() => {
    fetch("https://localhost:7150/api/Service")
      .then((response) => response.json())
      .then((data) => {
        console.log("API response:", data);
        const formattedData = data.data.data.map((service, index) => ({
          key: index + 1,
          serviceId: service.serviceId,
          serviceName: service.serviceName,
          serviceDescription: service.serviceDescription,
          duration: service.duration,
          price: service.price.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          }),
        }));
        setServices(formattedData);
      });
  }, []);

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
    setSearchText("");
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleAdd = () => {
    setEditingRecord(null);
    setIsModalVisible(true);
  };

  const handleEdit = (record) => {
    setEditingRecord(record);
    setIsModalVisible(true);
    form.setFieldsValue(record);
  };
  const navigate = useNavigate();

  const handleDelete = async (key) => {
    const userInfoString = localStorage.getItem("user-info");
    if (!userInfoString) {
      navigate("/login");
      return;
    }

    const userInfo = JSON.parse(userInfoString);
    const token = userInfo.data.token;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      if (activeTab === "staff") {
        setEmployees(employees.filter((employee) => employee.key !== key));
      } else if (activeTab === "service") {
        // Find the service by key
        const service = services.find((service) => service.key === key);
        console.log(service);
        if (service) {
          // Remove the service from the state
          setServices(services.filter((service) => service.key !== key));
          // Call the delete API using the service id
          const result = await axios.delete(
            `https://localhost:7150/api/Service/${service.serviceId}`,
            { headers }
          );
          if (result.status === 200) {
            message.success("Update status successful");
          }
        } else {
          message.error("Service not found");
        }
      } else if (activeTab === "combo") {
        setCombos(combos.filter((combo) => combo.key !== key));
      } else if (activeTab === "payment") {
        setPayments(payments.filter((payment) => payment.key !== key));
      }
    } catch (error) {
      console.error("Error deleting service:", error);
      message.error("Failed to delete service");
    }
  };

  const handleModalOk = () => {
    form
      .validateFields()
      .then((values) => {
        if (editingRecord) {
          if (activeTab === "staff") {
            setEmployees(
              employees.map((emp) =>
                emp.key === editingRecord.key
                  ? { ...values, key: emp.key }
                  : emp
              )
            );
          } else if (activeTab === "service") {
            setServices(
              services.map((service) =>
                service.key === editingRecord.key
                  ? { ...values, key: service.key }
                  : service
              )
            );
          } else if (activeTab === "combo") {
            setCombos(
              combos.map((combo) =>
                combo.key === editingRecord.key
                  ? { ...values, key: combo.key }
                  : combo
              )
            );
          }
        } else {
          const newRecord = {
            ...values,
            key: (activeTab === "staff"
              ? employees.length + 1
              : activeTab === "service"
              ? services.length + 1
              : activeTab === "combo"
              ? combos.length + 1
              : activeTab === "task"
              ? tasks.length + 1
              : payments.length + 1
            ).toString(),
          };
          if (activeTab === "staff") {
            setEmployees([...employees, newRecord]);
          } else if (activeTab === "service") {
            setServices([...services, newRecord]);
          } else if (activeTab === "combo") {
            setCombos([...combos, newRecord]);
          } else if (activeTab === "task") {
            setTasks([...tasks, newRecord]);
          }
        }
        setIsModalVisible(false);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleAccept = (key) => {
    setCheckaccepts(
      checkaccepts.map((checkaccept) =>
        checkaccept.key === key
          ? { ...checkaccept, status: "Approved", checkedBy: "Current User" }
          : checkaccept
      )
    );
  };

  const handleDeny = (key) => {
    setCheckaccepts(
      checkaccepts.map((checkaccept) =>
        checkaccept.key === key
          ? { ...checkaccept, status: "Rejected", checkedBy: "Current User" }
          : checkaccept
      )
    );
  };

  const staffColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
      sorter: (a, b) => a.position.length - b.position.length,
      sortOrder: sortedInfo.columnKey === "position" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Office",
      dataIndex: "office",
      key: "office",
      filters: [
        { text: "Tokyo", value: "Tokyo" },
        { text: "New York", value: "New York" },
        { text: "London", value: "London" },
        { text: "San Francisco", value: "San Francisco" },
      ],
      filteredValue: filteredInfo.office || null,
      onFilter: (value, record) => record.office.includes(value),
      sorter: (a, b) => a.office.length - b.office.length,
      sortOrder: sortedInfo.columnKey === "office" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === "age" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      sorter: (a, b) => new Date(a.startDate) - new Date(b.startDate),
      sortOrder: sortedInfo.columnKey === "startDate" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
      sorter: (a, b) =>
        parseFloat(a.salary.replace(/[\$,]/g, "")) -
        parseFloat(b.salary.replace(/[\$,]/g, "")),
      sortOrder: sortedInfo.columnKey === "salary" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => handleEdit(record)}>Edit</Button>
          <Button onClick={() => handleDelete(record.key)}>Delete</Button>
        </Space>
      ),
    },
  ];

  const serviceColumns = [
    {
      title: "No.",
      dataIndex: "key",
      key: "key",
      width: "5%",
      align: "center",
      sorter: (a, b) => a.key - b.key,
      sortOrder: sortedInfo.columnKey === "key" ? sortedInfo.order : null,
    },
    {
      title: "Service Name",
      dataIndex: "serviceName",
      key: "serviceName",
      width: "20%",
      align: "center",
      sorter: (a, b) => a.serviceName.length - b.serviceName.length,
      sortOrder:
        sortedInfo.columnKey === "serviceName" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Description",
      dataIndex: "serviceDescription",
      key: "serviceDescription",
      width: "30%",
      align: "center",
      sorter: (a, b) =>
        a.serviceDescription.length - b.serviceDescription.length,
      sortOrder:
        sortedInfo.columnKey === "serviceDescription" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      width: "15%",
      align: "center",
      sorter: (a, b) => a.duration.length - b.duration.length,
      sortOrder: sortedInfo.columnKey === "duration" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Price (VND)",
      dataIndex: "price",
      key: "price",
      width: "15%",
      align: "center",
      sorter: (a, b) =>
        parseFloat(a.price.replace(/[\₫,]/g, "")) -
        parseFloat(b.price.replace(/[\₫,]/g, "")),
      sortOrder: sortedInfo.columnKey === "price" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Action",
      key: "action",
      width: "15%",
      align: "center",
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => handleEdit(record)}>Edit</Button>
          <Button onClick={() => handleDelete(record.key)}>Delete</Button>
        </Space>
      ),
    },
  ];

  const comboColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      sorter: (a, b) => a.description.length - b.description.length,
      sortOrder:
        sortedInfo.columnKey === "description" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) =>
        parseFloat(a.price.replace(/[\$,]/g, "")) -
        parseFloat(b.price.replace(/[\$,]/g, "")),
      sortOrder: sortedInfo.columnKey === "price" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Services Included",
      dataIndex: "servicesIncluded",
      key: "servicesIncluded",
      sorter: (a, b) => a.servicesIncluded.length - b.servicesIncluded.length,
      sortOrder:
        sortedInfo.columnKey === "servicesIncluded" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => handleEdit(record)}>Edit</Button>
          <Button onClick={() => handleDelete(record.key)}>Delete</Button>
        </Space>
      ),
    },
  ];

  const taskColumns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.length - b.title.length,
      sortOrder: sortedInfo.columnKey === "title" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      sorter: (a, b) => a.description.length - b.description.length,
      sortOrder:
        sortedInfo.columnKey === "description" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "Pending", value: "Pending" },
        { text: "Completed", value: "Completed" },
      ],
      filteredValue: filteredInfo.status || null,
      onFilter: (value, record) => record.status.includes(value),
      sorter: (a, b) => a.status.length - b.status.length,
      sortOrder: sortedInfo.columnKey === "status" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Assigned To",
      dataIndex: "assignedTo",
      key: "assignedTo",
      sorter: (a, b) => a.assignedTo.length - b.assignedTo.length,
      sortOrder:
        sortedInfo.columnKey === "assignedTo" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  const paymentColumns = [
    {
      title: "Payer",
      dataIndex: "payer",
      key: "payer",
      sorter: (a, b) => a.payer.length - b.payer.length,
      sortOrder: sortedInfo.columnKey === "payer" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      sorter: (a, b) =>
        parseFloat(a.amount.replace(/[\$,]/g, "")) -
        parseFloat(b.amount.replace(/[\$,]/g, "")),
      sortOrder: sortedInfo.columnKey === "amount" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
      sortOrder: sortedInfo.columnKey === "date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "Pending", value: "Pending" },
        { text: "Completed", value: "Completed" },
      ],
      filteredValue: filteredInfo.status || null,
      onFilter: (value, record) => record.status.includes(value),
      sorter: (a, b) => a.status.length - b.status.length,
      sortOrder: sortedInfo.columnKey === "status" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  const checkacceptColumns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.length - b.title.length,
      sortOrder: sortedInfo.columnKey === "title" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      sorter: (a, b) => a.description.length - b.description.length,
      sortOrder:
        sortedInfo.columnKey === "description" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "Waiting", value: "Waiting" },
        { text: "Approved", value: "Approved" },
        { text: "Rejected", value: "Rejected" },
      ],
      filteredValue: filteredInfo.status || null,
      onFilter: (value, record) => record.status.includes(value),
      sorter: (a, b) => a.status.length - b.status.length,
      sortOrder: sortedInfo.columnKey === "status" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Checked By",
      dataIndex: "checkedBy",
      key: "checkedBy",
      sorter: (a, b) => a.checkedBy.length - b.checkedBy.length,
      sortOrder: sortedInfo.columnKey === "checkedBy" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            onClick={() => handleAccept(record.key)}
            disabled={record.status !== "Waiting"}
          >
            Accept
          </Button>
          <Button
            onClick={() => handleDeny(record.key)}
            disabled={record.status !== "Waiting"}
          >
            Deny
          </Button>
        </Space>
      ),
    },
  ];

  const filteredData =
    activeTab === "staff"
      ? employees.filter((employee) =>
          employee.name.toLowerCase().includes(searchText.toLowerCase())
        )
      : activeTab === "service"
      ? services.filter((service) =>
          service.serviceName.toLowerCase().includes(searchText.toLowerCase())
        )
      : activeTab === "combo"
      ? combos.filter((combo) =>
          combo.name.toLowerCase().includes(searchText.toLowerCase())
        )
      : activeTab === "task"
      ? tasks.filter((task) =>
          task.title.toLowerCase().includes(searchText.toLowerCase())
        )
      : activeTab === "payment"
      ? payments.filter((payment) =>
          payment.payer.toLowerCase().includes(searchText.toLowerCase())
        )
      : checkaccepts.filter((checkaccept) =>
          checkaccept.title.toLowerCase().includes(searchText.toLowerCase())
        );

  return (
    <div className="manager-page">
      <div className="sidebar-manager">
        <h3>MENU</h3>
        <ul>
          <li
            className={`menu-item ${activeTab === "staff" ? "active" : ""}`}
            onClick={() => setActiveTab("staff")}
          >
            Staff Manager
          </li>
          <li
            className={`menu-item ${activeTab === "service" ? "active" : ""}`}
            onClick={() => setActiveTab("service")}
          >
            Service Manager
          </li>
          <li
            className={`menu-item ${activeTab === "combo" ? "active" : ""}`}
            onClick={() => setActiveTab("combo")}
          >
            Combo Manager
          </li>
          <li
            className={`menu-item ${activeTab === "task" ? "active" : ""}`}
            onClick={() => setActiveTab("task")}
          >
            Task Manager
          </li>
          <li
            className={`menu-item ${activeTab === "payment" ? "active" : ""}`}
            onClick={() => setActiveTab("payment")}
          >
            Payment Manager
          </li>
          <li
            className={`menu-item ${
              activeTab === "checkaccept" ? "active" : ""
            }`}
            onClick={() => setActiveTab("checkaccept")}
          >
            Checkaccept Manager
          </li>
        </ul>
      </div>
      <div className="content">
        <Space
          style={{
            marginBottom: 16,
          }}
        >
          <Button onClick={clearAll}>Clear filters and sorters</Button>
          <Input
            placeholder="Search by name"
            value={searchText}
            onChange={handleSearch}
          />
          {activeTab !== "payment" &&
            activeTab !== "checkaccept" &&
            activeTab !== "task" && (
              <Button type="primary" onClick={handleAdd}>
                Add{" "}
                {activeTab === "staff"
                  ? "Employee"
                  : activeTab === "service"
                  ? "Service"
                  : activeTab === "combo"
                  ? "Combo"
                  : "Task"}
              </Button>
            )}
        </Space>
        <Table
          columns={
            activeTab === "staff"
              ? staffColumns
              : activeTab === "service"
              ? serviceColumns
              : activeTab === "combo"
              ? comboColumns
              : activeTab === "task"
              ? taskColumns
              : activeTab === "payment"
              ? paymentColumns
              : checkacceptColumns
          }
          dataSource={filteredData}
          onChange={handleChange}
        />
      </div>
      <Modal
        title={
          editingRecord
            ? `Edit ${
                activeTab === "staff"
                  ? "Employee"
                  : activeTab === "service"
                  ? "Service"
                  : activeTab === "combo"
                  ? "Combo"
                  : activeTab === "task"
                  ? "Task"
                  : "Payment"
              }`
            : `Add ${
                activeTab === "staff"
                  ? "Employee"
                  : activeTab === "service"
                  ? "Service"
                  : activeTab === "combo"
                  ? "Combo"
                  : activeTab === "task"
                  ? "Task"
                  : "Payment"
              }`
        }
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Form form={form} layout="vertical" name="serviceForm">
          <Form.Item
            name="serviceName"
            label="Service Name"
            rules={[
              { required: true, message: "Please input the service name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="serviceDescription"
            label="Description"
            rules={[
              { required: true, message: "Please input the description!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="duration"
            label="Duration"
            rules={[{ required: true, message: "Please input the duration!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price (VND)"
            rules={[{ required: true, message: "Please input the price!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManagerPage;
