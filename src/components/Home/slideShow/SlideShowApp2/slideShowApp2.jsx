import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../SlideShowApp.scss";
import Weather from "../../../Weather/Weather";
import DateTime from "../../../DateTime/DateTime";

const SlideShowApp2 = () => {
  return (
    <div className="allSlide allSlide2">
      <div className="weatherDiv">
        <Weather />
        <DateTime />
      </div>
      <div className="slide">
        <h1>SPORTS LEAGUES</h1>
        <Button variant="primary">
          <Link to="/News/sports-news">GO TO SPORTS LEAGUES</Link>
        </Button>
      </div>
    </div>
  );
};

export default SlideShowApp2;
