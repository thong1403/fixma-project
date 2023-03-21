import React from "react";
import logo from "../img/Module Website (2).png";
import "./Mail.css"

export default function Mail() {
  return (
    <div className="container-mail">
      <img src={logo} alt="" className="logo-mail" />
      <p className="title-mail">
        BẤT ĐỘNG SẢN ĐỊNH CƯ QUỐC TẾ <br />
        GIẢI PHÁP ĐẦU TƯ KHÔNG BIÊN GIỚI
      </p>
      <div className="container-success-content">
        <p className="Sign-Up-Success">Đăng ký thành công</p>
        <p className="content-title-mail">Global Living sẽ liên hệ để xác nhận <br /> trong thời gian sớm nhất</p>
        <p className="learn-project">Tìm hiểu thêm thông tin dự án <i class="fa-solid fa-arrow-right"></i> </p>
        <p className="learn-project">Xem tài liệu bán hàng <i class="fa-solid fa-arrow-right"></i></p>
      </div>
    </div>
  );
}
