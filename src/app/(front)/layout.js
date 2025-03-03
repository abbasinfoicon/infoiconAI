import "../main.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function FrontLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
