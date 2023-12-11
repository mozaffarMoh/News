import "./Sources.scss";
import axios from "axios";
import React from "react";
import Header from "../Header/Header";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Sources = () => {
  const [spinner, setSpinner] = React.useState(false);
  const [allNewsSources, setAllNewsSources] = React.useState([]);
  const [businessSources, setBusinessSources] = React.useState([]);

  /* Get All News */
  React.useEffect(() => {
    const getAllNewsSources = async () => {
      setSpinner(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=38e8d11b8e004bc490b94ce7b351489f"
        );
        setAllNewsSources(response.data.articles);
        setSpinner(false);
      } catch (error) {
        setSpinner(false);
        console.log(error);
      }
    };

    const getBusinessSources = async () => {
      setSpinner(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=38e8d11b8e004bc490b94ce7b351489f"
        );
        setBusinessSources(response.data.articles);
        setSpinner(false);
      } catch (error) {
        setSpinner(false);
        console.log(error);
      }
    };

    getAllNewsSources();
    getBusinessSources();
  }, []);

  return (
    <div>
      <Header />
      <div className="sources-news">
        <h1>** BUSINESS SOURCES ** </h1>
        {spinner ? (
          <SpinnerLoading />
        ) : (
          <div className="sourcesDiv">
            {businessSources.map((source) => {
              return (
                <div className="source-item">
                  <Link to={source.url} target="_blank">
                    {source.source.name}
                  </Link>
                </div>
              );
            })}
          </div>
        )}
        <hr />
        <br />

        <h1>** ALL SOURCES ** </h1>
        {spinner ? (
          <SpinnerLoading />
        ) : (
          <div className="sourcesDiv">
            {allNewsSources.map((source) => {
              return (
                <div className="source-item">
                  {" "}
                  <Link to={source.url} target="_blank">
                    {source.source.name}
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
        <Footer />
    </div>
  );
};

export default Sources;
