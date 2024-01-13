import { Facebook, Linkedin, Telegram, Whatsapp } from "react-bootstrap-icons";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Link to="https://web.whatsapp.com" target="_blank">
          <Whatsapp className="icon" />
        </Link>
        <Link to="https://web.telegram.org" target="_blank">
          <Telegram className="icon" />
        </Link>
        <Link to="https://www.linkedin.com" target="_blank">
          <Linkedin className="icon" />
        </Link>
        <Link to="https://www.facebook.com" target="_blank">
          <Facebook className="icon" />
        </Link>
      </div>
      <div>
        <p>All Copyrights reserved @2023</p>
      </div>
    </div>
  );
};

export default Footer;
