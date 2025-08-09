import "./HomePage.scss";
import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Projects />
      <Footer />
    </div>
  );
};

export default HomePage;
