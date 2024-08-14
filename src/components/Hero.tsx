import React from "react";
import heroImage from "../assets/hero.jpg";
import "./styles/Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <h1>Our Blue Sappiness</h1>
      <p>
        Hãy đến nghe tiếng yêu từ sau <br /> Nơi trái tim và đừng nhiều lời nói
        để khi cách xa càng thêm <br />
        Yêu quý những ngày mà <br />
        Mình đã đâu cần nhớ đến
      </p>
    </section>
  );
};

export default Hero;
