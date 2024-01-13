import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../SlideShowApp.scss";
import Weather from "../../../Weather/Weather";
import DateTime from "../../../DateTime/DateTime";

const SlideShowApp3 = () => {
  return (
    <div className="allSlide allSlide3">
      <div className="weatherDiv">
        <Weather />
        <DateTime />
      </div>
      <div className="slide">
        <h1>ALL SOURCES</h1>
        <Button variant="secondary">
          <Link to="/News/sources">GO TO SOURCES</Link>
        </Button>
      </div>
    </div>
  );
};

export default SlideShowApp3;
