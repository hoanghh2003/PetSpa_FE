import {
  Button,
  Form,
  Image,
  Input,
  Modal,
  Popconfirm,
  Select,
  Table,
  Upload,
} from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import { DatePicker, Space } from "antd";

function Petmanagement() {
  const regex30KyTu = /^.{0,30}$/;
  const regexChieuCao = /^[1-9]\d*(.\d+)?$/;
  const [form] = useForm();
  const [dataSource, setDataSource] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [birthday, setBirthday] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const handleDeleteMovie = async (id) => {
    try {
      const response = await axios.delete(
        `https://localhost:7150/api/Pet/${id}`
      );
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
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "petName",
      key: "petName",
    },
    {
      title: "Height",
      dataIndex: "petHeight",
      key: "petHeight",
    },
    {
      title: "Weight",
      dataIndex: "petWeight",
      key: "petWeight",
    },
    {
      title: "Birthday",
      dataIndex: "petBirthday",
      key: "petBirthday",
    },
    {
      title: "Type",
      dataIndex: "petType",
      key: "petType",
    },
    {
      title: "Poster",
      dataIndex: "image",
      key: "image",
      render: (image) => <Image src={image} width={150} />,
    },
    {
      title: "Action",
      dataIndex: "petId",
      key: "petId",
      render: (petId) => (
        <Popconfirm
          title="Delete the pet"
          description="Are you sure to delete this pet?"
          onConfirm={() => handleDeleteMovie(petId)}
          okText="Yes"
          cancelText="No"
        >
          <Button danger>Delete</Button>
        </Popconfirm>
      ),
    },
  ];
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  // const getBase64 = (file) =>
  //   new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = (error) => reject(error);
  //   });
  // const handlePreview = async (file) => {
  //   if (!file.url && !file.preview) {
  //     file.preview = await getBase64(file.originFileObj);
  //   }
  //   setPreviewImage(file.url || file.preview);
  //   setPreviewOpen(true);
  // };
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

    console.log(userInfo.data.token);
    if (userInfo.data.user.id != null) {
      const response = await axios.get(
        "https://localhost:7150/api/Customer/d61ded57-d9f4-4bc9-8657-e7dc26345564",
        {
          headers: {
            Authorization: `Bearer ${userInfo.data.token}`,
          },
        }
      );
      const result = response.data;
      localStorage.setItem("pets", JSON.stringify(result));
      console.log(result.pets);
      // console.log(response.data);
      setDataSource(result.pets);
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

  async function handleSubmit(values) {
    if (!regex30KyTu.test(values.name.trim())) {
      setError("Name is required");
      return;
    }
    if (!regexChieuCao.test(values.height.trim())) {
      setError("Height must number");
      return;
    }
    if (!regexChieuCao.test(values.weight.trim())) {
      setError("Weight must number");

      return;
    }

    const userInfoString = localStorage.getItem("user-info");
    const userInfo = JSON.parse(userInfoString);
    if (userInfo.data.user.id != null) {
      //userInfo.data.user.id
      // Gọi API đăng ký
      const apiUrl = `https://localhost:7150/api/Pet/d61ded57-d9f4-4bc9-8657-e7dc26345564`;
      const petData = {
        petType: values.category,
        petName: values.name,
        petBirthday: birthday ? birthday.format("YYYY-MM-DD") : null,
        image: values.poster_path == null ? "" : values.poster_path,
        petWeight: values.weight == null ? "" : values.weight,
        petHeight: values.height == null ? "" : values.height,
      };

      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(petData),
      })
        .then((response) => {
          // Xử lý phản hồi từ server
          if (response.ok) {
            const result = response.json();
            console.log(result);
            console.log("Thêm pet thành công!");
            setError("Add pet successfully");
          } else {
            console.error("Lỗi khi thêm pet:", response.msg);
          }
        })
        .catch((error) => {
          console.error("Lỗi khi gọi API:", error);
        });
      setDataSource([...dataSource, petData]);

      // Xử lý response từ API
    } else setError("Must Login");

    // const url = await uploadFile(values.poster_path.file.originFileObj);
    // values.poster_path = url;

    // axios.post("https://662b9b40de35f91de158d81b.mockapi.io/Movie", values);

    // hide modal
    handleHideModal();

    // clear form
    form.resetFields();
  }

  useEffect(
    function () {
      fetchMovies();
      const user = localStorage.getItem("user-info");
      localStorage.clear();
      console.log(JSON.parse(user).data.token);
      console.log(dataSource);
      // const user = localStorage.getItem("user-info");
      // if (user == null) {
      //   setIsLoading(true);
      // } else {
      //   setIsLoading(false);
      //   setError("You must Login");
      //   setIsLoading(false);
      // }
    },
    [dataSource]
  );

  return (
    <div>
      <Button type="primary" onClick={handleShowModal}>
        Add new pet
      </Button>
      <Table columns={columns} dataSource={dataSource} />

      <Modal
        title="Add new pet"
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
