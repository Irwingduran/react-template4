import Banner from "../../Componets/Banner";
import CareSection from "../../Componets/CareSection";
import Discount from "../../Componets/Discount";
import Faq from "../../Componets/Faq";
import Service from "../../Componets/Service";
import Testimonial from "../../Componets/Testimonial";
import About from "../../Componets/About";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CareSection></CareSection>
      <About></About>
      <Service></Service>
      <Testimonial></Testimonial>
      <Faq></Faq>
      <Discount></Discount>
    </div>
  );
};

export default Home;
