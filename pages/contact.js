import ContactHeader from "../components/contact/ContactHeader";
import Faqs from "../components/contact/Faqs";
import Form from "../components/contact/Form";
import Location from "../components/contact/Location";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact() {
  return (
    <>
      <Header />
      <ContactHeader />
      <Location />
      <Form />
      <Faqs />s
      <Footer />
    </>
  );
}
