import React from "react";
import "./Navbar.css";
import logo from "../../img/Module Website (2).png";

export default function Navbar() {
  return (
    <div className="container-navbar">
      <div>
        <div className="container-top-navbar">
          <span className="top-navbar-title">Hotline</span>
          <span className="top-navbar-title">Zalo</span>
          <span className="top-navbar-title">Facebook</span>
          <span className="top-navbar-title">Youtobe</span>
        </div>
        <div className="container-img-logo">
          <img src={logo} alt="" className="logo-img" />
          <div className="container-button">
            <button className="btn-navbar"><b>Về Global Living</b> </button>
            <button className="btn-navbar"><b>Sản phẩm đầu tư</b>  </button>
            <button className="btn-navbar"><b>Tin tức</b> </button>
            <button className="btn-navbar"><b>Tài liệu bán hàng</b> </button>
            <button className="btn-navbar"><b>Đăng nhập Đại lý/ CTV</b> </button>
          </div>
        </div>
      </div>
    </div>
  );
}
