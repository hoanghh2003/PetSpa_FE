import "../../assets/js/email-decode.min.js";
import "../../assets/js/jquery.min.js";
import "../../assets/js/popper.min.js";
import "../../assets/js/bootstrap.min.js";
import "../../assets/js/bootstrap-dropdown-ml-hack.js";
import "../../assets/js/slick.min.js";
import "../../assets/js/magnific-popup.min.js";
import "../../assets/js/nice-select.min.js";
import "../../assets/js/jquery-ui.js";
import "../../assets/js/vanilla-calendar.min.js";
import "../../assets/js/countdown.js";
import "../../assets/js/main.js";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  DatePicker,
  Form,
  Modal,
  Select,
  Space,
  Table,
  message,
} from "antd";
//import serviceImg from "../assets/images/main-img.jpg";
import { useNavigate } from "react-router-dom";
import Search from "antd/es/input/Search.js";
import { Option } from "antd/es/mentions/index.js";
import { useForm } from "antd/es/form/Form.js";

function Service() {
  const [error, setError] = useState();
  const [services, setServices] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const navigate = useNavigate();
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [date, setDate] = useState();
  const [selectStaffId, setSelectStaffId] = useState();
  const [form] = useForm();
  const [selectedPetId, setSelectedPetId] = useState(null);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [staffList, setStaffList] = useState([]);
  const columns = [
    {
      title: <span className="text-lg text-blue-500 font-semibold">Name</span>,
      dataIndex: "petName",
      key: "petName",
      align: "center",
      width: "27%", // Adjust width
      render: (petName) => (
        <span className="text-base text-black font-medium">{petName}</span>
      ),
    },
    {
      title: (
        <span className="text-lg text-blue-500 font-semibold">Poster</span>
      ),
      dataIndex: "image",
      key: "image",
      align: "center",
      width: "30%", // Adjust width
      render: (image) => (
        <div className="flex justify-center">
          <img
            src={image ? image : null}
            width={150}
            className="rounded-lg"
            alt="Pet"
          />
        </div>
      ),
    },
    {
      title: (
        <span className="text-lg text-blue-500 font-semibold">Action</span>
      ),
      dataIndex: "petId",
      key: "petId",
      align: "center",
      width: "28%", // Adjust width
      render: (petId) => (
        <Button
          onClick={() => setSelectedPetId(petId)}
          className={`border-2 rounded-md px-4 py-2 transition-colors ${
            petId === selectedPetId
              ? "bg-blue-400 text-white border-blue-500"
              : "bg-white text-blue-600 border-blue-700 hover:bg-blue-600 hover:text-white"
          }`}
        >
          Choice
        </Button>
      ),
    },
  ];
  const handleSearch = async (searchTerm) => {
    if (!searchTerm) {
      setError(
        "Sorry, we could not find any results for your search term. Please check your spelling, use more general words, and try again."
      );
      return;
    }

    try {
      const response = await axios.get(
        //https://localhost:7150/api/Service/search?searchTerm=grooming
        `https://localhost:7150/api/Service/search?searchTerm=${searchTerm}`
      );
      setServices(response.data.data);
      setError("");
    } catch (err) {
      if (err.response) {
        setError(err.response.data.msg);
      } else {
        setError("An error occurred while searching");
      }
    }
  };
  const handleStaffChange = (staffId) => {
    setSelectStaffId(staffId);
  };
  const handleChoice = async () => {
    const savedCart = localStorage.getItem("cart");
    const cart = savedCart ? JSON.parse(savedCart) : [];
    if (selectedPetId == null || date == null) {
      setError("Please select a pet and a birthday.");
      return;
    }
    setError("");
    const userInfoString = localStorage.getItem("user-info");
    const userInfo = JSON.parse(userInfoString);
    const token = userInfo?.data?.token;

    const isAlreadyInCart = cart.some(
      (item) =>
        item.petId === selectedPetId && item.serviceId === selectedServiceId
    );

    if (isAlreadyInCart) {
      message.warning("This pet has already used this service.");
      return;
    }

    setLoading(true); // Start loading

    try {
      // Sending POST request to the backend
      let url = `https://localhost:7150/api/Booking/available?startTime=${date.format(
        "YYYY-MM-DDTHH:mm:ss"
      )}&serviceCode=${selectedServiceId}`;

      if (selectStaffId) {
        url += `&staffId=${selectStaffId}`;
      }
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        console.log("Token expired. Please log in again.");
        setError("Token expired. Please log in again.");
        setLoading(false); // Stop loading
        return;
      }

      const selectedService = services.find(
        (service) => service.serviceId === selectedServiceId
      );

      const selectedPet = dataSource.find((pet) => pet.petId === selectedPetId);
      const newItem = {
        serviceId: selectedService.serviceId,
        data: date.format("YYYY-MM-DDTHH:mm:ss"),
        serviceName: selectedService.serviceName,
        servicePrice: selectedService.price,
        petId: selectedPet.petId,
        petName: selectedPet.petName,
        comboId: "",
      };
      setCart((prevCart) => [...prevCart, newItem]);
      message.success("Booking for pet successfully");
      // Lưu giỏ hàng vào localStorage
      localStorage.setItem("cart", JSON.stringify([...cart, newItem]));
      setSelectedPetId(null);
      setDate(null);
      setSelectStaffId(null);
      setSelectedServiceId(null);
      form.resetFields();
      setLoading(false); // Reset Ant Design form fields
      setIsOpen(false);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          console.log("Token expired. Please log in again.");
          message.error(error.response);
          localStorage.removeItem("user-info");
          setTimeout(() => {
            navigate("/");
          }, 1000);
          setLoading(false);
        } else {
          console.error("Error response:", error.response.data);
          message.error(error.response || "An error occurred.");
          setLoading(false);
          return;
          //setError(error.response.data || "An error occurred.");
        }
      } else {
        console.error("Error:", error);
        message.error("An unexpected error occurred.");
        setLoading(false);
        return;
        //setError("An unexpected error occurred.");
      }
    }
  };

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
          console.log(result.data.pets);

          setDataSource(result.data.pets.filter((x) => x.status !== false));
        } catch (error) {
          if (error.response && error.response.status === 401) {
            localStorage.removeItem("user-info");
            message.error("Token expired. Please log in again.");
            navigate("/login");
          } else {
            message.error("An error occurred. Please try again.");
          }
        }
      } else {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }

  function handleHideModal() {
    setIsOpen(false);
  }

  const handleBookNow = (serviceID) => {
    // Do something with the serviceID, such as redirecting to booking page or sending request to server
    // var petId = "1122233333";
    fetchMovies();
    setIsOpen(true);
    setSelectedServiceId(serviceID);
    console.log(serviceID);
    // const newItem = { serviceID, petId };
    // setCart((prevCart) => [...prevCart, newItem]);
    // console.log(newItem);
    // // Lưu giỏ hàng vào localStorage
    // localStorage.setItem("cart", JSON.stringify([...cart, newItem]));
  };
  const fetchServices = async () => {
    try {
      const response = await axios.get("https://localhost:7150/api/Service");
      const result = response.data;
      setServices(result.data.data);
      console.log(result.data.data);
      localStorage.setItem("service", JSON.stringify(result));
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const fetchStaff = async () => {
    try {
      const response = await axios.get("https://localhost:7150/api/Staff");
      setStaffList(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      message.error("Failed to fetch staff members");
    }
  };

  useEffect(() => {
    fetchServices();
    fetchStaff();
  }, [dataSource]);
  return (
    <div>
      <div>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Services - Petpia – Pet Care Service Template</title>
        <link
          rel="shortcut icon"
          href="assets/images/logo/favourite_icon.png"
        />
        <link rel="stylesheet" href="src/assets/css/all.css" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TSZFRP5V2X"
        ></script>
      </div>
      <Modal open={isOpen} footer={null} onCancel={handleHideModal} width={800}>
        <Table
          columns={columns}
          dataSource={dataSource}
          rowClassName={(record) =>
            record.petId === selectedPetId ? "bg-cyan-100" : ""
          }
          rowKey="petId"
          pagination={false} // Remove if you need pagination
          scroll={{ x: 800 }} // Enables horizontal scrolling
        />
        <Form layout="vertical" className="mt-5">
          <div className="flex space-x-4">
            <Form.Item label="Date" className="w-1/2">
              <Space direction="vertical" className="w-full">
                <DatePicker
                  showTime
                  value={date}
                  onChange={(date) => setDate(date)}
                  className="w-full"
                />
              </Space>
            </Form.Item>
            <Form.Item label="Select Staff" className="w-1/2">
              <Select
                showSearch
                placeholder="Select a staff"
                optionFilterProp="children"
                onChange={handleStaffChange}
                className="w-full"
              >
                {Array.isArray(staffList) &&
                  staffList.map((staff) => (
                    <Option key={staff.staffId} value={staff.staffId}>
                      {staff.fullName}
                    </Option>
                  ))}
              </Select>
            </Form.Item>
          </div>
          <p className="text-red-500">{error}</p>
        </Form>
        <div className="flex justify-end mt-2">
          <Button type="primary" onClick={handleChoice} loading={loading}>
            Book
          </Button>
        </div>
      </Modal>

      <div className="body_wrap">
        <div className="backtotop">
          <a href="#" className="scroll">
            <i className="far fa-arrow-up" />
          </a>
        </div>

        <main>
          <section className="breadcrumb_section">
            <div className="container">
              <div className="row">
                <div className="col col-lg-4 col-md-7 col-sm-9">
                  <ul className="breadcrumb_nav">
                    <li>
                      <a href="Homepage">Home</a>
                    </li>
                    <li>Service</li>
                    <li>
                      <Search
                        placeholder="input search text"
                        allowClear
                        onSearch={handleSearch}
                      />
                      <p style={{ color: "black" }}>{error}</p>
                    </li>
                  </ul>
                  <h1 className="page_title">Our Services</h1>
                  <p className="page_description mb-0">
                    Blandit cursus risus at ultrices. Enim sit amet venenatis
                    urna cursus eget nunc scelerisque
                  </p>
                </div>
              </div>
            </div>
            <div className="breadcrumb_img dog_image">
              <img
                src="assets/images/breadcrumb/breadcrumb_img_2.png"
                alt="Pet Care Service"
              />
            </div>
          </section>
          <section
            className="service_section section_space_lg"
            style={{
              backgroundImage:
                'url("assets/images/overlay/shapes_overlay_6.svg")',
            }}
          >
            <div className="container">
              <div className="section_title text-center">
                <h2 className="title_text mb-0">
                  <span className="sub_title">Our Services</span> All Pet Care
                  Services
                </h2>
              </div>

              <div className="row justify-content-center">
                {Array.isArray(services) &&
                  services.map((service) => (
                    <div key={service.serviceId} className="col col-lg-4">
                      <div
                        className="service_item"
                        style={
                          {
                            // backgroundImage:
                            //   'url("assets/img/shape/shape_path_1.svg")',
                          }
                        }
                      >
                        <img src="src/assets/img/icon_pet_grooming.svg" />

                        <div className="title_wrap">
                          <div className="item_icon">
                            <img
                              src="src/assets/images/icon/icon_pet_taxi.svg"
                              alt=""
                            />
                          </div>
                          <h3 className="item_title mb-0">
                            {" "}
                            {service.serviceName}
                          </h3>
                        </div>

                        <p>{service.serviceDescription}</p>
                        <div className="item_price">
                          <span>From $39 / complex</span>
                        </div>
                        <a className="btn_unfill" href="service_details">
                          <span>Get Service</span>{" "}
                          <i className="far fa-long-arrow-right" />
                        </a>
                        <Button
                          onClick={() => handleBookNow(service.serviceId)}
                          className="w-24 h-7 m-10  bg-white border-[1px] border-black text-black rounded-full text-xs"
                        >
                          Book now
                        </Button>
                        {/* <div className="decoration_image">
                          <img src={service.serviceImage} alt="Pet Paws" />
                        </div> */}
                      </div>
                    </div>
                  ))}
                {/* <div className="col col-lg-4">
                  <div
                    className="service_item"
                    style={{
                      backgroundImage:
                        'url("assets/images/shape/shape_path_1.svg")',
                    }}
                  >
                    <div className="title_wrap">
                      <div className="item_icon">
                        <img
                          src="assets/images/icon/icon_pet_grooming.svg"
                          alt="Pet Grooming"
                        />
                      </div>
                      <h3 className="item_title mb-0">Pet Grooming</h3>
                    </div>
                    <p>
                      Et odio pellentesque diam volutpat commodo sed egestas
                      egestas pellentesque nec nam
                    </p>
                    <div className="item_price">
                      <span>From $39 / complex</span>
                    </div>
                    <a className="btn_unfill" href="service_details">
                      <span>Get Service</span>{" "}
                      <i className="far fa-long-arrow-right" />
                    </a>
                    <div className="decoration_image">
                      <img
                        src="assets/images/shape/shape_paws.svg"
                        alt="Pet Paws"
                      />
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div
                    className="service_item"
                    style={{
                      backgroundImage:
                        'url("assets/images/shape/shape_path_1.svg")',
                    }}
                  >
                    <div className="title_wrap">
                      <div className="item_icon">
                        <img
                          src="assets/images/icon/icon_pet_training.svg"
                          alt="Pet Training"
                        />
                      </div>
                      <h3 className="item_title mb-0">Pet Training</h3>
                    </div>
                    <p>
                      Aliquam ut porttitor leo a diam sollicitudin tempor sit
                      amet est placerat
                    </p>
                    <div className="item_price">
                      <span>From $27 / hour</span>
                    </div>
                    <a className="btn_unfill" href="service_details">
                      <span>Get Service</span>{" "}
                      <i className="far fa-long-arrow-right" />
                    </a>
                    <div className="decoration_image">
                      <img
                        src="assets/images/shape/shape_paws.svg"
                        alt="Pet Paws"
                      />
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div
                    className="service_item"
                    style={{
                      backgroundImage:
                        'url("assets/images/shape/shape_path_1.svg")',
                    }}
                  >
                    <div className="title_wrap">
                      <div className="item_icon">
                        <img
                          src="assets/images/icon/icon_pet_taxi.svg"
                          alt="Pet Taxi"
                        />
                      </div>
                      <h3 className="item_title mb-0">Pet Taxi</h3>
                    </div>
                    <p>
                      Maecenas ultricies mi eget mauris pharetra et ultrices
                      consectetur adipiscing elit
                    </p>
                    <div className="item_price">
                      <span>From $22 / trip</span>
                    </div>
                    <a className="btn_unfill" href="service_details">
                      <span>Get Service</span>{" "}
                      <i className="far fa-long-arrow-right" />
                    </a>
                    <div className="decoration_image">
                      <img
                        src="assets/images/shape/shape_paws.svg"
                        alt="Pet Paws"
                      />
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div
                    className="service_item"
                    style={{
                      backgroundImage:
                        'url("assets/images/shape/shape_path_1.svg")',
                    }}
                  >
                    <div className="title_wrap">
                      <div className="item_icon">
                        <img
                          src="assets/images/icon/icon_pet_health.svg"
                          alt="Pet Health & Wellness"
                        />
                      </div>
                      <h3 className="item_title mb-0">Health &amp; Wellness</h3>
                    </div>
                    <p>
                      Amet porttitor eget dolor morbi non arcu risus quis varius
                      blandit aliquam etiam
                    </p>
                    <div className="item_price">
                      <span>From $39/ visit</span>
                    </div>
                    <a className="btn_unfill" href="service_details">
                      <span>Get Service</span>{" "}
                      <i className="far fa-long-arrow-right" />
                    </a>
                    <div className="decoration_image">
                      <img
                        src="assets/images/shape/shape_paws.svg"
                        alt="Pet Paws"
                      />
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div
                    className="service_item"
                    style={{
                      backgroundImage:
                        'url("assets/images/shape/shape_path_1.svg")',
                    }}
                  >
                    <div className="title_wrap">
                      <div className="item_icon">
                        <img
                          src="assets/images/icon/icon_pet_hotel.svg"
                          alt="Pet Hotel"
                        />
                      </div>
                      <h3 className="item_title mb-0">Pet Hotel</h3>
                    </div>
                    <p>
                      Turpis massa sed elementum tempus egestas sed sed risus
                      aliquam urna cursus eget n
                    </p>
                    <div className="item_price">
                      <span>From $15 / night</span>
                    </div>
                    <a className="btn_unfill" href="service_details">
                      <span>Get Service</span>{" "}
                      <i className="far fa-long-arrow-right" />
                    </a>
                    <div className="decoration_image">
                      <img
                        src="assets/images/shape/shape_paws.svg"
                        alt="Pet Paws"
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
          <section
            className="feature_service decoration_wrap"
            style={{
              backgroundImage: 'url("assets/images/background/shape_bg_2.png")',
            }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col col-lg-5">
                  <div className="feature_image">
                    <div className="image_wrap">
                      <img
                        src="assets/images/feature/feature_img_1.jpg"
                        alt="Pet Grooming Service Image"
                      />
                    </div>
                    <div className="shape_image_1">
                      <img
                        src="assets/images/shape/shape_butterfly.svg"
                        alt="Butterfly Shape"
                      />
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div className="feature_content">
                    <h2 className="item_title">Pet Grooming Service</h2>
                    <ul className="icon_list unorder_list_block">
                      <li>
                        <i className="fas fa-check-circle" />{" "}
                        <span>Bathing – wash and fluff dry</span>
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />{" "}
                        <span>Pawdicure – nail trimming and filing</span>
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />{" "}
                        <span>
                          Breed specific styling, cutting and stripping
                        </span>
                      </li>
                    </ul>
                    <a className="btn btn_primary" href="service_details">
                      <i className="fas fa-paw" /> Get Service
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="decoration_item shape_image_2">
              <img
                src="assets/images/shape/shape_group_1.svg"
                alt="Pet Tools Box"
              />
            </div>
            <div className="decoration_item decoration_image_1">
              <img
                src="assets/images/feature/feature_img_2.jpg"
                alt="Pet Grooming Service Image"
              />
            </div>
            <div className="decoration_item decoration_image_2">
              <img
                src="assets/images/feature/feature_img_3.jpg"
                alt="Pet Grooming Service Image"
              />
            </div>
          </section>
          <section
            className="service_section section_space_lg"
            style={{
              backgroundImage:
                'url("assets/images/overlay/shapes_overlay_6.svg")',
            }}
          >
            <div className="container">
              <div className="section_title text-center">
                <div className="row justify-content-center">
                  <div className="col col-lg-5">
                    <h2 className="title_text">
                      <span className="sub_title">Our Prices</span> Pet Services
                      + Rates
                    </h2>
                    <p className="mb-0">
                      We can fully customize your pet sitting schedule to fit
                      your pet’s needs. Pick and choose what visits work best
                      for you and your family
                    </p>
                  </div>
                </div>
              </div>
              <div className="services_price_tab">
                <ul className="nav tabs_nav unorder_list_center" role="tablist">
                  <li role="presentation">
                    <button
                      className="active"
                      data-bs-toggle="tab"
                      data-bs-target="#tab_walking_sitting"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Walking &amp; Sitting
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      data-bs-toggle="tab"
                      data-bs-target="#tab_training"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Training
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      data-bs-toggle="tab"
                      data-bs-target="#tab_pet_taxi"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Pet Taxi
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      data-bs-toggle="tab"
                      data-bs-target="#tab_pet_hotel"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Pet Hotel
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="tab_walking_sitting"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col col-lg-6">
                        <div className="services_price_items_wrap">
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="assets/images/service/service_img_1.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <i className="fas fa-clock" /> 15 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$22.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                1 x Visit per day, small pet visit can be added
                                per quote
                              </h3>
                            </div>
                            <a
                              className="item_global_link"
                              href="service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="assets/images/service/service_img_2.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <i className="fas fa-clock" /> 30 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                A 12-hour stay, including the evening visit and
                                morning visit
                              </h3>
                            </div>
                            <a
                              className="item_global_link"
                              href="service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="assets/images/service/service_img_3.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <i className="fas fa-clock" /> 45 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$36.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                Drop-off and pick-up times are flexible. $10
                                each additional dog.
                              </h3>
                            </div>
                            <a
                              className="item_global_link"
                              href="service_details"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col col-lg-6">
                        <div className="services_price_items_wrap">
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="assets/images/service/service_img_4.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <i className="fas fa-clock" /> 29 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$22.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                1 x Visit per day, small pet visit can be added
                                per quote
                              </h3>
                            </div>
                            <a
                              className="item_global_link"
                              href="service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="assets/images/service/service_img_5.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <i className="fas fa-clock" /> 65 Overnight
                                  Pet Sitting
                                </div>
                                <div className="item_price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                A 12-hour stay, including the evening visit and
                                morning visit
                              </h3>
                            </div>
                            <a
                              className="item_global_link"
                              href="service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="assets/images/service/service_img_6.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <i className="fas fa-clock" /> 40 Private
                                  Boarding
                                </div>
                                <div className="item_price">
                                  <span>$36.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                Drop-off and pick-up times are flexible. $10
                                each additional dog.
                              </h3>
                            </div>
                            <a
                              className="item_global_link"
                              href="service_details"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab_training"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col col-lg-6">
                        <div className="services_price_items_wrap">
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="assets/images/service/service_img_1.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <i className="fas fa-clock" /> 15 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$22.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                1 x Visit per day, small pet visit can be added
                                per quote
                              </h3>
                            </div>
                            <a
                              className="item_global_link"
                              href="service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="assets/images/service/service_img_2.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <i className="fas fa-clock" /> 30 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                A 12-hour stay, including the evening visit and
                                morning visit
                              </h3>
                            </div>
                            <a
                              className="item_global_link"
                              href="service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="assets/images/service/service_img_3.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <i className="fas fa-clock" /> 45 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$36.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                Drop-off and pick-up times are flexible. $10
                                each additional dog.
                              </h3>
                            </div>
                            <a
                              className="item_global_link"
                              href="service_details"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col col-lg-6">
                        <div className="services_price_items_wrap">
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="assets/images/service/service_img_4.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <i className="fas fa-clock" /> 29 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$22.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                1 x Visit per day, small pet visit can be added
                                per quote
                              </h3>
                            </div>
                            <a
                              className="item_global_link"
                              href="service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="assets/images/service/service_img_5.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <i className="fas fa-clock" /> 65 Overnight
                                  Pet Sitting
                                </div>
                                <div className="item_price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                A 12-hour stay, including the evening visit and
                                morning visit
                              </h3>
                            </div>
                            <a
                              className="item_global_link"
                              href="service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="assets/images/service/service_img_6.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <i className="fas fa-clock" /> 40 Private
                                  Boarding
                                </div>
                                <div className="item_price">
                                  <span>$36.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                Drop-off and pick-up times are flexible. $10
                                each additional dog.
                              </h3>
                            </div>
                            <a
                              className="item_global_link"
                              href="service_details"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab_pet_taxi"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col col-lg-6">
                        <div className="services_price_items_wrap">
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="assets/images/service/service_img_1.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <i className="fas fa-clock" /> 15 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$22.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                1 x Visit per day, small pet visit can be added
                                per quote
                              </h3>
                            </div>
                            <a
                              className="item_global_link"
                              href="service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="assets/images/service/service_img_2.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <i className="fas fa-clock" /> 30 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                A 12-hour stay, including the evening visit and
                                morning visit
                              </h3>
                            </div>
                            <a
                              className="item_global_link"
                              href="service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="assets/images/service/service_img_3.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <i className="fas fa-clock" /> 45 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$36.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                Drop-off and pick-up times are flexible. $10
                                each additional dog.
                              </h3>
                            </div>
                            <a
                              className="item_global_link"
                              href="service_details"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col col-lg-6">
                        <div className="services_price_items_wrap">
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="assets/images/service/service_img_4.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <i className="fas fa-clock" /> 29 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$22.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                1 x Visit per day, small pet visit can be added
                                per quote
                              </h3>
                            </div>
                            <a
                              className="item_global_link"
                              href="service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="assets/images/service/service_img_5.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <i className="fas fa-clock" /> 65 Overnight
                                  Pet Sitting
                                </div>
                                <div className="item_price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                A 12-hour stay, including the evening visit and
                                morning visit
                              </h3>
                            </div>
                            <a
                              className="item_global_link"
                              href="service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="assets/images/service/service_img_6.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <i className="fas fa-clock" /> 40 Private
                                  Boarding
                                </div>
                                <div className="item_price">
                                  <span>$36.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                Drop-off and pick-up times are flexible. $10
                                each additional dog.
                              </h3>
                            </div>
                            <a
                              className="item_global_link"
                              href="service_details"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab_pet_hotel"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col col-lg-6">
                        <div className="services_price_items_wrap">
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="assets/images/service/service_img_1.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <i className="fas fa-clock" /> 15 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$22.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                1 x Visit per day, small pet visit can be added
                                per quote
                              </h3>
                            </div>
                            <a
                              className="item_global_link"
                              href="service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="assets/images/service/service_img_2.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <i className="fas fa-clock" /> 30 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                A 12-hour stay, including the evening visit and
                                morning visit
                              </h3>
                            </div>
                            <a
                              className="item_global_link"
                              href="service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="assets/images/service/service_img_3.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <i className="fas fa-clock" /> 45 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$36.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                Drop-off and pick-up times are flexible. $10
                                each additional dog.
                              </h3>
                            </div>
                            <a
                              className="item_global_link"
                              href="service_details"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col col-lg-6">
                        <div className="services_price_items_wrap">
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="assets/images/service/service_img_4.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <i className="fas fa-clock" /> 29 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$22.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                1 x Visit per day, small pet visit can be added
                                per quote
                              </h3>
                            </div>
                            <a
                              className="item_global_link"
                              href="service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="assets/images/service/service_img_5.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <i className="fas fa-clock" /> 65 Overnight
                                  Pet Sitting
                                </div>
                                <div className="item_price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                A 12-hour stay, including the evening visit and
                                morning visit
                              </h3>
                            </div>
                            <a
                              className="item_global_link"
                              href="service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="assets/images/service/service_img_6.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <i className="fas fa-clock" /> 40 Private
                                  Boarding
                                </div>
                                <div className="item_price">
                                  <span>$36.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                Drop-off and pick-up times are flexible. $10
                                each additional dog.
                              </h3>
                            </div>
                            <a
                              className="item_global_link"
                              href="service_details"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="team_section bg_gray section_space_lg"
            style={{
              backgroundImage: 'url("assets/images/shape/shape_paws_bg_2.svg")',
            }}
          >
            <div className="container">
              <div className="section_title text-center">
                <h2 className="title_text mb-0">
                  <span className="sub_title">Pet Care Team</span> Welcome To
                  Our Family
                </h2>
              </div>
              <div className="row justify-content-center">
                <div className="col col-lg-3 col-md-6 col-sm-6">
                  <div className="team_item text-center">
                    <div className="item_image">
                      <img
                        src="assets/images/team/team_img_1.png"
                        alt="Team Image"
                      />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Cameron Rogers</h3>
                      <span className="item_designation">
                        President &amp; CEO
                      </span>
                      <ul className="social_links unorder_list">
                        <li>
                          <a href="#!">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-sm-6">
                  <div className="team_item text-center">
                    <div className="item_image">
                      <img
                        src="assets/images/team/team_img_2.png"
                        alt="Team Image"
                      />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Irene Sotelo</h3>
                      <span className="item_designation">
                        President &amp; CEO
                      </span>
                      <ul className="social_links unorder_list">
                        <li>
                          <a href="#!">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-sm-6">
                  <div className="team_item text-center">
                    <div className="item_image">
                      <img
                        src="assets/images/team/team_img_3.png"
                        alt="Team Image"
                      />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Cameron Rogers</h3>
                      <span className="item_designation">
                        President &amp; CEO
                      </span>
                      <ul className="social_links unorder_list">
                        <li>
                          <a href="#!">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-sm-6">
                  <div className="team_item text-center">
                    <div className="item_image">
                      <img
                        src="assets/images/team/team_img_4.png"
                        alt="Team Image"
                      />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Tiontay Carroll</h3>
                      <span className="item_designation">
                        President &amp; CEO
                      </span>
                      <ul className="social_links unorder_list">
                        <li>
                          <a href="#!">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="gallery_section section_space_lg decoration_wrap pb-0">
            <div className="container">
              <div className="section_title">
                <h2 className="title_text">Gallery</h2>
              </div>
              <div className="gallery_carousel row">
                <div
                  className="common_carousel_3col"
                  data-slick='{"dots": false}'
                >
                  <div className="carousel_item col">
                    <div className="gallery_item">
                      <div className="item_image">
                        <img
                          src="assets/images/gallery/gallery_img_7.jpg"
                          alt="Pet Image"
                        />
                      </div>
                      <a className="item_content" href="#!">
                        <span className="d-block">
                          <small>SERVICES</small>
                        </span>{" "}
                        <strong className="d-block">Cat Grooming</strong>
                      </a>
                    </div>
                  </div>
                  <div className="carousel_item col">
                    <div className="row">
                      <div className="col">
                        <div className="gallery_item">
                          <div className="item_image">
                            <img
                              src="assets/images/gallery/gallery_img_8.jpg"
                              alt="Pet Image"
                            />
                          </div>
                          <a className="item_content" href="#!">
                            <span className="d-block">
                              <small>SERVICES</small>
                            </span>{" "}
                            <strong className="d-block">Cat Grooming</strong>
                          </a>
                        </div>
                      </div>
                      <div className="col col-6">
                        <div className="gallery_item">
                          <div className="item_image">
                            <img
                              src="assets/images/gallery/gallery_img_9.jpg"
                              alt="Pet Image"
                            />
                          </div>
                          <a className="item_content" href="#!">
                            <span className="d-block">
                              <small>SERVICES</small>
                            </span>{" "}
                            <strong className="d-block">Cat Grooming</strong>
                          </a>
                        </div>
                      </div>
                      <div className="col col-6">
                        <div className="gallery_item">
                          <div className="item_image">
                            <img
                              src="assets/images/gallery/gallery_img_10.jpg"
                              alt="Pet Image"
                            />
                          </div>
                          <a className="item_content" href="#!">
                            <span className="d-block">
                              <small>SERVICES</small>
                            </span>{" "}
                            <strong className="d-block">Cat Grooming</strong>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel_item col">
                    <div className="gallery_item">
                      <div className="item_image">
                        <img
                          src="assets/images/gallery/gallery_img_11.jpg"
                          alt="Pet Image"
                        />
                      </div>
                      <a className="item_content" href="#!">
                        <span className="d-block">
                          <small>SERVICES</small>
                        </span>{" "}
                        <strong className="d-block">Cat Grooming</strong>
                      </a>
                    </div>
                  </div>
                  <div className="carousel_item col">
                    <div className="gallery_item">
                      <div className="item_image">
                        <img
                          src="assets/images/gallery/gallery_img_7.jpg"
                          alt="Pet Image"
                        />
                      </div>
                      <a className="item_content" href="#!">
                        <span className="d-block">
                          <small>SERVICES</small>
                        </span>{" "}
                        <strong className="d-block">Cat Grooming</strong>
                      </a>
                    </div>
                  </div>
                  <div className="carousel_item col">
                    <div className="row">
                      <div className="col">
                        <div className="gallery_item">
                          <div className="item_image">
                            <img
                              src="assets/images/gallery/gallery_img_8.jpg"
                              alt="Pet Image"
                            />
                          </div>
                          <a className="item_content" href="#!">
                            <span className="d-block">
                              <small>SERVICES</small>
                            </span>{" "}
                            <strong className="d-block">Cat Grooming</strong>
                          </a>
                        </div>
                      </div>
                      <div className="col col-6">
                        <div className="gallery_item">
                          <div className="item_image">
                            <img
                              src="assets/images/gallery/gallery_img_9.jpg"
                              alt="Pet Image"
                            />
                          </div>
                          <a className="item_content" href="#!">
                            <span className="d-block">
                              <small>SERVICES</small>
                            </span>{" "}
                            <strong className="d-block">Cat Grooming</strong>
                          </a>
                        </div>
                      </div>
                      <div className="col col-6">
                        <div className="gallery_item">
                          <div className="item_image">
                            <img
                              src="assets/images/gallery/gallery_img_10.jpg"
                              alt="Pet Image"
                            />
                          </div>
                          <a className="item_content" href="#!">
                            <span className="d-block">
                              <small>SERVICES</small>
                            </span>{" "}
                            <strong className="d-block">Cat Grooming</strong>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel_item col">
                    <div className="gallery_item">
                      <div className="item_image">
                        <img
                          src="assets/images/gallery/gallery_img_11.jpg"
                          alt="Pet Image"
                        />
                      </div>
                      <a className="item_content" href="#!">
                        <span className="d-block">
                          <small>SERVICES</small>
                        </span>{" "}
                        <strong className="d-block">Cat Grooming</strong>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="carousel_arrow">
                  <div className="container">
                    <button
                      type="button"
                      className="cc3c_left_arrow slick-arrow"
                      style={{}}
                    >
                      <i className="far fa-arrow-left" />
                    </button>{" "}
                    <button
                      type="button"
                      className="cc3c_right_arrow slick-arrow"
                      style={{}}
                    >
                      <i className="far fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="decoration_item shape_dot_2">
              <img
                src="assets/images/shape/shape_dot_group_4.svg"
                alt="Colorful Dots"
              />
            </div>
          </section>
        </main>
        <footer className="footer_section">
          <div className="footer_widget_area section_space_lg">
            <div className="container">
              <div className="row justify-content-lg-between">
                <div className="col col-lg-3 col-md-6 col-sm-6">
                  <div className="footer_widget footer_about">
                    <div className="site_logo">
                      <a href="Homepage">
                        <img
                          className="logo_before"
                          src="assets/images/logo/logo.png"
                          alt="Petpia Logo"
                        />
                      </a>
                    </div>
                    <p>
                      Tristique nulla aliquet enim tortor at auctor urna nunc.
                      Massa enim nec dui nunc mattis enim ut tellus. Sed ut
                      perspiciatis unde ...
                    </p>
                    <div className="footer_hotline iconbox_item iconbox_lefticon">
                      <div className="item_icon">
                        <i className="fas fa-phone" />
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">
                          <a href="tel:(913)756-3126">0356.105.488</a>
                        </h3>
                        <p className="mb-0">Got Questions? Call us 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-sm-6">
                  <div className="footer_widget">
                    <h3 className="footer_widget_title">Working Hours</h3>
                    <div className="office_hour">
                      <ul className="unorder_list_block">
                        <li>
                          <span>Mon - Fri:</span> <span>7am – 6pm</span>
                        </li>
                        <li>
                          <span>Saturday:</span> <span>9am – 4pm</span>
                        </li>
                        <li>
                          <span>Sunday:</span>{" "}
                          <span>
                            <strong>Closed</strong>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-2 col-md-6 col-sm-6">
                  <div className="footer_widget">
                    <h3 className="footer_widget_title">Useful Links</h3>
                    <div className="page_list">
                      <ul className="unorder_list_block">
                        <li>
                          <a href="Homepage">
                            <i className="fas fa-circle" />
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="about">
                            <i className="fas fa-circle" />
                            About
                          </a>
                        </li>
                        <li>
                          <a href="service">
                            <i className="fas fa-circle" />
                            Services
                          </a>
                        </li>
                        <li>
                          <a href="shop">
                            <i className="fas fa-circle" />
                            Shop
                          </a>
                        </li>
                      </ul>
                      <ul className="unorder_list_block">
                        <li>
                          <a href="faq">
                            <i className="fas fa-circle" />
                            FAQ
                          </a>
                        </li>
                        <li>
                          <a href="gallery">
                            <i className="fas fa-circle" />
                            Gallery
                          </a>
                        </li>
                        <li>
                          <a href="shipping_info">
                            <i className="fas fa-circle" />
                            Delivery
                          </a>
                        </li>
                        <li>
                          <a href="deals">
                            <i className="fas fa-circle" />
                            Sales
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-sm-6">
                  <div className="footer_widget">
                    <h3 className="footer_widget_title">Newsletter</h3>
                    <form action="#">
                      <div className="footer_newslatter">
                        <p>
                          Be first in the queue! Get our latest news straight to
                          your inbox.
                        </p>
                        <div className="form_item">
                          <input
                            type="text"
                            name="newsletter-email"
                            placeholder="Email"
                          />{" "}
                          <button type="submit">
                            <i className="far fa-arrow-right" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bottom">
            <div className="container">
              <p className="copyrights_text text-center">
                {" "}
                Copyrights 2022 © Petpia. Thiết kế website bởi{" "}
                <a target="_blank" href="https://adsmo.vn">
                  ADSMO
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Service;
