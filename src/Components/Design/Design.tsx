import "./Design.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ArtInfo from "./Art.json";
import ArtCard from "./ArtCard";

const Design = () => {
  return (
    <div>
      <Navbar />
      <div className="design">
        <div className="design-title">
          <div className="design-title-main">
            <h1>Illustrations & Design Works</h1>
            <img src="/kitty.png"></img>
          </div>
          <p>work in progress... more to come!</p>
        </div>
        <div className="design-grid">
          {[...ArtInfo].reverse().map((piece) => (
            <ArtCard
              key={piece.id}
              imgSrc={piece.imgSrc}
              imgCaption={piece.imgCaption}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Design;
