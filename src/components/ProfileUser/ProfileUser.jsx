import { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  message,
  Typography,
  Select,
  Row,
  Col,
} from "antd";
import axios from "axios";

const { Title } = Typography;

const ProfileUser = () => {
  const [form] = Form.useForm();
  const [passwordForm] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfoString = localStorage.getItem("user-info");
      if (!userInfoString) {
        message.error("No user information found");
        return;
      }
      const userInfo = JSON.parse(userInfoString);
      const token = userInfo?.data.token;

      if (!token) {
        message.error("You must be logged in");
        window.location.href = "/login"; // Redirect to login page
        return;
      }
      console.log();

      try {
        const response = await axios.get(
          `https://localhost:7150/api/Customer/${userInfo.data.user.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          const userData = response.data;
          console.log(response.data);
          form.setFieldsValue({
            fullName: userData.data.fullName,
            email: userData.data.user.email,
            phoneNumber: userData.data.phoneNumber,
            gender: userData.data.gender,
          });
        } else {
          message.error("Failed to fetch user information");
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          message.error("Session expired. Please log in again.");
          localStorage.removeItem("user-info"); // Clear expired token
          window.location.href = "/login"; // Redirect to login page
        } else {
          console.error("API error:", error);
          message.error("API error");
        }
      } finally {
        setLoadingData(false);
      }
    };

    fetchUserInfo();
  }, [form]);

  const handleUpdateProfile = async (values) => {
    setLoading(true);
    try {
      const userInfoString = localStorage.getItem("user-info");
      const userInfo = JSON.parse(userInfoString);
      const token = userInfo?.data.token;

      if (!token) {
        message.error("You must be logged in");
        window.location.href = "/login"; // Redirect to login page
        return;
      }

      const apiUrl = `https://localhost:7150/api/Customer/UpdateByUser/${userInfo.data.user.id}`;
      const data = {
        ...values,
      };

      const response = await axios({
        method: "PUT",
        url: apiUrl,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: data,
      });

      if (response.status === 200) {
        message.success("Profile updated successfully");
      } else {
        message.error(response.data.message || "Error updating profile");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        message.error("Session expired. Please log in again.");
        localStorage.removeItem("user-info"); // Clear expired token
        window.location.href = "/login"; // Redirect to login page
      } else {
        console.error("API error:", error);
        message.error("API error");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (values) => {
    setLoading(true);
    try {
      const userInfoString = localStorage.getItem("user-info");
      const userInfo = JSON.parse(userInfoString);
      const token = userInfo?.data?.token;

      if (!token) {
        message.error("You must be logged in");
        window.location.href = "/login"; // Redirect to login page
        return;
      }

      const apiUrl = `https://localhost:7150/api/Auth/change-password`;
      const data = {
        email: userInfo.data.user.email,
        currentPassword: values.oldPassword,
        newPassword: values.newPassword,
      };

      const response = await axios({
        method: "POST",
        url: apiUrl,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: data,
      });

      if (response.status === 200) {
        message.success("Password changed successfully");
        passwordForm.resetFields([
          "oldPassword",
          "newPassword",
          "confirmNewPassword",
        ]);
      } else {
        message.error(response.data.message || "Error changing password");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        message.error("Session expired. Please log in again.");
        localStorage.removeItem("user-info"); // Clear expired token
        window.location.href = "/login"; // Redirect to login page
      } else {
        console.error("API error:", error);
        message.error("Current password wrong to change");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem" }}>
      <Row gutter={16}>
        <Col span={12}>
          <Title level={2}>Account Information</Title>
          {loadingData ? (
            <p>Loading...</p>
          ) : (
            <Form form={form} onFinish={handleUpdateProfile} layout="vertical">
              <Form.Item
                label="Full Name"
                name="fullName"
                rules={[
                  { required: true, message: "Please input your full name!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Gender"
                name="gender"
                rules={[
                  { required: true, message: "Please select your gender!" },
                ]}
              >
                <Select>
                  <Select.Option value="male">Male</Select.Option>
                  <Select.Option value="female">Female</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Phone Number"
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                  Update Profile
                </Button>
              </Form.Item>
            </Form>
          )}
        </Col>
        <Col span={12}>
          <Title level={3}>Change Password</Title>
          <Form
            form={passwordForm}
            onFinish={handleChangePassword}
            layout="vertical"
          >
            <Form.Item
              label="Old Password"
              name="oldPassword"
              rules={[
                { required: true, message: "Please input your old password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="New Password"
              name="newPassword"
              rules={[
                { required: true, message: "Please input your new password!" },
                { min: 6, message: "Password must be at least 6 characters" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Confirm New Password"
              name="confirmNewPassword"
              dependencies={["newPassword"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your new password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Change Password
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileUser;
