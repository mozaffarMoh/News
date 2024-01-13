import { Button } from "react-bootstrap";
import "./PageNotFound.scss";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>:( URL NOT FOUND :(</h1>
      <h4>Sorry we can't find this url in our website</h4>
      <Link to="/News/all-news">
        <Button variant="warning" className="page-button">
          Back To News
        </Button>
      </Link>
    </div>
  );
};

export default PageNotFound;
