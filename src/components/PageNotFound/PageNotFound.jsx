import { Button } from "react-bootstrap";
import "./PageNotFound.scss";
const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>:( URL NOT FOUND :(</h1>
      <h4>Sorry we can't find this url in our website</h4>
      <Button variant="warning" href="/all-news" className="page-button">
        Back To News
      </Button>
    </div>
  );
};

export default PageNotFound;
