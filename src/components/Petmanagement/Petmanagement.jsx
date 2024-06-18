import {
  Button,
  Form,
  Image,
  Input,
  Modal,
  Select,
  Upload,
  message,
} from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import { DatePicker, Space } from "antd";
import { useNavigate } from "react-router-dom";

import ServiceCard from "../ServiceCard";
import moment from "moment";
import uploadFile from "@/utils/upload";

function Petmanagement() {
  const navigate = useNavigate();
  const regex30KyTu = /^.{1,30}$/; // Ensures the name is between 1 and 30 characters
  //const regexChieuCao = /^\d+(\.\d+)?$/;
  const [form] = useForm();
  const [dataSource, setDataSource] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [birthday, setBirthday] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [petId, setPetId] = useState(null);

  // const [status, setStatus] = useState({
  //   petName: "",
  //   petCategory: "",
  //   petWeight: "",
  //   petHeight: "",
  //   petBirthday: null,
  //   image: "",
  // });

  // const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const handleDeleteMovie = async (id) => {
    const userInfoString = localStorage.getItem("user-info");
    const userInfo = JSON.parse(userInfoString);

    if (userInfo != null) {
      try {
        console.log(id);
        const response = await axios.delete(
          `https://localhost:7150/api/Pet/${id}`,
          {
            headers: {
              Authorization: `Bearer ${userInfo.data.token}`,
            },
          }
        );

        if (response.status === 401) {
          // toast.error("Token hết hạn. Vui lòng đăng nhập lại.");
          localStorage.removeItem("user-info");
          navigate("/login");
          return;
        }

        console.log("Delete response:", response);

        if (response.status === 200) {
          const listAfterDelete = dataSource.filter((pet) => pet.petId !== id);
          setDataSource(listAfterDelete);
        } else {
          console.error(
            "Failed to delete pet:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error deleting pet:", error);
      }
    } else {
      navigate("/login");
    }
  };

  const handleUpdate = async (id) => {
    setIsUpdate(true);
    setPetId(id);
    const pet = dataSource.find((x) => x.petId === id);
    form.setFieldsValue({
      name: pet.petName,
      height: pet.petHeight,
      weight: pet.petWeight,
      category: pet.petType,
      poster_path: pet.image,
    });
    setBirthday(pet.petBirthday ? moment(pet.petBirthday, "YYYY-MM-DD") : null);
    setFileList(pet.image ? [{ url: pet.image }] : []);
    setIsOpen(true);
  };

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  async function fetchMovies() {
    const userInfoString = localStorage.getItem("user-info");
    const userInfo = JSON.parse(userInfoString);

    if (userInfo != null) {
      console.log(userInfo.data.token);
      if (userInfo.data.user.id != null) {
        console.log(userInfo.data.user.id);
        try {
          const response = await axios.get(
            `https://localhost:7150/api/Customer/${userInfo.data.user.id}`,
            {
              headers: {
                Authorization: `Bearer ${userInfo.data.token}`,
              },
            }
          );

          if (response.status === 401) {
            // toast.error("Token hết hạn. Vui lòng đăng nhập lại.");
            localStorage.removeItem("user-info");
            navigate("/login");
            return;
          }

          const result = response.data;
          localStorage.setItem("pets", JSON.stringify(result));

          setDataSource(result.data.pets.filter((x) => x.status !== false));
        } catch (error) {
          if (error.response && error.response.status === 401) {
            localStorage.removeItem("user-info");
            message.error("Please,Login in again");
            navigate("/login");
          } else {
            message.error("Có lỗi xảy ra. Vui lòng thử lại.");
          }
        }
      } else {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }
  function handleShowModal() {
    setIsOpen(true);
  }

  function handleHideModal() {
    setIsOpen(false);
  }

  function handleOk() {
    form.submit();
  }

  const handleSubmit = async (values) => {
    if (values.poster_path && values.poster_path.file) {
      const url = await uploadFile(values.poster_path.file.originFileObj);
      if (url) {
        values.poster_path = url;
      }
    }

    if (!regex30KyTu.test(values.name.trim())) {
      setError("Name is required");
      return;
    }
    // if (!regexChieuCao.test(values.height.trim())) {
    //   setError("Height must number");
    //   return;
    // }
    // if (!regexChieuCao.test(values.weight.trim())) {
    //   setError("Weight must number");

    //   return;
    // }

    const userInfoString = localStorage.getItem("user-info");
    const userInfo = JSON.parse(userInfoString);
    const token = userInfo?.data?.token;
    console.log(token);
    if (userInfo?.data?.user?.id && token) {
      const apiUrl = isUpdate
        ? `https://localhost:7150/api/Pet/${petId}`
        : `https://localhost:7150/api/Pet`;
      const petData = {
        cusId: userInfo.data.user.id,
        petType: values.category,
        petName: values.name,
        image: values.poster_path != null ? values.poster_path : "",
        petBirthday: birthday ? birthday.format("YYYY-MM-DD") : null,
        status: "true",
        petWeight: values.weight || "",
        petHeight: values.height || "",
      };
      console.log(petData);
      try {
        const response = await axios({
          method: isUpdate ? "PUT" : "POST",
          url: apiUrl,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Adding the token here
          },
          data: petData,
        });

        if (response.status === 200 || response.status === 201) {
          message.success(`Pet ${isUpdate ? "updated" : "added"} successfully`);
          setError("");
          if (isUpdate) {
            setDataSource((prevDataSource) =>
              prevDataSource.map((pet) =>
                pet.petId === petId ? { ...pet, ...petData } : pet
              )
            );
          } else {
            setDataSource((prevDataSource) => [...prevDataSource, petData]);
          }
        } else {
          setError(
            response.data.message ||
              `Error ${isUpdate ? "updating" : "adding"} pet`
          );
        }
      } catch (error) {
        console.error("API error:", error);
        setError("API error");
      }
    } else {
      setError("You must be logged in");
      navigate("/login");
    }

    handleHideModal();
    form.resetFields();
    setIsUpdate(false);
    setPetId(null);
  };

  useEffect(function () {
    fetchMovies();
  }, []);

  return (
    <div>
      <Button type="primary" onClick={handleShowModal}>
        Add new pet
      </Button>
      {/* <Table columns={columns} dataSource={dataSource} /> */}
      <section className="mt-10 p-3 montserrat-regular lg:max-w-[1050px] mx-auto">
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
          {Array.isArray(dataSource) &&
            dataSource.map((service) => (
              <ServiceCard
                key={service.serviceId}
                petId={service.petId}
                petName={service.petName}
                petHeight={service.petHeight}
                petWeight={service.petWeight}
                image={service.image}
                petBirthday={service.petBirthday}
                petType={service.petType}
                onUpdateClick={() => handleUpdate(service.petId)}
                onDeleteClick={() => handleDeleteMovie(service.petId)}
              />
            ))}
        </div>
      </section>

      <Modal
        title={isUpdate ? "Update Pet" : "Add New Pet"}
        open={isOpen}
        onCancel={handleHideModal}
        onOk={handleOk}
      >
        <Form
          labelCol={{
            span: 24,
          }}
          form={form}
          onFinish={handleSubmit}
        >
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Height" name="height">
            <Input />
          </Form.Item>
          <Form.Item label="Weight" name="weight">
            <Input />
          </Form.Item>
          <Form.Item label="Category" name="category">
            <Select
              options={[
                { value: "Cat", label: <span>Cat</span> },
                { value: "Dog", label: <span>Dog</span> },
                { value: "Other", label: <span>Other</span> },
              ]}
            />
          </Form.Item>

          <Form.Item label="Birthday">
            <Space direction="vertical">
              <DatePicker
                showTime
                value={birthday}
                onChange={(date) => setBirthday(date)}
              />
            </Space>
          </Form.Item>

          <Form.Item label="Poster" name="poster_path">
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              // onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
          </Form.Item>
          <p style={{ color: "red" }}>{error}</p>
        </Form>
      </Modal>

      {previewImage && (
        <Image
          wrapperStyle={{
            display: "none",
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
}

export default Petmanagement;
