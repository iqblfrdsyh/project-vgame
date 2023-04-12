import { Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./cardGame.css";
import { Link } from "react-router-dom";

const CardGame = (props) => {
  const styleImage = {
    height: "190px",
    width: "100%",
  };

  const styleGenre = {
    backgroundColor: "#141414",
    padding: "3.5px",
    fontSize: "12px",
    borderRadius: "5px",
  };

  const styleButton = {
    backgroundColor: "transparent",
    border: "2px solid #000",
    fontSize: "15px",
  };

  const styleRating = {
    border: "2px solid",
    borderColor:
      props.rating < 50 ? "red" : props.rating < 70 ? "#fdca52" : "#319C1F",
    color:
      props.rating < 50 ? "red" : props.rating < 70 ? "#fdca52" : "#319C1F",
    padding: "1px",
    fontSize: "13px",
    width: "47px",
    borderRadius: "5px",
  };

  const ratingTooltip = <Tooltip id="tooltip-rating">Meta Score</Tooltip>;

  return (
    <Card
      style={{
        width: "18rem",
        marginBottom: "10px",
        height: "460px",
      }}
    >
      <Card.Img
        variant="top"
        src={props.image}
        style={styleImage}
        alt={props.alt}
      />
      <Card.Body className="text-dark">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="plaforms pb-2 d-flex flex-warp justify-content-between mt-2 w-25 align-items-center">
            {props.platforms}
          </div>
          <div className="rating">
            <OverlayTrigger placement="top" overlay={ratingTooltip}>
              <div
                style={styleRating}
                className="d-flex align-items-center justify-content-center"
              >
                {props.rating}
              </div>
            </OverlayTrigger>
          </div>
        </div>
        <Card.Title className="fw-semibold fs-4">{props.game}</Card.Title>
        <div className="genre text-white">
          <span style={styleGenre}>{props.genre}</span>
        </div>
        <Link to={props.toDetail}>
          <Button className="mt-4 text-dark fw-semibold" style={styleButton}>
            View Detail
          </Button>
        </Link>
        <div
          className="addToWishlist position-absolute"
          style={{ bottom: "13px", right: "13px" }}
        >
          <img
            src={props.srcWishlist}
            alt=""
            onClick={props.onclickWishlist}
            className="position-relative"
            style={{ cursor: "pointer" }}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardGame;
