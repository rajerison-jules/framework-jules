import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Banner from "./component/navbar/Banner";
import Card from "./pages/Section2";
import Step from "./pages/Section3";
import Temoin from "./pages/Section4";
import Guarantee from "./pages/Section5";
import Honest from "./pages/Section6";
import Question from "./pages/Section7";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="position-relative ">
      <Navbar></Navbar>
      <Banner />

      <Step />
      <Guarantee />
      <Honest />
      <Temoin />
      <Question />
      <Footer />
    </div>
  );
}

export default App;
