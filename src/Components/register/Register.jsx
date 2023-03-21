import React from "react";
import "./Register.css";
import logo from "../img/Module Website (2).png";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="container-registration-frame">
      <img src={logo} alt="" className="logo-register" />
      <h3>
        BẤT ĐỘNG SẢN ĐỊNH CƯ QUỐC TẾ <br />
        GIẢI PHÁP ĐẦU TƯ KHÔNG BIÊN GIỚI
      </h3>
      <div className="container-register">
        <div className="agent-registration-frame">
          <h4>Đăng ký đại lý</h4>
          <div className="agent-registration">
            <form>
              <div className="input-information">
                <span>Tên đại lý:</span>
                <input type="text" />
              </div>
              <div className="input-information">
                <span>Khu vực:</span>
                <input type="text" />
              </div>
              <div className="input-information">
                <span>Số điện thoại:</span>
                <input type="text" />
              </div>
              <div className="input-information">
                <span>Email:</span>
                <input type="email" />
              </div>
              <div className="input-information">
                <span>Mật khẩu:</span>
                <input type="password" />
              </div>
              <button className="agent-registration-button">Đăng ký</button>
            </form>
          </div>
        </div>
        <div className="agent-registration-frame">
          <h4>Đăng ký CTV/Sale</h4>
          <div className="sign-up-for-sale">
            <form>
              <div className="input-information">
                <span>Họ và tên:</span>
                <input type="text" />
              </div>
              <div className="input-information">
                <span>Khu vực:</span>
                <input type="text" />
              </div>
              <div className="input-information">
                <span>Số điện thoại:</span>
                <input type="text" />
              </div>
              <div className="input-information">
                <span>Khu vực:</span>
                <input type="text" />
              </div>
              <div className="input-information">
                <span>Email:</span>
                <input type="email" />
              </div>
              <div className="input-information">
                <span>Mật khẩu:</span>
                <input type="password" />
              </div>

              <button className="sale-registration-button">Đăng ký</button>
            </form>
          </div>
        </div>
      </div>
      <div className="log-in-now">
        <p>Đã có tài khoản</p>
        <p className="title-login-nows"><Link to="/login">Đăng nhập ngay</Link> </p>
      </div>
    </div>
  );
}
