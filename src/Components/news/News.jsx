import React from "react";
import Navbar from "../navbar/Navbar";
import "./News.css"

export default function News() {
  return (
    <div>
      <Navbar />
      <div className="news-btn-title">
        <div className="container-new-button">
          <button>Ảnh và tiêu đề tin</button>
          <p>Mô tả ngắn gọn nội dung</p>
        </div>
        <div className="container-new-button">
          <button>Ảnh và tiêu đề tin</button>
          <p>Mô tả ngắn gọn nội dung</p>
        </div>
      </div>
    </div>
  );
}
