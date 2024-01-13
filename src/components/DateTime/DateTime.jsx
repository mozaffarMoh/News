import axios from "axios";
import React from "react";
import "./DataTime.scss";
import { Clock, Calendar2Check } from "react-bootstrap-icons";

const DateTime = () => {
  const [dateTime, setDateTime] = React.useState({});

  /* Get DateTime */
  React.useEffect(() => {
    const getDateTime = async () => {
      try {
        const response = await axios.get(
          "https://api.ipgeolocation.io/timezone?apiKey=817ccb36db844c8bac21792ece71fa64"
        );
        setDateTime(response.data);
      } catch (error) {
        setDateTime({ date: "Date-X", time_12: "Time-X" });
      }
    };

    getDateTime();
  }, []);

  return (
    <div className="dateTime">
      <div className="item">
        <Calendar2Check className="icon" />
        <p>{dateTime.date}</p>
      </div>
      <div className="item">
        <Clock className="icon" />
        <p>{dateTime.time_12}</p>
      </div>
    </div>
  );
};

export default DateTime;
