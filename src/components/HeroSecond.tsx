import React from "react";
import heroImage from "../assets/hero-2.jpg";
import "./styles/HeroSecond.css";

const HeroSecond: React.FC = () => {
  return (
    <section
      className="hero-second"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <p>
        Anh biết đọc đến đây em sẽ thấy anh sến nhiều lắm. Nhưng ba tấm hình anh
        chọn ở trên là đại diện cho những suy nghĩ của anh dành cho em, việc này
        rất khó vì hình nào anh cũng thích cả. Kỉ niệm là để nhìn lại, dù cho là
        vui hay buồn đúng không em. Cảm ơn em bé của anh đã đi cùng anh đến bây
        giờ. 600 ngày là một con số không nhỏ cũng không quá dài. Anh không mong
        gì hơn ngoài việc có thể đi cùng em thêm thật lâu thật lâu. Tham lam mà
        nói là vậy, nhưng anh cũng rất biết ơn vì ngày hôm nay chúng ta bình yên
        và ngày mai chúng ta cũng bình yên khi có nhau. Anh muốn ngày mai anh
        thức dậy vẫn có em ở bên. Anh nhớ em nhiều lắm. Anh yêu em Quỳnh Giang.
        <br />
        <span className="signature">Nguyễn Nhật Minh</span>
      </p>
    </section>
  );
};

export default HeroSecond;
