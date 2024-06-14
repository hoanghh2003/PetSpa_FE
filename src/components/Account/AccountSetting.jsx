import { Link } from "react-router-dom";

function AccountSetting() {
  return (
    <div>
      {/* Core CSS */}
      <link rel="stylesheet" href="src/assets/vendor/css/rtl/core.css" className="template-customizer-core-css" />
      <link rel="stylesheet" href="src/assets/vendor/css/rtl/theme-default.css" className="template-customizer-theme-css" />
      {/* Page CSS */}
      <link rel="stylesheet" href="src/assets/vendor/css/pages/page-account-settings.css" />

      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <div className="layout-page">
            <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
              <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                  <i className="ti ti-menu-2 ti-sm" />
                </a>
              </div>
              <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                <ul className="navbar-nav flex-row align-items-center ms-auto">
                  <li className="nav-item navbar-dropdown dropdown-user dropdown">
                    <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                      <div className="avatar avatar-online">
                        <img src="src/assets/images/avatars/1.png" alt className="h-auto rounded-circle" />
                      </div>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <Link className="dropdown-item" to="/account">
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
                        </Link>
                      </li>
                      <li>
                        <div className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/Pet">
                          <i className="ti ti-user-check me-2 ti-sm" />
                          <span className="align-middle">My Pet</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/Cart">
                          <i className="ti ti-settings me-2 ti-sm" />
                          <span className="align-middle">Cart</span>
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="auth-login-cover.html" target="_blank">
                          <i className="ti ti-logout me-2 ti-sm" />
                          <span className="align-middle">Log Out</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="py-3 mb-4">
                  <span className="ti-xs ti ti-lock me-1"><Link to="/account">Account Settings</Link> /</span> Security
                </h4>
                <div className="row">
                  <div className="col-md-12">
                    <ul className="nav nav-pills flex-column flex-md-row mb-4">
                      <li className="nav-item"><Link className="nav-link" to="/account"><i className="ti-xs ti ti-users me-1" /> Account</Link></li>
                      <li className="nav-item"><a className="nav-link active" href="javascript:void(0);"><i className="ti-xs ti ti-lock me-1" /> Security</a></li>
                    </ul>

                    <div className="card mb-4">
                      <h5 className="card-header">Change Password</h5>
                      <div className="card-body">
                        <form id="formAccountSettings" method="GET" onSubmit={() => false}>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="layout-overlay layout-menu-toggle" />
        <div className="drag-target" />
      </div>
    </div>
  );
}

export default AccountSetting;