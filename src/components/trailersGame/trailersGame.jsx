import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";

const TrailersGame = () => {
  const [screenshots, setScreenshots] = useState([]);

  const { id } = useParams();

  const apikey = "51a2aa2785884f64a58ef1dbd153b504";

  const fetchGameData = async () => {
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/games/${id}/screenshots?key=${apikey}`
      );
      setScreenshots(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // console.log({data: screenshots.results});

  useEffect(() => {
    fetchGameData();
  }, [id]);

  // console.log({ next: screenshots.next });

  const settings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="demoGame mt-5 pt-5 mb-5 pb-5">
      <div className="title mb-4 pb-1">
        <h2
          className="fw-semibold px-3"
          style={{ borderLeft: "3px solid white" }}
        >
          Trailer
        </h2>
      </div>
      {!screenshots.results ? (
        <h4>No Picture Found</h4>
      ) : (
        <div>
          <Slider {...settings}>
            {screenshots &&
              screenshots.results?.map((link) => {
                return (
                  <div>
                    <img
                      key={link.id}
                      src={`${link.image}?q=15&width=300`}
                      alt=""
                      width="97%"
                      style={{ border: "2px solid white" }}
                    />
                  </div>
                );
              })}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default TrailersGame;
