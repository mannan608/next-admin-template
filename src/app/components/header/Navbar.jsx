import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar-wrapper">
        <nav className="navbar h-100">
          <div className="navbar-left d-flex align-items-center gap-3">
            <div className="navbar-brand d-flex align-items-center gap-5 m-0">
              <div className="mobile-nav-toggler">
                <i className="fa-solid fa-bars" />
              </div>
              <div className="vertical-menu-btn">
                <img src="assets/images/icon/hamburger.svg" alt="" />
              </div>
              <div className="search-box">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Every Things"
                  id="searchInput"
                />
              </div>
            </div>
          </div>
          <div className="navbar-right  d-flex align-items-center">
            <div className="navbar-action d-flex gap-3">
              <div className="pos d-flex align-items-center gap-3">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-md"
                >
                  <i className="fa-solid fa-plus" />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-md"
                >
                  <img
                    src="assets/images/icon/shopping_bag.svg"
                    alt=""
                    className="w-auto h-auto me-1"
                  />
                  POS SALE
                </button>
              </div>

              <div className="notifications position-relative">
                <div className="action-link position-relative ">
                  <img
                    src="assets/images/icon/nav_notification_icon.svg"
                    alt=""
                  />
                  <span className="badge text-bg-danger">4</span>
                </div>
              </div>
              <div className="profile position-relative">
                <div className="action-link ">
                  <img
                    src="assets/images/user/user.png"
                    alt=""
                    className="rounded-circle"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
