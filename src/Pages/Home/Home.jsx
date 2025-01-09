import Banner from "../../Componets/Banner";
import CareSection from "../../Componets/CareSection";
import Discount from "../../Componets/Discount";
import Faq from "../../Componets/Faq";
import Service from "../../Componets/Service";
import Testimonial from "../../Componets/Testimonial";
import About from "../../Componets/About";
import MapComponent from "../../Componets/MapComponent";
import VideoComponent from "../../Componets/VideoComponent";
import Contact from "../../Componets/Contact";
const Home = () => {
  return (
    <div>
      <div id="home">
      <Banner></Banner>
      </div>
      <CareSection></CareSection>
      <div id="about">
      <About></About>
      </div>
      <div id="service">  
      <Service></Service>
      </div>
      <MapComponent></MapComponent>
      <VideoComponent></VideoComponent>
      <Testimonial></Testimonial>
      <Faq></Faq>
      <div id="contact">
      <Contact></Contact>
      </div>
      <Discount></Discount>
    </div>
  );
};

export default Home;
