import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        WEBSITE
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul
          className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style={{ "--bs-scroll-height": "100px" }}
        >
          <li className="nav-item">
            <Link to="/" className="nav-link active">
              Trang chủ
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/bieu-do" className="nav-link">
              Biểu đồ
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gio-hang" className="nav-link">
              Giỏ hàng
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dang-ky" className="nav-link">
              Đăng ký
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dang-nhap" className="nav-link">
              Đăng nhập
            </Link>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Link
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" aria-disabled="true">
              Link
            </a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
);

export default Header;
