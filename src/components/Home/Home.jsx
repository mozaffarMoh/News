import "./Home.scss";
import Carousel from "react-bootstrap/Carousel";
import SlideShowApp1 from "./slideShow/SlideShowApp1/slideShowApp1";
import SlideShowApp2 from "./slideShow/SlideShowApp2/slideShowApp2";
import SlideShowApp3 from "./slideShow/SlideShowApp3/slideShowApp3";

const Home = () => {
  return (
    <Carousel className="slideShow" fade>
      <Carousel.Item>
        <SlideShowApp1 />
      </Carousel.Item>

      <Carousel.Item>
        <SlideShowApp2 />
      </Carousel.Item>

      <Carousel.Item>
        <SlideShowApp3 />
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
