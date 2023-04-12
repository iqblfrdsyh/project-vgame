import React from "react";
import { Link } from "react-router-dom";

const ContentSwiper = (props) => {
  const styleContent = {
    backgroundSize: "cover",
    backgroundImage: `url('${props.imgUrl}')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: "white",
    padding: "105px",
  };
  const styleDesc = {
    fontSize: "13px",
    paddingBottom: props.title == "Horizon Zero Down" ? "20px" : 0,
  };

  return (
    <div className="content-jumbotron" style={styleContent}>
      <div className="w-100" style={{ paddingBottom: "94px" }}>
        <h1 className="fw-bold pt-3">{props.title}</h1>
        <p style={styleDesc}>{props.desc}</p>
        <Link to={props.to}>
          <button
            className="btn text-white px-4 py-1 mt-1"
            style={{ border: "1px white solid" }}
          >
            View Detail
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContentSwiper;
