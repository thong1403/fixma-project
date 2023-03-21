import React from "react";
import logo from "../img/Module Website (2).png";
import "./BlogSale.css";
import logoZalo from "../img/Logo-Zalo-Arc.webp"
import logoFacebook from "../img/Facebook_Logo_(2019).png"

export default function BlogSale() {
  return (
    <div className="container-blog-sale">
      <img src={logo} alt="" className="img-logo" />
      <div className="blog-sale">
        <div className="name-blog-sale-1">
          <h2>Tên Sale/CTV</h2>
          <div className="avata-blog-sale">
            <span>
              <b>Ảnh đại diện</b>
            </span>
          </div>
          <p>Mã sale:</p>
          <p>Đại lý trực thuộc:</p>
          <p>Số điện thoại</p>
        </div>
        <div className="name-blog-sale-2">
          <p>
            <b>Tôi là ai?</b>
          </p>
          <input type="text" placeholder="Giới thiệu bản thân - Sale tự viết" />
          <p>
            <b>Những dự án thành công</b>
          </p>
          <input
            type="text"
            placeholder="Danh sách dự án đã làm - Sale tự viết"
          />
        </div>
        

      </div>
      <button className="btn-share">Chia sẻ</button>
      <div className="container-group">
        <div className="group-zalo">
            <div>
                <img src={logoZalo} alt="" className="logo-zalo" />
            </div>
            <p>Nhóm Zalo <br />hỗ trợ</p>
        </div>
        <div className="group-zalo">
            <div>
                <img src={logoFacebook} alt="" className="logo-zalo" />
            </div>
            <p>Nhóm Facebook <br />hỗ trợ</p>
        </div> <div className="group-zalo">
            <div>
                <img src="https://png.pngtree.com/element_origin_min_pic/17/08/13/c75ffc7eedd6c855d1d986533a31b8dc.jpg" alt="" className="logo-zalo" />
            </div>
            <p>Nhóm Zalo <br />hỗ trợ</p>
        </div> <div className="group-zalo">
            <div>
                <img src={logoZalo} alt="" className="logo-zalo" />
            </div>
            <p>Nhóm Zalo <br />hỗ trợ</p>
        </div>
      </div>
      <p className="invite-friends">Mời bạn bè tham gia làm CTV</p>
    </div>
  );
}
