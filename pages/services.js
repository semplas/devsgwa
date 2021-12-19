import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactCTA from "../components/services/ContactCTA";
import ContactHeader from "../components/services/ContactHeader";
import ServiceSection from "../components/services/ServiceSection";

export default function Services() {
  return (
    <>
      <Header />
      <ContactHeader />
      <ServiceSection />
      <ContactCTA />
      <Footer />
    </>
  );
}
