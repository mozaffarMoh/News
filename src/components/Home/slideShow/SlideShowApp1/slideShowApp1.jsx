import "../SlideShowApp.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Weather from "../../../Weather/Weather";
import DateTime from "../../../DateTime/DateTime";

const SlideShowApp1 = () => {
  return (
    <div className="allSlide allSlide1">
      <div className="weatherDiv">
        <Weather />
        <DateTime />
      </div>
      <div className="slide">
        <h1>WATCH ALL BREAKING NEWS</h1>
        <Button variant="success">
          <Link to="/all-news">GO TO NEWS</Link>
        </Button>
      </div>
    </div>
  );
};

export default SlideShowApp1;
