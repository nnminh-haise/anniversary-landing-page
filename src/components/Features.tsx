import React from "react";
import feature1 from "../assets/feature-1.jpg";
import feature2 from "../assets/feature-2.jpg";
import feature3 from "../assets/feature-3.jpg";
import "./styles/Features.css";

const Features: React.FC = () => {
  return (
    <section id="features" className="features">
      <h2>Lần đầu gặp, trời xanh, em và sơ mi xanh.</h2>
      <div className="feature-list">
        <div className="feature-item">
          <img src={feature1} alt="Feature 1" />
          <h3>Giang xinh vui trong giáng sinh</h3>
          <p>
            Khoảng thời gian này mình có nhiều nỗi buồn em nhỉ? Bây giờ vẫn vậy
            thôi, nhưng khi viết những dòng này, anh được nhìn lại khi đó, anh
            thấy rất đẹp. Đẹp vì sau tất cả những nước mắt và nỗi buồn mình vẫn
            bên nhau. Nhưng anh cũng rất buồn vì khoảng thời gian đó dài đã để
            lại trong em nhiều điều khó phai. <br />
            Chiếc khăn ấm anh đan không khó, cũng không lâu, nhưng anh nhận ra
            anh chăm chỉ yêu em như thế nào. Anh đặt vào từng mũi đan những giọt
            nước mắt buồn nhưng cũng có những mong muốn và kỉ niệm tươi đẹp của
            anh và em. Chiếc khăn chứa một phần của anh, sẽ thay anh bảo vệ và
            che chở cho em những ngày trời đổi lạnh, chỉ duy nhất và đầu tiên
            dành cho em.
          </p>
        </div>
        <div className="feature-item">
          <img src={feature2} alt="Feature 2" />
          <h3>Em là thiên thần đáng yêu</h3>
          <p>
            Ánh mắt, nụ cười, mùi hương và những hành động cử chỉ của em đều
            khiến anh cảm thấy say đắm. Sự thật là anh nhớ em rất nhiều. Nhớ
            những lúc được em ôm. Nhớ những lúc em gác chân lên đùi. Nhớ những
            lúc em nắm tay. Nhớ những lần em vuốt tóc anh. Nhớ môi em trên môi
            anh. Nhớ lắm ạ.
            <br />
            Anh không biết theo tôn giáo thì thiên thần được định nghĩa như thế
            nào hay phải mang những tính chất gì để có thể trở thành thiên thần.
            Anh thường thấy trên phim ảnh thì phải có cánh, mặc trang phục màu
            trắng. Nhưng khi gặp em thì định nghĩa và hình ảnh đó được tóm gọn
            lại thành em. Anh thích em.
          </p>
        </div>
        <div className="feature-item">
          <img src={feature3} alt="Feature 3" />
          <h3>Bình yên là em</h3>
          <p>
            Khoảng thời gian ngắn ngủi anh được ở cạnh em khi em về lại SG luôn
            là khoảng thời gian bình yên nhất mà anh có trong gần 2 năm vừa qua.
            Có những lúc chúng ta buồn nhau rất nhiều. Thậm chí là đã từng gần
            như dừng lại. Nhưng anh và em cuối cùng cũng vẫn ở bên nhau, tay nắm
            tay, môi kề môi, da chạm da cho đến bây giờ. Với anh những lúc anh
            và em không vui đều là những lúc ác mộng, những lúc anh không thể
            suy nghĩ hay hoạt động gì cả. Nhưng em vẫn là bình yên của anh.
            <br />
            Dẫu cho sau này em và anh trở thành một người như thế nào, anh vẫn
            muốn được ở bên em khi đó. Dù cho mưa giông, bão tố, thảm họa anh
            vẫn muốn được nắm tay em mà cùng trải qua. Anh sẽ là người luôn lắng
            nghe em, cố gắng thấu hiểu những gì em phải chịu đựng và cùng em
            trải qua mọi cung bậc cảm xúc. Anh luôn buồn và tiếc vì không thể
            chạm tới em. Dẫu vậy, anh vẫn muốn được ở bên em vì dù cho bão tố có
            xảy ra, anh vẫn biết anh đang nắm chặt bình yên của anh.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
