<template>
  <div>
    <NavThree />
    <SliderThree />
    <ServicesBox />
    <Why />
    <Explore />
    <CallToActionTwo />
    <Team />
    <Brands />
    <Testimonial />
    <WriteMessage />
    <Blog />
    <GMap />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import NavThree from "../components/NavThree";
import SliderThree from "../components/SliderThree";
import ServicesBox from "../components/ServicesBox";
import Why from "../components/Why";
import Explore from "../components/Explore";
import CallToActionTwo from "../components/CallToActionTwo";
import Team from "../components/Team";
import Brands from "../components/Brands";
import Testimonial from "../components/Testimonial";
import WriteMessage from "../components/WriteMessage";
import Blog from "../components/Blog";
import GMap from "../components/GMap";
export default {
  components: {
    GMap,
    Blog,
    WriteMessage,
    Testimonial,
    Brands,
    Team,
    CallToActionTwo,
    Explore,
    Why,
    ServicesBox,
    SliderThree,
    NavThree,
    Footer
  },
  head() {
    return {
      title: "depoantalya | Home 3"
    };
  }
};
</script>
