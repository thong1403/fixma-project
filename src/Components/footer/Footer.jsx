import React from "react";
import logo from "../../img/Module Website (2).png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="container-footer">
      <img src={logo} alt="" className="logo-footer" />

      <div className="information-for-each-area">
        <h5>
          CÔNG TY CỔ PHẦN GLOBAL LIVING <br />
          Hotline: 0931626909
        </h5>
      </div>
      <div className="information-for-each-area">
        <h5>Văn phòng Hà Nội</h5>
        <p>
          TOONG TRÀNG THI <br /> Số 8 Tràng Thi <br /> Hàng Trống <br /> Quận
          Hoàn Kiếm <br /> HÀ NỘI
        </p>
      </div>
      <div className="information-for-each-area">
        <h5>Văn phòng Nha Trang</h5>
        <p>
          COWORK GOLD COAST <br /> Tầng 9, Toà nhà Gold Coast <br /> Số 1 Trần
          Hưng Đạo, P. Lộc Thọ, <br /> TP NHA TRANG
        </p>
      </div>
      <div className="information-for-each-area">
        <h5>Văn phòng Thành phố Hồ Chí Minh</h5>
        <p>
          SUNWAH INNOVATIONS Tầng 6 - Tháp Golden <br /> Toà nhà Sunwah Pearl{" "}
          <br /> 90 Nguyễn Hữu Cảnh <br /> Phường 2, Quận Bình Thạnh <br /> TP
          HỒ CHÍ MINH
        </p>
      </div>
    </div>
  );
}
