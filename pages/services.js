import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactCTA from "../components/contact/ContactCTA";
import ContactHeader from "../components/contact/ContactHeader";
import ServiceSection from "../components/contact/ServiceSection";

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
