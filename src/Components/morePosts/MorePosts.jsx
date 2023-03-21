import React from "react";
import Navbar from "./../navbar/Navbar";
import "./MorePosts.css";

export default function MorePosts() {
  return (
    <div>
      <Navbar />
      <div className="article-title">
        <input
          type="text"
          placeholder="Tiêu đề bài viết"
          className="input-article-title"
        />
      </div>
      <div className="post-date">
        <h5 className="title-content">
          Ngày đăng <br />
          các mục chính của bài viết
        </h5>
        <p>(Nhấn vào sẽ kéo tới các mục chính đó)</p>
      </div>
      <div className="section-name">
        <h5 className="title-content">Tên mục</h5>
        <input type="text" placeholder="Nội dung" className="input-content" />
      </div>
      <div className="related-news">
        <h5 className="title-content">Tin tức liên quan</h5>
        <div className="container-input">
          <input
            type="text"
            placeholder="Tiêu đề tin"
            className="news-headlines"
          />
          <input
            type="text"
            placeholder="Tiêu đề tin"
            className="news-headlines"
          />
          <input
            type="text"
            placeholder="Tiêu đề tin"
            className="news-headlines"
          />
          <input
            type="text"
            placeholder="Tiêu đề tin"
            className="news-headlines"
          />
        </div>
      </div>
    </div>
  );
}
