
function AccountSetting() {
  return (
    <div>
  {/* =========================================================
* Vuexy - Bootstrap Admin Template | v9.0.0
==============================================================

* Product Page: https://1.envato.market/vuexy_admin
* Created by: Pixinvent
* License: You must have a valid license purchased in order to legally use the theme for your project.
* Copyright Pixinvent (https://pixinvent.com)

=========================================================
 */}
  {/* beautify ignore:start */}
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
  <title>Account settings - Security | Vuexy - Bootstrap Admin Template</title>
  <meta name="description" content="Start your development with a Dashboard for Bootstrap 5" />
  <meta name="keywords" content="dashboard, bootstrap 5 dashboard, bootstrap 5 design, bootstrap 5" />
  {/* Canonical SEO */}
  {/* ? PROD Only: Google Tag Manager (Default ThemeSelection: GTM-5DDHKGP, PixInvent: GTM-5J3LMKC) */}
  {/* End Google Tag Manager */}
  {/* Favicon */}
  <link rel="icon" type="image/x-icon" href="src/assets/images/favicon/favicon.ico" />
  {/* Fonts */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&ampdisplay=swap" rel="stylesheet" />
  {/* Icons */}
  <link rel="stylesheet" href="src/assets/vendor/fonts/fontawesome.css" />
  <link rel="stylesheet" href="src/assets/vendor/fonts/tabler-icons.css" />
  <link rel="stylesheet" href="src/assets/vendor/fonts/flag-icons.css" />
  {/* Core CSS */}
  <link rel="stylesheet" href="src/assets/vendor/css/rtl/core.css" className="template-customizer-core-css" />
  <link rel="stylesheet" href="src/assets/vendor/css/rtl/theme-default.css" className="template-customizer-theme-css" />
  <link rel="stylesheet" href="src/assets/css/demo.css" />
  {/* Vendors CSS */}
  <link rel="stylesheet" href="src/assets/vendor/libs/node-waves/node-waves.css" />
  <link rel="stylesheet" href="src/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
  <link rel="stylesheet" href="src/assets/vendor/libs/typeahead-js/typeahead.css" /> 
  <link rel="stylesheet" href="src/assets/vendor/libs/select2/select2.css" />
  <link rel="stylesheet" href="src/assets/vendor/libs/@form-validation/form-validation.css" />
  {/* Page CSS */}
  <link rel="stylesheet" href="src/assets/vendor/css/pages/page-account-settings.css" />
  {/* Helpers */}
  {/*! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section */}
  {/*? Template customizer: To hide customizer set displayCustomizer value false in config.js.  */}
  {/*? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  */}
  {/* ?PROD Only: Google Tag Manager (noscript) (Default ThemeSelection: GTM-5DDHKGP, PixInvent: GTM-5J3LMKC) */}
  <noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-5DDHKGP"
    height="0"
    width="0"
    style={{ display: "none", visibility: "hidden" }}
  ></iframe>
</noscript>
  {/* End Google Tag Manager (noscript) */}
  {/* Layout wrapper */}
  <div className="layout-wrapper layout-content-navbar  ">
    <div className="layout-container">
      {/* Layout container */}
      <div className="layout-page">
        {/* Navbar */}
        <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
          <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0   d-xl-none ">
            <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
              <i className="ti ti-menu-2 ti-sm" />
            </a>
          </div>
          <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
            {/* Search */}
            <div className="navbar-nav align-items-center">
              <div className="nav-item navbar-search-wrapper mb-0">
                <a className="nav-item nav-link search-toggler d-flex align-items-center px-0" href="javascript:void(0);">
                  <i className="ti ti-search ti-md me-2" />
                  <span className="d-none d-md-inline-block text-muted">Search (Ctrl+/)</span>
                </a>
              </div>
            </div>
            {/* /Search */}
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              {/* Language */}
              <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
                <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                  <i className="ti ti-language rounded-circle ti-md" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);" data-language="en" data-text-direction="ltr">
                      <span className="align-middle">English</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);" data-language="fr" data-text-direction="ltr">
                      <span className="align-middle">French</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);" data-language="ar" data-text-direction="rtl">
                      <span className="align-middle">Arabic</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);" data-language="de" data-text-direction="ltr">
                      <span className="align-middle">German</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/*/ Language */}
              {/* Style Switcher */}
              <li className="nav-item dropdown-style-switcher dropdown me-2 me-xl-0">
                <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                  <i className="ti ti-md" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-styles">
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);" data-theme="light">
                      <span className="align-middle"><i className="ti ti-sun me-2" />Light</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);" data-theme="dark">
                      <span className="align-middle"><i className="ti ti-moon me-2" />Dark</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:void(0);" data-theme="system">
                      <span className="align-middle"><i className="ti ti-device-desktop me-2" />System</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* / Style Switcher*/}
              {/* Quick links  */}
              <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
                <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                  <i className="ti ti-layout-grid-add ti-md" />
                </a>
                <div className="dropdown-menu dropdown-menu-end py-0">
                  <div className="dropdown-menu-header border-bottom">
                    <div className="dropdown-header d-flex align-items-center py-3">
                      <h5 className="text-body mb-0 me-auto">Shortcuts</h5>
                      <a href="javascript:void(0)" className="dropdown-shortcuts-add text-body" data-bs-toggle="tooltip" data-bs-placement="top" title="Add shortcuts"><i className="ti ti-sm ti-apps" /></a>
                    </div>
                  </div>
                  <div className="dropdown-shortcuts-list scrollable-container">
                    <div className="row row-bordered overflow-visible g-0">
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                          <i className="ti ti-calendar fs-4" />
                        </span>
                        <a href="app-calendar.html" className="stretched-link">Calendar</a>
                        <small className="text-muted mb-0">Appointments</small>
                      </div>
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                          <i className="ti ti-file-invoice fs-4" />
                        </span>
                        <a href="app-invoice-list.html" className="stretched-link">Invoice App</a>
                        <small className="text-muted mb-0">Manage Accounts</small>
                      </div>
                    </div>
                    <div className="row row-bordered overflow-visible g-0">
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                          <i className="ti ti-users fs-4" />
                        </span>
                        <a href="app-user-list.html" className="stretched-link">User App</a>
                        <small className="text-muted mb-0">Manage Users</small>
                      </div>
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                          <i className="ti ti-lock fs-4" />
                        </span>
                        <a href="app-access-roles.html" className="stretched-link">Role Management</a>
                        <small className="text-muted mb-0">Permission</small>
                      </div>
                    </div>
                    <div className="row row-bordered overflow-visible g-0">
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                          <i className="ti ti-chart-bar fs-4" />
                        </span>
                        <a href="index.html" className="stretched-link">Dashboard</a>
                        <small className="text-muted mb-0">User Profile</small>
                      </div>
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                          <i className="ti ti-settings fs-4" />
                        </span>
                        <a href="account" className="stretched-link">Setting</a>
                        <small className="text-muted mb-0">Account Settings</small>
                      </div>
                    </div>
                    <div className="row row-bordered overflow-visible g-0">
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                          <i className="ti ti-help fs-4" />
                        </span>
                        <a href="pages-faq.html" className="stretched-link">FAQs</a>
                        <small className="text-muted mb-0">FAQs &amp; Articles</small>
                      </div>
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                          <i className="ti ti-square fs-4" />
                        </span>
                        <a href="modal-examples.html" className="stretched-link">Modals</a>
                        <small className="text-muted mb-0">Useful Popups</small>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* Quick links */}
              {/* Notification */}
              <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1">
                <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                  <i className="ti ti-bell ti-md" />
                  <span className="badge bg-danger rounded-pill badge-notifications">5</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end py-0">
                  <li className="dropdown-menu-header border-bottom">
                    <div className="dropdown-header d-flex align-items-center py-3">
                      <h5 className="text-body mb-0 me-auto">Notification</h5>
                      <a href="javascript:void(0)" className="dropdown-notifications-all text-body" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark all as read"><i className="ti ti-mail-opened fs-4" /></a>
                    </div>
                  </li>
                  <li className="dropdown-notifications-list scrollable-container">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item list-group-item-action dropdown-notifications-item">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img src="src/assets/images/avatars/1.png" alt className="h-auto rounded-circle" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Congratulation Lettie 🎉</h6>
                            <p className="mb-0">Won the monthly best seller gold badge</p>
                            <small className="text-muted">1h ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                            <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="ti ti-x" /></a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <span className="avatar-initial rounded-circle bg-label-danger">CF</span>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Charles Franklin</h6>
                            <p className="mb-0">Accepted your connection</p>
                            <small className="text-muted">12hr ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                            <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="ti ti-x" /></a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img src="src/assets/images/avatars/2.png" alt className="h-auto rounded-circle" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">New Message ✉️</h6>
                            <p className="mb-0">You have new message from Natalie</p>
                            <small className="text-muted">1h ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                            <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="ti ti-x" /></a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <span className="avatar-initial rounded-circle bg-label-success"><i className="ti ti-shopping-cart" /></span>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Whoo! You have new order 🛒 </h6>
                            <p className="mb-0">ACME Inc. made new order $1,154</p>
                            <small className="text-muted">1 day ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                            <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="ti ti-x" /></a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img src="src/assets/images/avatars/9.png" alt className="h-auto rounded-circle" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Application has been approved 🚀 </h6>
                            <p className="mb-0">Your ABC project application has been approved.</p>
                            <small className="text-muted">2 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                            <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="ti ti-x" /></a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <span className="avatar-initial rounded-circle bg-label-success"><i className="ti ti-chart-pie" /></span>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Monthly report is generated</h6>
                            <p className="mb-0">July monthly financial report is generated </p>
                            <small className="text-muted">3 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                            <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="ti ti-x" /></a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img src="src/assets/images/avatars/5.png" alt className="h-auto rounded-circle" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Send connection request</h6>
                            <p className="mb-0">Peter sent you connection request</p>
                            <small className="text-muted">4 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                            <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="ti ti-x" /></a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img src="src/assets/images/avatars/6.png" alt className="h-auto rounded-circle" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">New message from Jane</h6>
                            <p className="mb-0">Your have new message from Jane</p>
                            <small className="text-muted">5 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                            <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="ti ti-x" /></a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <span className="avatar-initial rounded-circle bg-label-warning"><i className="ti ti-alert-triangle" /></span>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">CPU is running high</h6>
                            <p className="mb-0">CPU Utilization Percent is currently at 88.63%,</p>
                            <small className="text-muted">5 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                            <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="ti ti-x" /></a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-menu-footer border-top">
                    <a href="javascript:void(0);" className="dropdown-item d-flex justify-content-center text-primary p-2 h-px-40 mb-1 align-items-center">
                      View all notifications
                    </a>
                  </li>
                </ul>
              </li>
              {/*/ Notification */}
              {/* User */}
              <li className="nav-item navbar-dropdown dropdown-user dropdown">
                <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                  <div className="avatar avatar-online">
                    <img src="src/assets/images/avatars/1.png" alt className="h-auto rounded-circle" />
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="account">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar avatar-online">
                            <img src="src/assets/images/avatars/1.png" alt className="h-auto rounded-circle" />
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
                    <a className="dropdown-item" href="account">
                      <i className="ti ti-settings me-2 ti-sm" />
                      <span className="align-middle">Settings</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="pages-account-settings-billing.html">
                      <span className="d-flex align-items-center align-middle">
                        <i className="flex-shrink-0 ti ti-credit-card me-2 ti-sm" />
                        <span className="flex-grow-1 align-middle">Billing</span>
                        <span className="flex-shrink-0 badge badge-center rounded-pill bg-label-danger w-px-20 h-px-20">2</span>
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
                    <a className="dropdown-item" href="auth-login-cover.html" target="_blank">
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
            <input type="text" className="form-control search-input container-xxl border-0" placeholder="Search..." aria-label="Search..." />
            <i className="ti ti-x ti-sm search-toggler cursor-pointer" />
          </div>
        </nav>
        {/* / Navbar */}
        {/* Content wrapper */}
        <div className="content-wrapper">
          {/* Content */}
          <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="py-3 mb-4">
              <span className="text-muted fw-light">Account Settings /</span> Security
            </h4>
            <div className="row">
              <div className="col-md-12">
                <ul className="nav nav-pills flex-column flex-md-row mb-4">
                  <li className="nav-item"><a className="nav-link" href="account"><i className="ti-xs ti ti-users me-1" /> Account</a></li>
                  <li className="nav-item"><a className="nav-link active" href="javascript:void(0);"><i className="ti-xs ti ti-lock me-1" /> Security</a></li>
                  <li className="nav-item"><a className="nav-link" href="pages-account-settings-billing.html"><i className="ti-xs ti ti-file-description me-1" /> Billing &amp; Plans</a></li>
                  <li className="nav-item"><a className="nav-link" href="pages-account-settings-notifications.html"><i className="ti-xs ti ti-bell me-1" /> Notifications</a></li>
                  <li className="nav-item"><a className="nav-link" href="pages-account-settings-connections.html"><i className="ti-xs ti ti-link me-1" /> Connections</a></li>
                </ul>
                {/* Change Password */}
                <div className="card mb-4">
                  <h5 className="card-header">Change Password</h5>
                  <div className="card-body">
                    <form id="formAccountSettings" method="GET" onSubmit="return false">
                      <div className="row">
                        <div className="mb-3 col-md-6 form-password-toggle">
                          <label className="form-label" htmlFor="currentPassword">Current Password</label>
                          <div className="input-group input-group-merge">
                            <input className="form-control" type="password" name="currentPassword" id="currentPassword" placeholder="············" />
                            <span className="input-group-text cursor-pointer"><i className="ti ti-eye-off" /></span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="mb-3 col-md-6 form-password-toggle">
                          <label className="form-label" htmlFor="newPassword">New Password</label>
                          <div className="input-group input-group-merge">
                            <input className="form-control" type="password" id="newPassword" name="newPassword" placeholder="············" />
                            <span className="input-group-text cursor-pointer"><i className="ti ti-eye-off" /></span>
                          </div>
                        </div>
                        <div className="mb-3 col-md-6 form-password-toggle">
                          <label className="form-label" htmlFor="confirmPassword">Confirm New Password</label>
                          <div className="input-group input-group-merge">
                            <input className="form-control" type="password" name="confirmPassword" id="confirmPassword" placeholder="············" />
                            <span className="input-group-text cursor-pointer"><i className="ti ti-eye-off" /></span>
                          </div>
                        </div>
                        <div className="col-12 mb-4">
                          <h6>Password Requirements:</h6>
                          <ul className="ps-3 mb-0">
                            <li className="mb-1">Minimum 8 characters long - the more, the better</li>
                            <li className="mb-1">At least one lowercase character</li>
                            <li>At least one number, symbol, or whitespace character</li>
                          </ul>
                        </div>
                        <div>
                          <button type="submit" className="btn btn-primary me-2">Save changes</button>
                          <button type="reset" className="btn btn-label-secondary">Cancel</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/*/ Change Password */}
                {/* Two-steps verification */}
                <div className="card mb-4">
                  <h5 className="card-header">Two-steps verification</h5>
                  <div className="card-body">
                    <h5 className="mb-3">Two factor authentication is not enabled yet.</h5>
                    <p className="w-75">Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.
                      <a href="javascript:void(0);">Learn more.</a>
                    </p>
                    <button className="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#enableOTP">Enable two-factor authentication</button>
                  </div>
                </div>
                {/* Modal */}
                {/* Enable OTP Modal */}
                <div className="modal fade" id="enableOTP" tabIndex={-1} aria-hidden="true">
                  <div className="modal-dialog modal-simple modal-enable-otp modal-dialog-centered">
                    <div className="modal-content p-3 p-md-5">
                      <div className="modal-body">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        <div className="text-center mb-4">
                          <h3 className="mb-2">Enable One Time Password</h3>
                          <p>Verify Your Mobile Number for SMS</p>
                        </div>
                        <p>Enter your mobile phone number with country code and we will send you a verification code.</p>
                        <form id="enableOTPForm" className="row g-3" onSubmit="return false">
                          <div className="col-12">
                            <label className="form-label" htmlFor="modalEnableOTPPhone">Phone Number</label>
                            <div className="input-group">
                              <span className="input-group-text">US (+1)</span>
                              <input type="text" id="modalEnableOTPPhone" name="modalEnableOTPPhone" className="form-control phone-number-otp-mask" placeholder="202 555 0111" />
                            </div>
                          </div>
                          <div className="col-12">
                            <button type="submit" className="btn btn-primary me-sm-3 me-1">Submit</button>
                            <button type="reset" className="btn btn-label-secondary" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/ Enable OTP Modal */}
                {/* /Modal */}
                {/*/ Two-steps verification */}
                {/* Create an API key */}
                <div className="card mb-4">
                  <h5 className="card-header">Create an API key</h5>
                  <div className="row">
                    <div className="col-md-5 order-md-0 order-1">
                      <div className="card-body">
                        <form id="formAccountSettingsApiKey" method="GET" onSubmit="return false">
                          <div className="row">
                            <div className="mb-3 col-12">
                              <label htmlFor="apiAccess" className="form-label">Choose the Api key type you want to create</label>
                              <select id="apiAccess" className="select2 form-select">
                                <option value>Choose Key Type</option>
                                <option value="full">Full Control</option>
                                <option value="modify">Modify</option>
                                <option value="read-execute">Read &amp; Execute</option>
                                <option value="folders">List Folder Contents</option>
                                <option value="read">Read Only</option>
                                <option value="read-write">Read &amp; Write</option>
                              </select>
                            </div>
                            <div className="mb-3 col-12">
                              <label htmlFor="apiKey" className="form-label">Name the API key</label>
                              <input type="text" className="form-control" id="apiKey" name="apiKey" placeholder="Server Key 1" />
                            </div>
                            <div className="col-12">
                              <button type="submit" className="btn btn-primary me-2 d-grid w-100">Create Key</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-7 order-md-1 order-0">
                      <div className="text-center mt-4 mx-3 mx-md-0">
                        <img src="src/assets/images/illustrations/girl-with-laptop.png" className="img-fluid" alt="Api Key Image" width={202} />
                      </div>
                    </div>
                  </div>
                </div>
                {/*/ Create an API key */}
                {/* API Key List & Access */}
                <div className="card mb-4">
                  <h5 className="card-header">API Key List &amp; Access</h5>
                  <div className="card-body">
                    <p>An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing.</p>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="bg-lighter rounded p-3 mb-3 position-relative">
                          <div className="dropdown api-key-actions">
                            <a className="btn dropdown-toggle text-muted hide-arrow p-0" data-bs-toggle="dropdown"><i className="ti ti-dots-vertical ti-sm" /></a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a href="javascript:;" className="dropdown-item"><i className="ti ti-pencil me-2" />Edit</a>
                              <a href="javascript:;" className="dropdown-item"><i className="ti ti-trash me-2" />Delete</a>
                            </div>
                          </div>
                          <div className="d-flex align-items-center mb-3">
                            <h4 className="mb-0 me-3">Server Key 1</h4>
                            <span className="badge bg-label-primary">Full Access</span>
                          </div>
                          <div className="d-flex align-items-center mb-3">
                            <p className="me-2 mb-0 fw-medium">23eaf7f0-f4f7-495e-8b86-fad3261282ac</p>
                            <span className="text-muted cursor-pointer"><i className="ti ti-copy ti-sm" /></span>
                          </div>
                          <span className="text-muted">Created on 28 Apr 2021, 18:20 GTM+4:10</span>
                        </div>
                        <div className="bg-lighter rounded p-3 position-relative mb-3">
                          <div className="dropdown api-key-actions">
                            <a className="btn dropdown-toggle text-muted hide-arrow p-0" data-bs-toggle="dropdown"><i className="ti ti-dots-vertical ti-sm" /></a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a href="javascript:;" className="dropdown-item"><i className="ti ti-pencil me-2" />Edit</a>
                              <a href="javascript:;" className="dropdown-item"><i className="ti ti-trash me-2" />Delete</a>
                            </div>
                          </div>
                          <div className="d-flex align-items-center mb-3">
                            <h4 className="mb-0 me-3">Server Key 2</h4>
                            <span className="badge bg-label-primary">Read Only</span>
                          </div>
                          <div className="d-flex align-items-center mb-3">
                            <p className="me-2 mb-0 fw-medium">bb98e571-a2e2-4de8-90a9-2e231b5e99</p>
                            <span className="text-muted cursor-pointer"><i className="ti ti-copy ti-sm" /></span>
                          </div>
                          <span className="text-muted">Created on 12 Feb 2021, 10:30 GTM+2:30</span>
                        </div>
                        <div className="bg-lighter rounded p-3 position-relative">
                          <div className="dropdown api-key-actions">
                            <a className="btn dropdown-toggle text-muted hide-arrow p-0" data-bs-toggle="dropdown"><i className="ti ti-dots-vertical ti-sm" /></a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a href="javascript:;" className="dropdown-item"><i className="ti ti-pencil me-2" />Edit</a>
                              <a href="javascript:;" className="dropdown-item"><i className="ti ti-trash me-2" />Delete</a>
                            </div>
                          </div>
                          <div className="d-flex align-items-center mb-3">
                            <h4 className="mb-0 me-3">Server Key 3</h4>
                            <span className="badge bg-label-primary">Full Access</span>
                          </div>
                          <div className="d-flex align-items-center mb-3">
                            <p className="me-2 mb-0 fw-medium">2e915e59-3105-47f2-8838-6e46bf83b711</p>
                            <span className="text-muted cursor-pointer"><i className="ti ti-copy ti-sm" /></span>
                          </div>
                          <span className="text-muted">Created on 28 Dec 2020, 12:21 GTM+4:10</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/ API Key List & Access */}
                {/* Recent Devices */}
                <div className="card mb-4">
                  <h5 className="card-header">Recent Devices</h5>
                  <div className="table-responsive">
                    <table className="table border-top">
                      <thead>
                        <tr>
                          <th className="text-truncate">Browser</th>
                          <th className="text-truncate">Device</th>
                          <th className="text-truncate">Location</th>
                          <th className="text-truncate">Recent Activities</th>
                        </tr>
                      </thead>
                      <tbody className="table-border-bottom-0">
                        <tr>
                          <td className="text-truncate"><i className="ti ti-brand-windows text-info me-2 ti-sm" /> <span className="fw-medium">Chrome on Windows</span></td>
                          <td className="text-truncate">HP Spectre 360</td>
                          <td className="text-truncate">Switzerland</td>
                          <td className="text-truncate">10, July 2021 20:07</td>
                        </tr>
                        <tr>
                          <td className="text-truncate"><i className="ti ti-device-mobile text-danger me-2 ti-sm" /> <span className="fw-medium">Chrome on iPhone</span></td>
                          <td className="text-truncate">iPhone 12x</td>
                          <td className="text-truncate">Australia</td>
                          <td className="text-truncate">13, July 2021 10:10</td>
                        </tr>
                        <tr>
                          <td className="text-truncate"><i className="ti ti-brand-android text-success me-2 ti-sm" /> <span className="fw-medium">Chrome on Android</span></td>
                          <td className="text-truncate">Oneplus 9 Pro</td>
                          <td className="text-truncate">Dubai</td>
                          <td className="text-truncate">14, July 2021 15:15</td>
                        </tr>
                        <tr>
                          <td className="text-truncate"><i className="ti ti-brand-apple me-2 ti-sm" /> <span className="fw-medium">Chrome on MacOS</span></td>
                          <td className="text-truncate">Apple iMac</td>
                          <td className="text-truncate">India</td>
                          <td className="text-truncate">16, July 2021 16:17</td>
                        </tr>
                        <tr>
                          <td className="text-truncate"><i className="ti ti-brand-windows text-info me-2 ti-sm" /> <span className="fw-medium">Chrome on Windows</span></td>
                          <td className="text-truncate">HP Spectre 360</td>
                          <td className="text-truncate">Switzerland</td>
                          <td className="text-truncate">20, July 2021 21:01</td>
                        </tr>
                        <tr className="border-transparent">
                          <td className="text-truncate"><i className="ti ti-brand-android text-success me-2 ti-sm" /> <span className="fw-medium">Chrome on Android</span></td>
                          <td className="text-truncate">Oneplus 9 Pro</td>
                          <td className="text-truncate">Dubai</td>
                          <td className="text-truncate">21, July 2021 12:22</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/*/ Recent Devices */}
              </div>
            </div>
          </div>
          {/* / Content */}
          {/* Footer */}
          <footer className="content-footer footer bg-footer-theme">
            <div className="container-xxl">
              <div className="footer-container d-flex align-items-center justify-content-between py-2 flex-md-row flex-column">
                <div>
                  © , made with ❤️ by <a href="https://pixinvent.com" target="_blank" className="footer-link text-primary fw-medium">Pixinvent</a>
                </div>
                <div className="d-none d-lg-inline-block">
                  <a href="https://themeforest.net/licenses/standard" className="footer-link me-4" target="_blank">License</a>
                  <a href="https://1.envato.market/pixinvent_portfolio" target="_blank" className="footer-link me-4">More Themes</a>
                  <a href="https://demos.pixinvent.com/vuexy-html-admin-template/documentation/" target="_blank" className="footer-link me-4">Documentation</a>
                  <a href="https://pixinvent.ticksy.com/" target="_blank" className="footer-link d-none d-sm-inline-block">Support</a>
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

export default AccountSetting