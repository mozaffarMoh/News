import "./Tooltip.scss";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const ToolTip = ({ id, children, title }) => (
  <OverlayTrigger
    overlay={
      <Tooltip className="tooltip" id={id}>
        {title}
      </Tooltip>
    }
    placement="bottom"
    delay={800}
  >
    {children}
  </OverlayTrigger>
);

export default ToolTip;
