import "./Sources.scss";
import React from "react";
import Header from "../Header/Header";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import sourcesArray from "./sourcesArray";

const Sources = () => {
  const [spinner, setSpinner] = React.useState(false);

  return (
    <div>
      <Header />
      <div className="sources-news">
        <h1>** ALL SOURCES ** </h1>
        {spinner ? (
          <SpinnerLoading />
        ) : (
          <div className="sourcesDiv">
            {sourcesArray.map((source, index) => {
              return (
                <div className="source-item" key={index}>
                  {" "}
                  <Link to={source.url} target="_blank">
                    {source.name}
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
