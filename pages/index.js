import Footer from "../components/Footer";
import Header from "../components/Header";
import Articles from "../components/Home/Articles";
import CallToAction from "../components/Home/CallToAction";
import Hero from "../components/Home/Hero";
import OurTechnoloy from "../components/Home/OurTechnoloy";
import Services from "../components/Home/Services";
import Testimonies from "../components/Home/Testimonies";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <OurTechnoloy />
      <Services />
      <CallToAction />
      <Articles />
      <Testimonies />
      <Footer />
    </>
  );
}
