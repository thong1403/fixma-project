import React from "react";
import Navbar from "../navbar/Navbar";
import "./Homepage.css";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="homePage-container">
        <div className="container-homepage-top">
          <h4>ĐẦU TƯ KHÔNG BIÊN GIỚI</h4>
          <p>
            <b>Xu hướng mới của những nhà đầu tư tiên phong</b>{" "}
            <i class="fa-solid fa-arrow-right"></i>
          </p>
        </div>
        <div className="container-content-home">
          <div className="content-container">
            <h5 className="title-content">Định vị thương hiệu</h5>
            <p>
              Global Living là thương hiệu hàng đầu tại Việt Nam trong lĩnh vực
              tư vấn và phát triển bất động sản cao cấp. Với uy tín và kinh
              nghiệm, chúng tôi đã và đang mang tới cho khách hàng những giải
              pháp đầu tư bất động sản tối ưu tại cả trong và ngoài nước, kết
              hợp với các dịch vụ hỗ trợ định cư độc đáo, giúp khách hàng tiếp
              cận những đặc quyền của công dân toàn cầu. Chúng tôi luôn cam kết
              mang đến sự hài lòng và thành công cho khách hàng trong mỗi giao
              dịch và dự án.
            </p>
          </div>
        </div>
        <div className="container-content-home">
          <div className="content-container">
            <h5 className="title-content">Tầm nhìn</h5>
            <p>
              Global Living định hướng trở thành đơn vị tiên phong trong lĩnh
              vực đầu tư và phát triển bất động sản cao cấp. Với sự tận tâm và
              chuyên nghiệp, chúng tôi luôn đặt mục tiêu mang đến cho khách hàng
              những cơ hội đầu tư đắt giá và tấm thẻ định cư quyền lực, tại
              những quốc gia mà sự tiến bộ và tiềm năng phát triển còn rất lớn.
              Chúng tôi luôn nỗ lực không ngừng để giữ vững được vị thế trong
              tâm trí khách hàng là một đơn vị uy tín với chất lượng dịch vụ
              hàng đầu.
            </p>
          </div>
        </div>
        <div className="container-content-home">
          <div className="content-container">
            <h5 className="title-content">Sứ mệnh</h5>
            <p>
              Sứ mệnh của Global Living là đồng hành cùng khách hàng qua từng
              bước trên hành trình đầu tư bất động sản cao cấp tại các quốc gia
              phát triển. Không chỉ dừng lại ở những sản phẩm đầu tư quốc tế với
              chất lượng vượt trội, chúng tôi còn mong muốn hỗ trợ khách hàng sở
              hữu tấm thẻ định cư quý giá để tận hưởng những lợi ích của một
              công dân toàn cầu. Giúp cho khách hàng hiện thực hóa ước mơ sống
              và làm việc tại một môi trường an toàn, tiện nghi với chất lượng
              cuộc sống đẳng cấp chính là nhiệm vụ của Global Living. Chúng tôi
              tự hào là đối tác đáng tin cậy của khách hàng, và luôn nỗ lực để
              mang đến cho họ sự hài lòng và những trải nghiệm tốt nhất trên con
              đường thành công và thịnh vượng.
            </p>
          </div>
        </div>
        <div className="container-content-home-below">
          <h5 className="title-content">Sản phẩm cố lõi</h5>
          <div className="detail">
            <div className="real-estate">
              <h4>BẤT ĐỘNG SẢN ĐỊNH CƯ HUNGARY</h4>
              <p>
                Chương trình cấp thẻ thường trú nhân Hungary thông qua hình thức
                đầu tư bất động sản. Với mức đầu tư tối thiểu chỉ từ 175k Euro -
                tương đương khoảng 4.6 tỷ VND, Nhà đầu tư sẽ vừa sở hữu tài sản
                nhà đất ở địa thế vàng - Trái tim của Châu Âu, vừa mang lại cho
                cả 3 thế hệ gia đình những đặc quyền vô giá của một công dân
                toàn cầu.
              </p>
              <div className="btn-detail">
                <div className="btn-container">
                  <p>Chi phí làm thẻ</p>
                  <button className="btn-money">1.6 Tỷ đồng</button>
                </div>
                <div>
                  <p>Mức đầu tư tối thiểu</p>
                  <button className="btn-money">4.6 Tỷ đồng</button>
                </div>
                <div>
                  <p>Thời gian dự kiện</p>
                  <button className="btn-money">3 Tháng</button>
                </div>
              </div>
              <p className="find-out-more">
                Tìm hiểu thêm <i class="fa-solid fa-arrow-right"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="container-content-home">
          <div className="content-container-button">
            <h5 className="title-content">Hệ thông phân phối độc quyền</h5>
            <p>
              Tham gia ngay để trở thành Đại lý/Cộng tác viên độc quyền và nhận
              những thông tin, tài liệu đắt giá nhất về thị trường đầu tư bất
              động sản quốc tế.
            </p>
            <p className="register-now">
              Đăng ký ngay <i class="fa-solid fa-arrow-right"></i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
