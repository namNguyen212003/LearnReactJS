import React from "react";
import PropTypes from "prop-types";

const Footer = () => {
  return (
    <div className="container-fluid">
      <h2 className="text-center mt-3">Footer</h2>
      <svg style={{ display: "none" }}>
        <symbol id="twitter" viewBox="0 0 16 16">
          <path d="M5.026 15c6.038 0 9.341-5 9.341-9.334 0-.14 0-.282-.006-.423A6.68 6.68 0 0 0 16 3.542a6.573 6.573 0 0 1-1.889.518 3.281 3.281 0 0 0 1.444-1.816 6.557 6.557 0 0 1-2.084.797A3.28 3.28 0 0 0 7.88 6.033a9.325 9.325 0 0 1-6.766-3.429 3.28 3.28 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.28 3.28 0 0 0 2.632 3.217 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.059 3.283 3.283 0 0 0 3.067 2.28A6.588 6.588 0 0 1 0 13.557a9.29 9.29 0 0 0 5.031 1.472" />
        </symbol>
        <symbol id="instagram" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 0 0-2.67.46A8.11 8.11 0 0 0 0 8c0 1.78.56 3.45 1.5 4.8.38.54.83 1.03 1.33 1.45.5.42 1.06.8 1.66 1.13.6.33 1.25.62 1.92.85A8 8 0 0 0 16 8a8 8 0 0 0-8-8zM8 13a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
        </symbol>
        <symbol id="facebook" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.93 2.84 7.2 6.58 7.88v-5.56H4.64V8H6.58V6.41c0-1.92 1.14-3 2.88-3 .84 0 1.72.15 1.72.15v1.88H9.68c-.93 0-1.23.57-1.23 1.15V8h2.11l-.34 2.32H8.44v5.56C12.16 15.2 16 11.93 16 8c0-4.42-3.58-8-8-8z" />
        </symbol>
      </svg>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2024 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <svg className="bi" width="24" height="24">
                Twitter
                <use xlinkHref="#twitter" />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#instagram" />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#facebook" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Footer.propTypes = {

// }; ko can

export default Footer;
