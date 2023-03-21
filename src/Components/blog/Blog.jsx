import React from "react";
import logo from "../img/Module Website (2).png";
import "./Blog.css";

export default function Blog() {
  return (
    <div className="container-blog">
      <img src={logo} alt="" className="logo-register" />
      <h4 className="agent-name">Tên đại lý</h4>
      <div className="avatar">
        <p>
          <b>Ảnh đại diện</b>{" "}
        </p>
      </div>
      <div className="agent-introduction">
        <p>Giới thiệu đại lý</p>
        <input type="text" />
      </div>
      <div className="agent-introduction">
        <p>Danh sách nhân viên kinh doanh</p>
        <div className="news-board">
          <span>Bảng thông tin nhân viên</span>
        </div>
      </div>
    </div>
  );
}
