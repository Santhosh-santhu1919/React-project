import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
// import Career from "../components/Career";
import Projects from "../components/Projects";
import VideoSlider from "../components/VideoSlider"
import WhyWeAre from "../components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <VideoSlider />
      <Hero
        title="Building Digital Products That Power Groth"
        subtitle="BuildBro Innovations is a technology-driven startup creating scalable, high-performance web applications with modern designs and clean architecture"
      />
      <About />
      <Services />
      <WhyWeAre />
    </>
  );
};

export default Home;
