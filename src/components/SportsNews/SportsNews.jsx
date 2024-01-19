import "./SportsNews.scss";
import axios from "axios";
import React from "react";
import { Card, Pagination, Spinner, Table } from "react-bootstrap";
import Header from "../Header/Header";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
import Footer from "../Footer/Footer";

const SportsNews = () => {
  const [spinner, setSpinner] = React.useState(false);
  const [articles, setArticles] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pginationFirst, setPginationFirst] = React.useState(0);
  const [paginationEnd, setPaginationEnd] = React.useState(pginationFirst + 12);
  const [flagImagesArray, setFlagImagesArray] = React.useState([]);
  const [leagueImagesArray, setLeagueImagesArray] = React.useState([]);

  const itemsPerPage = 8;

  /* Get All News */
  React.useEffect(() => {
    const getBusinessNews = async () => {
      setSpinner(true);
      try {
        const response = await axios.get(
          "https://v3.football.api-sports.io/leagues/",
          {
            headers: {
              "x-rapidapi-key": "6bb06592af572ec130509dea4cf1048e",
              "x-rapidapi-host": "v3.football.api-sports.io",
            },
          }
        );
        setArticles(response.data.response);
        setSpinner(false);
      } catch (error) {
        setSpinner(false);
      }
    };
    getBusinessNews();
  }, []);

  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const paginationArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const articlesToDisplay = articles.slice(startIndex, endIndex);

  const changePage = (page) => {
    setCurrentPage(page);
    if (page === paginationEnd + 1) {
      setPginationFirst(pginationFirst + 12);
      setPaginationEnd(paginationEnd + 12);
    }
    if (page === paginationEnd - 12) {
      setPginationFirst(pginationFirst - 12);
      setPaginationEnd(paginationEnd - 12);
    }
  };

  /* Wait for loading image */
  const waitForLoadingFlagImage = (imageLink) => {
    setFlagImagesArray((prevArray) => {
      const newArray = [...prevArray, imageLink];
      return newArray;
    });
  };
  const waitForLoadingLeagueImage = (imageLink) => {
    setLeagueImagesArray((prevArray) => {
      const newArray = [...prevArray, imageLink];
      return newArray;
    });
  };

  return (
    <div>
      <Header />

      {/* Pagination */}
      <Pagination size={"sm"} className="pagination">
        <Pagination.Prev
          className="paginationItem"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {paginationArray
          .slice(pginationFirst, paginationEnd)
          .map((page, index) => {
            return (
              <Pagination.Item
                className="paginationItem"
                key={index}
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
        <div className="business-news">
          {articlesToDisplay.map((article, index) => {
            return (
              <Card className="card" key={index}>
                <div className="card-fields">
                  {/* Flag image */}
                  <div className="card-field">
                    {article.country.flag ? (
                      <div>
                        {!flagImagesArray.includes(article.country.flag) && (
                          <div className="image-alt flag-image-alt">
                            <Spinner variant="success" />
                          </div>
                        )}
                        <Card.Img
                          src={article.country.flag}
                          className="flag-image"
                          onLoad={() =>
                            waitForLoadingFlagImage(article.country.flag)
                          }
                        />
                      </div>
                    ) : (
                      <h1>World</h1>
                    )}
                    <Card.Text>{article.country.name}</Card.Text>
                  </div>

                  {/* League Image */}
                  <div className="card-field">
                    {article.league.logo && (
                      <div>
                        {!leagueImagesArray.includes(article.league.logo) && (
                          <div className="image-alt league-image-alt">
                            <Spinner variant="success" />
                          </div>
                        )}
                        <Card.Img
                          src={article.league.logo}
                          className="league-image"
                          onLoad={() =>
                            waitForLoadingLeagueImage(article.league.logo)
                          }
                        />
                      </div>
                    )}
                    <Card.Text> {article.league.name}</Card.Text>
                  </div>
                </div>

                {/* Seasons */}
                <Table hover striped bordered>
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Start</th>
                      <th>End</th>
                    </tr>
                  </thead>

                  {article.seasons.map((season, index) => {
                    return (
                      <tbody className="seasons" key={index}>
                        <tr>
                          <td>{season.year}</td>
                          <td>{season.start}</td>
                          <td>{season.end}</td>
                        </tr>
                      </tbody>
                    );
                  })}
                </Table>
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

export default SportsNews;
