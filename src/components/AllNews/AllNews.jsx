import "./AllNews.scss";
import axios from "axios";
import React from "react";
import { Button, Card, Pagination, Spinner } from "react-bootstrap";
import Header from "../Header/Header";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
import Footer from "../Footer/Footer";

const AllNews = () => {
  const [spinner, setSpinner] = React.useState(false);
  const [articles, setArticles] = React.useState([]);
  const [imagesArray, setImagesArray] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 8;

  /* Get All News */
  React.useEffect(() => {
    const getAllNews = async () => {
      setSpinner(true);
      try {
        const response = await axios.get(
          "https://api.worldnewsapi.com/search-news?text=tesla&language=en&api-key=8d071e3be4f1449180ef652b83fdbcd2"
        );
        setArticles(response.data.news);
        setSpinner(false);
      } catch (error) {
        setSpinner(false);
        console.log(error);
      }
    };
    getAllNews();
  }, []);

  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const paginationArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const articlesToDisplay = articles.slice(startIndex, endIndex);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  /* Wait for loading image */
  const waitForLoadingImage = (imageLink) => {
    setImagesArray((prevArray) => {
      const newArray = [...prevArray, imageLink];
      return newArray;
    });
  };

  return (
    <div>
      <Header />

      <Pagination size={"sm"} className="pagination">
        <Pagination.Prev
          className="paginationItem"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {paginationArray.map((page, index) => {
          return (
            <Pagination.Item
              className="paginationItem"
              key={page}
              active={page === currentPage}
              onClick={() => changePage(page)}
            >
              {page}
            </Pagination.Item>
          );
        })}
        <Pagination.Next
          className="paginationItem"
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
      {spinner ? (
        <SpinnerLoading />
      ) : (
        <div className="all-news">
          {articlesToDisplay.map((article, index) => {
            return (
              <Card className="card" key={index}>
                <div className="image-field">
                  {!imagesArray.includes(article.image) && (
                    <div className="news-image-alt">
                      <Spinner variant="success" />
                    </div>
                  )}
                  <Card.Img
                    src={article.image}
                    className="card-image-news"
                    onLoad={() => waitForLoadingImage(article.image)}
                  />
                </div>
                <Card.Body className="card-body">
                  <Card.Text>
                    Date :{" "}
                    {article.publish_date.replace("T", "  -  ").slice(0, -1)}
                  </Card.Text>
                  <Card.Text>Source : {article.author}</Card.Text>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text className="card-text">{article.text}</Card.Text>
                  <Button
                    href={article.url}
                    target="_blank"
                    variant="warning"
                    className="card-button"
                  >
                    READ MORE ...
                  </Button>
                </Card.Body>
                <br />
              </Card>
            );
          })}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default AllNews;
