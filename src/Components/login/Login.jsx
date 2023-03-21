import React from "react";
import logo from "../img/Module Website (2).png";
import "./Login.css";

export default function Login() {
  return (
    <div className="container-registration-frame-login">
      <img src={logo} alt="" className="logo-register" />
      <h3 className="login-title-content-1">
        BẤT ĐỘNG SẢN ĐỊNH CƯ QUỐC TẾ <br />
        GIẢI PHÁP ĐẦU TƯ KHÔNG BIÊN GIỚI
      </h3> 
      <h3 className="title-login">Đăng nhập</h3>
      <div className="container-login-2">
        <div className="container-login-framer-1">
          <h4>Đại lý</h4>
          <div className="agent-registration">
            <form>
              <div className="input-information">
                <span>Tên đại lý:</span>
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
              <button className="btn-button-login-1">Đăng nhập</button>
            </form>
          </div>
        </div>
        <div className="container-login-framer-2">
          <h4> CTV/Sale</h4>
          <div className="sign-up-for-sale">
            <form>
              <div className="input-information">
                <span>Họ và tên:</span>
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

              <button className="btn-button-login-2">Đăng nhập</button>
            </form>
          </div>
        </div>
      </div>
      <div className="log-in-now-2">
        <p>Chưa có tài khoản?</p>
        <p className="title-login-nows">Đăng ký ngay</p>
      </div>
    </div>
  );
}
