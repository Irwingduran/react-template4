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
      <Banner></Banner>
      <CareSection></CareSection>
      <About></About>
      <Service></Service>
      <MapComponent></MapComponent>
      <VideoComponent></VideoComponent>
      <Testimonial></Testimonial>
      <Faq></Faq>
      <Contact></Contact>
      <Discount></Discount>
    </div>
  );
};

export default Home;
