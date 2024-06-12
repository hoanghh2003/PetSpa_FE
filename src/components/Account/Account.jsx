function Account() {
  return (
<div>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
  />
  <title>Account settings - Account | Vuexy - Bootstrap Admin Template</title>
  <meta
    name="description"
    content="Start your development with a Dashboard for Bootstrap 5"
  />
  <meta
    name="keywords"
    content="dashboard, bootstrap 5 dashboard, bootstrap 5 design, bootstrap 5"
  />
  {/* Canonical SEO */}
  {/* ? PROD Only: Google Tag Manager (Default ThemeSelection: GTM-5DDHKGP, PixInvent: GTM-5J3LMKC) */}
  {/* End Google Tag Manager */}
  {/* Favicon */}
  <link
    rel="icon"
    type="image/x-icon"
    href="src/assets/images/favicon/favicon.ico"
  />
  {/* Fonts */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&ampdisplay=swap"
    rel="stylesheet"
  />
  {/* Icons */}
  <link rel="stylesheet" href="src/assets/vendor/fonts/fontawesome.css" />
  <link rel="stylesheet" href="src/assets/vendor/fonts/tabler-icons.css" />
  <link rel="stylesheet" href="src/assets/vendor/fonts/flag-icons.css" />
  {/* Core CSS */}
  <link
    rel="stylesheet"
    href="src/assets/vendor/css/rtl/core.css"
    className="template-customizer-core-css"
  />
  <link
    rel="stylesheet"
    href="src/assets/vendor/css/rtl/theme-default.css"
    className="template-customizer-theme-css"
  />
  <link rel="stylesheet" href="src/assets/css/demo.css" />
  {/* Vendors CSS */}
  <link
    rel="stylesheet"
    href="src/assets/vendor/libs/node-waves/node-waves.css"
  />
  <link
    rel="stylesheet"
    href="src/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
  />
  <link
    rel="stylesheet"
    href="src/assets/vendor/libs/typeahead-js/typeahead.css"
  />
  <link rel="stylesheet" href="src/assets/vendor/libs/select2/select2.css" />
  <link
    rel="stylesheet"
    href="src/assets/vendor/libs/@form-validation/form-validation.css"
  />
  <link
    rel="stylesheet"
    href="src/assets/vendor/libs/animate-css/animate.css"
  />
  <link
    rel="stylesheet"
    href="src/assets/vendor/libs/sweetalert2/sweetalert2.css"
  />
  {/* Page CSS */}
  {/* Helpers */}
  {/*! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section */}
  {/*? Template customizer: To hide customizer set displayCustomizer value false in config.js.  */}
  {/*? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  */}
  {/* ?PROD Only: Google Tag Manager (noscript) (Default ThemeSelection: GTM-5DDHKGP, PixInvent: GTM-5J3LMKC) */}
  <noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-5DDHKGP"
    height="0" width="0"
    style={{ display: "none", visibility: "hidden" }}
    title="Google Tag Manager"
  ></iframe>
</noscript>
  {/* End Google Tag Manager (noscript) */}
  {/* Layout wrapper */}
  <div className="layout-wrapper layout-content-navbar  ">
    <div className="layout-container">
      {/* / Menu */}
      {/* Layout container */}
      <div className="layout-page">
        {/* Navbar */}
        <nav
          className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
          id="layout-navbar"
        >
          <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0   d-xl-none ">
            <a
              className="nav-item nav-link px-0 me-xl-4"
              href="javascript:void(0)"
            >
              <i className="ti ti-menu-2 ti-sm" />
            </a>
          </div>
          <div
            className="navbar-nav-right d-flex align-items-center"
            id="navbar-collapse"
          >
            {/* Search */}
            <div className="navbar-nav align-items-center">
              <div className="nav-item navbar-search-wrapper mb-0">
                <a
                  className="nav-item nav-link search-toggler d-flex align-items-center px-0"
                  href="javascript:void(0);"
                >
                  <i className="ti ti-search ti-md me-2" />
                  <span className="d-none d-md-inline-block text-muted">
                    Search (Ctrl+/)
                  </span>
                </a>
              </div>
            </div>
            {/* /Search */}
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              {/* Language */}
              <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
                <a
                  className="nav-link dropdown-toggle hide-arrow"
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                >
                  <i className="ti ti-language rounded-circle ti-md" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0);"
                      data-language="en"
                      data-text-direction="ltr"
                    >
                      <span className="align-middle">English</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0);"
                      data-language="fr"
                      data-text-direction="ltr"
                    >
                      <span className="align-middle">French</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0);"
                      data-language="ar"
                      data-text-direction="rtl"
                    >
                      <span className="align-middle">Arabic</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0);"
                      data-language="de"
                      data-text-direction="ltr"
                    >
                      <span className="align-middle">German</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/*/ Language */}
              {/* Style Switcher */}
              <li className="nav-item dropdown-style-switcher dropdown me-2 me-xl-0">
                <a
                  className="nav-link dropdown-toggle hide-arrow"
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                >
                  <i className="ti ti-md" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-styles">
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0);"
                      data-theme="light"
                    >
                      <span className="align-middle">
                        <i className="ti ti-sun me-2" />
                        Light
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0);"
                      data-theme="dark"
                    >
                      <span className="align-middle">
                        <i className="ti ti-moon me-2" />
                        Dark
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0);"
                      data-theme="system"
                    >
                      <span className="align-middle">
                        <i className="ti ti-device-desktop me-2" />
                        System
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* / Style Switcher*/}
              {/* Quick links  */}
              <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
                <a
                  className="nav-link dropdown-toggle hide-arrow"
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  <i className="ti ti-layout-grid-add ti-md" />
                </a>
                <div className="dropdown-menu dropdown-menu-end py-0">
                  <div className="dropdown-menu-header border-bottom">
                    <div className="dropdown-header d-flex align-items-center py-3">
                      <h5 className="text-body mb-0 me-auto">Shortcuts</h5>
                      <a
                        href="javascript:void(0)"
                        className="dropdown-shortcuts-add text-body"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add shortcuts"
                      >
                        <i className="ti ti-sm ti-apps" />
                      </a>
                    </div>
                  </div>
                  <div className="dropdown-shortcuts-list scrollable-container">
                    <div className="row row-bordered overflow-visible g-0">
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                          <i className="ti ti-calendar fs-4" />
                        </span>
                        <a href="app-calendar.html" className="stretched-link">
                          Calendar
                        </a>
                        <small className="text-muted mb-0">Appointments</small>
                      </div>
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                          <i className="ti ti-file-invoice fs-4" />
                        </span>
                        <a
                          href="app-invoice-list.html"
                          className="stretched-link"
                        >
                          Invoice App
                        </a>
                        <small className="text-muted mb-0">
                          Manage Accounts
                        </small>
                      </div>
                    </div>
                    <div className="row row-bordered overflow-visible g-0">
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                          <i className="ti ti-users fs-4" />
                        </span>
                        <a href="app-user-list.html" className="stretched-link">
                          User App
                        </a>
                        <small className="text-muted mb-0">Manage Users</small>
                      </div>
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                          <i className="ti ti-lock fs-4" />
                        </span>
                        <a
                          href="app-access-roles.html"
                          className="stretched-link"
                        >
                          Role Management
                        </a>
                        <small className="text-muted mb-0">Permission</small>
                      </div>
                    </div>
                    <div className="row row-bordered overflow-visible g-0">
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                          <i className="ti ti-chart-bar fs-4" />
                        </span>
                        <a href="index.html" className="stretched-link">
                          Dashboard
                        </a>
                        <small className="text-muted mb-0">User Profile</small>
                      </div>
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                          <i className="ti ti-settings fs-4" />
                        </span>
                        <a
                          href="AccountSetting"
                          className="stretched-link"
                        >
                          Setting
                        </a>
                        <small className="text-muted mb-0">
                          Account Settings
                        </small>
                      </div>
                    </div>
                    <div className="row row-bordered overflow-visible g-0">
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                          <i className="ti ti-help fs-4" />
                        </span>
                        <a href="pages-faq.html" className="stretched-link">
                          FAQs
                        </a>
                        <small className="text-muted mb-0">
                          FAQs &amp; Articles
                        </small>
                      </div>
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                          <i className="ti ti-square fs-4" />
                        </span>
                        <a
                          href="modal-examples.html"
                          className="stretched-link"
                        >
                          Modals
                        </a>
                        <small className="text-muted mb-0">Useful Popups</small>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* Quick links */}
              {/* Notification */}
              <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1">
                <a
                  className="nav-link dropdown-toggle hide-arrow"
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  <i className="ti ti-bell ti-md" />
                  <span className="badge bg-danger rounded-pill badge-notifications">
                    5
                  </span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end py-0">
                  <li className="dropdown-menu-header border-bottom">
                    <div className="dropdown-header d-flex align-items-center py-3">
                      <h5 className="text-body mb-0 me-auto">Notification</h5>
                      <a
                        href="javascript:void(0)"
                        className="dropdown-notifications-all text-body"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Mark all as read"
                      >
                        <i className="ti ti-mail-opened fs-4" />
                      </a>
                    </div>
                  </li>
                  <li className="dropdown-notifications-list scrollable-container">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item list-group-item-action dropdown-notifications-item">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img
                                src="src/assets/images/avatars/1.png"
                                alt
                                className="h-auto rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Congratulation Lettie 🎉</h6>
                            <p className="mb-0">
                              Won the monthly best seller gold badge
                            </p>
                            <small className="text-muted">1h ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot" />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="ti ti-x" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <span className="avatar-initial rounded-circle bg-label-danger">
                                CF
                              </span>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Charles Franklin</h6>
                            <p className="mb-0">Accepted your connection</p>
                            <small className="text-muted">12hr ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot" />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="ti ti-x" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img
                                src="src/assets/images/avatars/2.png"
                                alt
                                className="h-auto rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">New Message ✉️</h6>
                            <p className="mb-0">
                              You have new message from Natalie
                            </p>
                            <small className="text-muted">1h ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot" />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="ti ti-x" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <span className="avatar-initial rounded-circle bg-label-success">
                                <i className="ti ti-shopping-cart" />
                              </span>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">
                              Whoo! You have new order 🛒{" "}
                            </h6>
                            <p className="mb-0">
                              ACME Inc. made new order $1,154
                            </p>
                            <small className="text-muted">1 day ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot" />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="ti ti-x" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img
                                src="src/assets/images/avatars/9.png"
                                alt
                                className="h-auto rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">
                              Application has been approved 🚀{" "}
                            </h6>
                            <p className="mb-0">
                              Your ABC project application has been approved.
                            </p>
                            <small className="text-muted">2 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot" />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="ti ti-x" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <span className="avatar-initial rounded-circle bg-label-success">
                                <i className="ti ti-chart-pie" />
                              </span>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">
                              Monthly report is generated
                            </h6>
                            <p className="mb-0">
                              July monthly financial report is generated{" "}
                            </p>
                            <small className="text-muted">3 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot" />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="ti ti-x" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img
                                src="src/assets/images/avatars/5.png"
                                alt
                                className="h-auto rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Send connection request</h6>
                            <p className="mb-0">
                              Peter sent you connection request
                            </p>
                            <small className="text-muted">4 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot" />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="ti ti-x" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img
                                src="src/assets/images/avatars/6.png"
                                alt
                                className="h-auto rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">New message from Jane</h6>
                            <p className="mb-0">
                              Your have new message from Jane
                            </p>
                            <small className="text-muted">5 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot" />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="ti ti-x" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <span className="avatar-initial rounded-circle bg-label-warning">
                                <i className="ti ti-alert-triangle" />
                              </span>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">CPU is running high</h6>
                            <p className="mb-0">
                              CPU Utilization Percent is currently at 88.63%,
                            </p>
                            <small className="text-muted">5 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot" />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="ti ti-x" />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-menu-footer border-top">
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item d-flex justify-content-center text-primary p-2 h-px-40 mb-1 align-items-center"
                    >
                      View all notifications
                    </a>
                  </li>
                </ul>
              </li>
              {/*/ Notification */}
              {/* User */}
              <li className="nav-item navbar-dropdown dropdown-user dropdown">
                <a
                  className="nav-link dropdown-toggle hide-arrow"
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                >
                  <div className="avatar avatar-online">
                    <img
                      src="src/assets/images/avatars/1.png"
                      alt
                      className="h-auto rounded-circle"
                    />
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a
                      className="dropdown-item"
                      href="AccountSetting"
                    >
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar avatar-online">
                            <img
                              src="src/assets/images/avatars/1.png"
                              alt
                              className="h-auto rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <span className="fw-medium d-block">John Doe</span>
                          <small className="text-muted">Admin</small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="pages-profile-user.html">
                      <i className="ti ti-user-check me-2 ti-sm" />
                      <span className="align-middle">My Profile</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="AccountSetting"
                    >
                      <i className="ti ti-settings me-2 ti-sm" />
                      <span className="align-middle">Settings</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="pages-account-settings-billing.html"
                    >
                      <span className="d-flex align-items-center align-middle">
                        <i className="flex-shrink-0 ti ti-credit-card me-2 ti-sm" />
                        <span className="flex-grow-1 align-middle">
                          Billing
                        </span>
                        <span className="flex-shrink-0 badge badge-center rounded-pill bg-label-danger w-px-20 h-px-20">
                          2
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="pages-faq.html">
                      <i className="ti ti-help me-2 ti-sm" />
                      <span className="align-middle">FAQ</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="pages-pricing.html">
                      <i className="ti ti-currency-dollar me-2 ti-sm" />
                      <span className="align-middle">Pricing</span>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="auth-login-cover.html"
                      target="_blank"
                    >
                      <i className="ti ti-logout me-2 ti-sm" />
                      <span className="align-middle">Log Out</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/*/ User */}
            </ul>
          </div>
          {/* Search Small Screens */}
          <div className="navbar-search-wrapper search-input-wrapper  d-none">
            <input
              type="text"
              className="form-control search-input container-xxl border-0"
              placeholder="Search..."
              aria-label="Search..."
            />
            <i className="ti ti-x ti-sm search-toggler cursor-pointer" />
          </div>
        </nav>
        {/* / Navbar */}
        {/* Content wrapper */}
        <div className="content-wrapper">
          {/* Content */}
          <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="py-3 mb-4">
              <span className="text-muted fw-light">Account Settings /</span>{" "}
              Account
            </h4>
            <div className="row">
              <div className="col-md-12">
                <ul className="nav nav-pills flex-column flex-md-row mb-4">
                  <li className="nav-item">
                    <a className="nav-link active" href="javascript:void(0);">
                      <i className="ti-xs ti ti-users me-1" /> Account
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="AccountSetting"
                    >
                      <i className="ti-xs ti ti-lock me-1" /> Security
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="pages-account-settings-billing.html"
                    >
                      <i className="ti-xs ti ti-file-description me-1" />{" "}
                      Billing &amp; Plans
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="pages-account-settings-notifications.html"
                    >
                      <i className="ti-xs ti ti-bell me-1" /> Notifications
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="pages-account-settings-connections.html"
                    >
                      <i className="ti-xs ti ti-link me-1" /> Connections
                    </a>
                  </li>
                </ul>
                <div className="card mb-4">
                  <h5 className="card-header">Profile Details</h5>
                  {/* Account */}
                  <div className="card-body">
                    <div className="d-flex align-items-start align-items-sm-center gap-4">
                      <img
                        src="src/assets/images/avatars/14.png"
                        alt="user-avatar"
                        className="d-block w-px-100 h-px-100 rounded"
                        id="uploadedAvatar"
                      />
                      <div className="button-wrapper">
                        <label
                          htmlFor="upload"
                          className="btn btn-primary me-2 mb-3"
                          tabIndex={0}
                        >
                          <span className="d-none d-sm-block">
                            Upload new photo
                          </span>
                          <i className="ti ti-upload d-block d-sm-none" />
                          <input
                            type="file"
                            id="upload"
                            className="account-file-input"
                            hidden
                            accept="image/png, image/jpeg"
                          />
                        </label>
                        <button
                          type="button"
                          className="btn btn-label-secondary account-image-reset mb-3"
                        >
                          <i className="ti ti-refresh-dot d-block d-sm-none" />
                          <span className="d-none d-sm-block">Reset</span>
                        </button>
                        <div className="text-muted">
                          Allowed JPG, GIF or PNG. Max size of 800K
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-0" />
                  <div className="card-body">
                    <form
                      id="formAccountSettings"
                      method="GET"
                      onSubmit="return false"
                    >
                      <div className="row">
                        <div className="mb-3 col-md-6">
                          <label htmlFor="firstName" className="form-label">
                            First Name
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="firstName"
                            name="firstName"
                            defaultValue="John"
                            autoFocus
                          />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="lastName" className="form-label">
                            Last Name
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            name="lastName"
                            id="lastName"
                            defaultValue="Doe"
                          />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="email" className="form-label">
                            E-mail
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="email"
                            name="email"
                            defaultValue="john.doe@example.com"
                            placeholder="john.doe@example.com"
                          />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="organization" className="form-label">
                            Organization
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="organization"
                            name="organization"
                            defaultValue="Pixinvent"
                          />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label" htmlFor="phoneNumber">
                            Phone Number
                          </label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text">US (+1)</span>
                            <input
                              type="text"
                              id="phoneNumber"
                              name="phoneNumber"
                              className="form-control"
                              placeholder="202 555 0111"
                            />
                          </div>
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="address" className="form-label">
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            name="address"
                            placeholder="Address"
                          />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="state" className="form-label">
                            State
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="state"
                            name="state"
                            placeholder="California"
                          />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="zipCode" className="form-label">
                            Zip Code
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="zipCode"
                            name="zipCode"
                            placeholder={231465}
                            maxLength={6}
                          />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label" htmlFor="country">
                            Country
                          </label>
                          <select id="country" className="select2 form-select">
                            <option value>Select</option>
                            <option value="Australia">Australia</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Brazil">Brazil</option>
                            <option value="Canada">Canada</option>
                            <option value="China">China</option>
                            <option value="France">France</option>
                            <option value="Germany">Germany</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Japan">Japan</option>
                            <option value="Korea">Korea, Republic of</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Russia">Russian Federation</option>
                            <option value="South Africa">South Africa</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">
                              United Arab Emirates
                            </option>
                            <option value="United Kingdom">
                              United Kingdom
                            </option>
                            <option value="United States">United States</option>
                          </select>
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="language" className="form-label">
                            Language
                          </label>
                          <select id="language" className="select2 form-select">
                            <option value>Select Language</option>
                            <option value="en">English</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                            <option value="pt">Portuguese</option>
                          </select>
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="timeZones" className="form-label">
                            Timezone
                          </label>
                          <select
                            id="timeZones"
                            className="select2 form-select"
                          >
                            <option value>Select Timezone</option>
                            <option value={-12}>
                              (GMT-12:00) International Date Line West
                            </option>
                            <option value={-11}>
                              (GMT-11:00) Midway Island, Samoa
                            </option>
                            <option value={-10}>(GMT-10:00) Hawaii</option>
                            <option value={-9}>(GMT-09:00) Alaska</option>
                            <option value={-8}>
                              (GMT-08:00) Pacific Time (US &amp; Canada)
                            </option>
                            <option value={-8}>
                              (GMT-08:00) Tijuana, Baja California
                            </option>
                            <option value={-7}>(GMT-07:00) Arizona</option>
                            <option value={-7}>
                              (GMT-07:00) Chihuahua, La Paz, Mazatlan
                            </option>
                            <option value={-7}>
                              (GMT-07:00) Mountain Time (US &amp; Canada)
                            </option>
                            <option value={-6}>
                              (GMT-06:00) Central America
                            </option>
                            <option value={-6}>
                              (GMT-06:00) Central Time (US &amp; Canada)
                            </option>
                            <option value={-6}>
                              (GMT-06:00) Guadalajara, Mexico City, Monterrey
                            </option>
                            <option value={-6}>(GMT-06:00) Saskatchewan</option>
                            <option value={-5}>
                              (GMT-05:00) Bogota, Lima, Quito, Rio Branco
                            </option>
                            <option value={-5}>
                              (GMT-05:00) Eastern Time (US &amp; Canada)
                            </option>
                            <option value={-5}>
                              (GMT-05:00) Indiana (East)
                            </option>
                            <option value={-4}>
                              (GMT-04:00) Atlantic Time (Canada)
                            </option>
                            <option value={-4}>
                              (GMT-04:00) Caracas, La Paz
                            </option>
                          </select>
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="currency" className="form-label">
                            Currency
                          </label>
                          <select id="currency" className="select2 form-select">
                            <option value>Select Currency</option>
                            <option value="usd">USD</option>
                            <option value="euro">Euro</option>
                            <option value="pound">Pound</option>
                            <option value="bitcoin">Bitcoin</option>
                          </select>
                        </div>
                      </div>
                      <div className="mt-2">
                        <button type="submit" className="btn btn-primary me-2">
                          Save changes
                        </button>
                        <button
                          type="reset"
                          className="btn btn-label-secondary"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* /Account */}
                </div>
                <div className="card">
                  <h5 className="card-header">Delete Account</h5>
                  <div className="card-body">
                    <div className="mb-3 col-12 mb-0">
                      <div className="alert alert-warning">
                        <h5 className="alert-heading mb-1">
                          Are you sure you want to delete your account?
                        </h5>
                        <p className="mb-0">
                          Once you delete your account, there is no going back.
                          Please be certain.
                        </p>
                      </div>
                    </div>
                    <form id="formAccountDeactivation" onSubmit="return false">
                      <div className="form-check mb-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="accountActivation"
                          id="accountActivation"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="accountActivation"
                        >
                          I confirm my account deactivation
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-danger deactivate-account"
                      >
                        Deactivate Account
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* / Content */}
          {/* Footer */}
          <footer className="content-footer footer bg-footer-theme">
            <div className="container-xxl">
              <div className="footer-container d-flex align-items-center justify-content-between py-2 flex-md-row flex-column">
                <div>
                  © , made with ❤️ by{" "}
                  <a
                    href="https://pixinvent.com"
                    target="_blank"
                    className="footer-link text-primary fw-medium"
                  >
                    Pixinvent
                  </a>
                </div>
                <div className="d-none d-lg-inline-block">
                  <a
                    href="https://themeforest.net/licenses/standard"
                    className="footer-link me-4"
                    target="_blank"
                  >
                    License
                  </a>
                  <a
                    href="https://1.envato.market/pixinvent_portfolio"
                    target="_blank"
                    className="footer-link me-4"
                  >
                    More Themes
                  </a>
                  <a
                    href="https://demos.pixinvent.com/vuexy-html-admin-template/documentation/"
                    target="_blank"
                    className="footer-link me-4"
                  >
                    Documentation
                  </a>
                  <a
                    href="https://pixinvent.ticksy.com/"
                    target="_blank"
                    className="footer-link d-none d-sm-inline-block"
                  >
                    Support
                  </a>
                </div>
              </div>
            </div>
          </footer>
          {/* / Footer */}
          <div className="content-backdrop fade" />
        </div>
        {/* Content wrapper */}
      </div>
      {/* / Layout page */}
    </div>
    {/* Overlay */}
    <div className="layout-overlay layout-menu-toggle" />
    {/* Drag Target Area To SlideIn Menu On Small Screens */}
    <div className="drag-target" />
  </div>
</div>
  );
}
export default Account;
