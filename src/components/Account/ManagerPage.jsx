import React, { useState, useEffect } from "react";
import {
  Button,
  Space,
  Table,
  Input,
  Modal,
  Form,
  message,
  Select,
  Checkbox,
} from "antd";
import "../../assets/css/managerPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ManagerPage = () => {
  const initialCombos = [];
  const initialTasks = [];
  const initialPayments = [];
  const initialCheckaccepts = [];

  const [services, setServices] = useState([]);
  const [servicess, setServicess] = useState([]);
  const [combos, setCombos] = useState(initialCombos);
  const [tasks, setTasks] = useState(initialTasks);
  const [payments, setPayments] = useState(initialPayments);
  const [checkaccepts, setCheckaccepts] = useState(initialCheckaccepts);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [searchText, setSearchText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [activeTab, setActiveTab] = useState(null); // Chuyển giá trị mặc định thành null

  const [form] = Form.useForm();

  useEffect(() => {
    fetch("https://localhost:7150/api/Service")
      .then((response) => response.json())
      .then((data) => {
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
          status: service.status,
        }));
        setServices(formattedData);
        services.forEach((element) => {
          console.log(element);
        });
      });
  }, []);

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
          status: service.status,
        }));
        const serviceOptions = formattedData.map((service) => ({
          label: service.serviceName,
          value: service.serviceId,
        }));
        setServicess(serviceOptions);
      });
  }, []);

  const onFinish = (values) => {
    console.log("Form values:", values);
  };
  
  const [staffList, setStaffList] = useState();
  useEffect(() => {
    fetch("https://localhost:7150/api/Booking/bookings/not-accepted")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.data.map((booking, index) => ({
          key: index + 1,
          bookingId: booking.bookingId,
          customerName: booking.customerName,
          serviceName: booking.serviceName,
          petName: booking.petName,
          startDate: booking.startDate,
          endDate: booking.endDate,
          staffName: booking.staffName === "Unknown" ? null : booking.staffName,
          staffId: booking.staffId,
          checkAccept: booking.checkAccept,
        }));
        setCheckaccepts(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching checkaccept data:", error);
        message.error("Failed to fetch checkaccept data");
      });
  }, []);

  const fetchStaffBookingsSummary = async (date) => {
    try {
      const response = await axios.get(
        `https://localhost:7150/api/Staff/bookings-summary?date=${date}`
      );
      if (response.status === 200) {
        const summaryData = response.data.data;
        const staffBookingsMap = summaryData.reduce((map, staff) => {
          map[staff.staffId] = staff.totalBooking;
          return map;
        }, {});

        const formattedStaffList = staffList.map((staff) => ({
          staffId: staff.staffId,
          fullName: `${staff.fullName} (${
            staffBookingsMap[staff.staffId] || 0
          } bookings)`,
        }));

        setStaffList(formattedStaffList);
      }
    } catch (error) {
      console.error("Error fetching staff bookings summary:", error);
      message.error("Failed to fetch staff bookings summary");
    }
  };

  const handleStaffSelect = async (value, record) => {
    const selectedStaff = staffList.find((staff) => staff.staffId === value);
    if (selectedStaff) {
      const updatedCheckaccepts = checkaccepts.map((checkaccept) =>
        checkaccept.key === record.key
          ? {
              ...checkaccept,
              staffId: selectedStaff.staffId,
              staffName: selectedStaff.fullName.split(" (")[0],
            }
          : checkaccept
      );
      setCheckaccepts(updatedCheckaccepts);
      message.success("Staff assigned successfully");
    }
  };

  useEffect(() => {
    fetch("https://localhost:7150/api/Staff")
      .then((response) => response.json())
      .then((data) => {
        const formattedStaffList = data.data.map((staff) => ({
          staffId: staff.staffId,
          fullName: staff.fullName,
        }));

        setStaffList(formattedStaffList);
      })
      .catch((error) => {
        console.error("Error fetching staff data:", error);
        message.error("Failed to fetch staff data");
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
      if (activeTab === "service") {
        // Find the service by key
        const service = services.find((service) => service.key === key);

        if (service) {
          const newStatus = !service.status;
          service.status = newStatus;
          setServices([...services]);

          const result = await axios.delete(
            `https://localhost:7150/api/Service/${service.serviceId}`,
            { headers }
          );
          console.log(result.data);
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
      .then(async (values) => {
        if (editingRecord) {
          if (activeTab === "service") {
            if (!editingRecord.status) {
              message.error("Cannot edit a service that is not active.");
              return;
            }
            try {
              const serviceId = editingRecord.serviceId;
              const updateData = {
                serviceName: values.serviceName,
                status: editingRecord.status,
                serviceDescription: values.serviceDescription,
                serviceImage: values.serviceImage || "",
                duration: values.duration,
                price: parseFloat(values.price),
                comboId: values.comboId || null,
              };

              const result = await axios.put(
                `https://localhost:7150/api/Service/${serviceId}`,
                updateData
              );

              if (result.status === 200) {
                setServices(
                  services.map((service) =>
                    service.key === editingRecord.key
                      ? {
                          ...updateData,
                          key: service.key,
                          serviceId: serviceId,
                        }
                      : service
                  )
                );
                message.success("Service updated successfully");
              } else {
                message.error("Failed to update service");
              }
            } catch (error) {
              console.error("Error updating service:", error);
              message.error("Failed to update service");
            }
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
            key: (activeTab === "service"
              ? services.length + 1
              : activeTab === "combo"
              ? combos.length + 1
              : activeTab === "task"
              ? tasks.length + 1
              : payments.length + 1
            ).toString(),
          };
          if (activeTab === "service") {
            setServices([...services, newRecord]);
          } else if (activeTab === "combo") {
              try {
                // Tạo combo trước
                const comboResponse = await axios.post(
                  'https://localhost:7150/api/Combo',
                  {
                    comboType: "values.comboType",
                    price: parseFloat(values.price),
                    status: true,
                    duration: values.duration,
                  }
                );
    
                const comboId = comboResponse.data.data.comboId; 
                console.log(comboId);// Giả sử comboId được trả về trong response
                console.log(values.servicess);
                // Thêm các dịch vụ vào combo
                for (const serviceId of values.servicess) {
                  await axios.post(
                    `https://localhost:7150/api/Combo/${comboId}/add-services`,
                    [serviceId]
                  );
                }
    
                // Thêm combo mới vào danh sách combo
                setCombos([...combos, { ...newRecord, comboId }]);
    
                message.success("Combo created and services added successfully");
              } catch (error) {
                console.error("Error creating combo:", error);
                message.error("Failed to create combo and add services");
              }
            } else if (activeTab === "task") {
              setTasks([...tasks, newRecord]);
            } else if (activeTab === "payment") {
              setPayments([...payments, newRecord]);
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

  const handleAccept = async (key) => {
    const booking = checkaccepts.find((checkaccept) => checkaccept.key === key);
    if (
      !booking ||
      booking.staffId === "00000000-0000-0000-0000-000000000000"
    ) {
      message.error(
        "Please select a staff member before accepting the booking."
      );
      return;
    }

    try {
      console.log(booking.bookingId + booking.staffId);
      const response = await axios.put(
        "https://localhost:7150/api/Booking/accept-booking",
        {
          bookingId: booking.bookingId,
          staffId: booking.staffId,
        }
      );

      if (response.status === 200) {
        setCheckaccepts(
          checkaccepts.map((checkaccept) =>
            checkaccept.key === key
              ? {
                  ...checkaccept,
                  status: "Approved",
                  checkedBy: "Current User",
                  checkAccept: true,
                }
              : checkaccept
          )
        );
        message.success("Booking accepted successfully");
      } else {
        message.error("Failed to accept booking");
      }
    } catch (error) {
      console.error("Error accepting booking:", error);
      message.error("Failed to accept booking");
    }
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
          <Button onClick={() => handleDelete(record.key)}>
            {record.status === false ? "Word" : "Delete"}
          </Button>
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
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
      sorter: (a, b) => a.customerName.length - b.customerName.length,
      sortOrder:
        sortedInfo.columnKey === "customerName" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Service Name",
      dataIndex: "serviceName",
      key: "serviceName",
      sorter: (a, b) => a.serviceName.length - b.serviceName.length,
      sortOrder:
        sortedInfo.columnKey === "serviceName" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Pet Name",
      dataIndex: "petName",
      key: "petName",
      sorter: (a, b) => a.petName.length - b.petName.length,
      sortOrder: sortedInfo.columnKey === "petName" ? sortedInfo.order : null,
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
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
      sorter: (a, b) => new Date(a.endDate) - new Date(b.endDate),
      sortOrder: sortedInfo.columnKey === "endDate" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Staff Name",
      dataIndex: "staffName",
      key: "staffName",
      sorter: (a, b) => a.staffName?.length - b.staffName?.length,
      sortOrder: sortedInfo.columnKey === "staffName" ? sortedInfo.order : null,
      ellipsis: true,
      render: (text, record) =>
        record.staffName === null ? (
          <Select
            placeholder="Select Staff"
            onFocus={() =>
              fetchStaffBookingsSummary(record.startDate.split(" ")[0])
            }
            onChange={(value) => handleStaffSelect(value, record)}
            style={{ width: "100%" }}
          >
            {staffList.map((staff) => (
              <Select.Option key={staff.staffId} value={staff.staffId}>
                {staff.fullName}
              </Select.Option>
            ))}
          </Select>
        ) : (
          text
        ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            onClick={() => handleAccept(record.key)}
            disabled={record.checkAccept}
          >
            Accept
          </Button>
          <Button
            onClick={() => handleDeny(record.key)}
            disabled={record.checkAccept}
          >
            Deny
          </Button>
        </Space>
      ),
    },
  ];

  const filteredData =
    activeTab === "service"
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
          checkaccept.customerName
            ?.toLowerCase()
            .includes(searchText.toLowerCase())
        );

  return (
    <div className="manager-page">
      <div className="sidebar-manager">
        <h3>MENU</h3>
        <ul>
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
                {activeTab === "service"
                  ? "Service"
                  : activeTab === "combo"
                  ? "Combo"
                  : "Task"}
              </Button>
            )}
        </Space>
        <Table
          columns={
            activeTab === "service"
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
                activeTab === "service"
                  ? "Service"
                  : activeTab === "combo"
                  ? "Combo"
                  : activeTab === "task"
                  ? "Task"
                  : "Payment"
              }`
            : `Add ${
                activeTab === "service"
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
        <Form form={form} layout="vertical" name="recordForm" onFinish={onFinish}>
      {activeTab === "service" ? (
        <>
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
            rules={[
              { required: true, message: "Please input the duration!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price (VND)"
            rules={[
              { required: true, message: "Please input the price!" },
            ]}
          >
            <Input />
          </Form.Item>
        </>
      ) : activeTab === "combo" ? (
        <>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              { required: true, message: "Please input the name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="duration"
            label="Duration"
            rules={[
              { required: true, message: "Please input the duration!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[
              { required: true, message: "Please input the price!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="servicess"
            label="Services Included"
            rules={[
              {
                required: true,
                message: "Please select the services included!",
              },
            ]}
          >
            <Checkbox.Group options={servicess} />
          </Form.Item>
        </>
      ) : activeTab === "task" ? (
        <>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              { required: true, message: "Please input the description!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[
              { required: true, message: "Please input the status!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="assignedTo"
            label="Assigned To"
            rules={[
              {
                required: true,
                message: "Please input the assigned person!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </>
      ) : null}

    </Form>
      </Modal>
      {/* <Modal
        title="Select Staff"
        visible={isModalVisible}
        onOk={handleAssignStaff}
        onCancel={handleModalCancel}
        okText="Assign"
      >
        <Select
          style={{ width: "100%" }}
          placeholder="Select a staff member"
          onChange={handleStaffSelect}
        >
          {staffList.map((staff) => (
            <Select.Option key={staff.staffId} value={staff.staffId}>
              {staff.fullName}
            </Select.Option>
          ))}
        </Select>
      </Modal> */}
    </div>
  );
};

export default ManagerPage;
