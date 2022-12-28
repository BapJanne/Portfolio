import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Portfolio from "./components/Projets/Portfolio";
import FormMail from "./components/Form/FormMail";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Portfolio />
      <FormMail />
      <Footer />
    </div>
  );
}

export default App;
