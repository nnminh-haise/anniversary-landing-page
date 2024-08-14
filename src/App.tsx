import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import "./App.css";
import HeroSecond from "./components/HeroSecond";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <HeroSecond />
      <Footer />
    </div>
  );
};

export default App;
