import { Link } from "react-router-dom";

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
            <ul className="navbar-nav flex-row align-items-center ms-auto">
            
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
                    <Link
                      className="dropdown-item"
                      to="/Account"
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
                    </Link>
                  </li>
                  <li>
                    <div className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/pet">
                      <i className="ti ti-user-check me-2 ti-sm" />
                      <span className="align-middle">My Pet</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/Cart"
                    >
                      <i className="ti ti-settings me-2 ti-sm" />
                      <span className="align-middle">Cart</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/logout"
                      target="_blank"
                    >
                      <i className="ti ti-logout me-2 ti-sm" />
                      <span className="align-middle">Log Out</span>
                    </Link>
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
                    <Link
                      className="nav-link"
                      to="/AccountSetting"
                    >
                      <i className="ti-xs ti ti-lock me-1" /> Security
                    </Link>
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
                          <label className="form-label" htmlFor="phoneNumber">
                            Phone Number
                          </label>
                          <div className="input-group input-group-merge">
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
