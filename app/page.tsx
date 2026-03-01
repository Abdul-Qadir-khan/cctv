import Hero from "./components/Hero";
import BrandsSlider from "./components/BrandsSlider";
import About from "./components/About";
import Product from "./components/Product";
import Accessories from "./components/Accessories";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";

export default function Home() {
  return (
    <div>
      <Hero />
      <BrandsSlider />
      <About />
      <Product />
      <Accessories />
      <Services />
      <WhyChoose />
    </div>
  );
}