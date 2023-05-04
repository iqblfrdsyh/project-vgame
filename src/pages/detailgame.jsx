import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import playIcon from "/assets/icon/play.svg";
import axios from "axios";
import { Container } from "react-bootstrap";
import NavigationBar from "../components/layouts/navigationBar";
import Footer from "../components/layouts/footer";
import IntroDetailGame from "../components/introDetailGame/introDetailGame";
import TrailersGame from "../components/trailersGame/trailersGame";
import Loading from "../components/loadingAnimation/loading";
import ModalSuccess from "../components/modal/modal";
import ModalMovie from "../components/modal/modalMovie";
import Requirements from "../components/requirements/requirements";

const DetailGame = () => {
  const [gameData, setGameData] = useState({});
  const [movieData, setMovieData] = useState([]);
  const [movieDataName, setMovieDataName] = useState("");
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [showModalMovie, setShowModalMovie] = useState(false);

  const apikey = "51a2aa2785884f64a58ef1dbd153b504";

  const fetchGameData = async () => {
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=${apikey}`
      );
      setGameData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMovieData = async () => {
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/games/${id}/movies?key=${apikey}`
      );
      if (response.data.results.length > 1 && response.data.results[1]) {
        setMovieData(response.data.results[1].data["480"]);
        setMovieDataName(response.data.results[1].name);
        console.log(response.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGameData();
    fetchMovieData();
  }, [id]);

  const [wishlist, setWishlist] = useState([]);

  const handleAddToWishlist = (game) => {
    const storedData = localStorage.getItem("wishlist");
    const existingWishlist = storedData ? JSON.parse(storedData) : [];

    const isGameExist = existingWishlist.some((item) => item.id === game.id);
    if (isGameExist) {
      localStorage.removeItem(`wishlist-${game.id}`);
      const updatedWishlist = existingWishlist.filter(
        (item) => item.id !== game.id
      );

      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setWishlist(updatedWishlist);
    } else {
      const newWishlistData = [...existingWishlist, game];
      localStorage.setItem("wishlist", JSON.stringify(newWishlistData));
      const newWishlist = [...existingWishlist, game];
      localStorage.setItem(`wishlist-${game.id}`, true);
      setWishlist(newWishlist);

      setShowModal(true);
    }
  };

  const isFavorite = localStorage.getItem(`wishlist-${id}`);

  const style = {
    backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9416360294117647) 40%, rgba(0,0,0,0.7763699229691876) 64%, rgba(0,0,0,0.737154236694678) 100%), url(${gameData.background_image}?q=15&width=300)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "87vh",
    width: "100%",
    position: "absolute",
    left: 0,
  };

  const styleBtnTrailer = {
    backgroundImage: `url(${playIcon})`,
    backgroundSize: "27px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "5px center",
    paddingLeft: "40px",
    border: "2px solid #fff",
  };

  return (
    <React.Fragment>
      <NavigationBar />
      <div className="bg" style={style}></div>
      <ModalSuccess
        show={showModal}
        title="Successfully Added To Wishlist"
        contentBody="Check in your wishlist menu to view"
        onclick={() => setShowModal(false)}
      />
      <ModalMovie
        show={showModalMovie}
        title={movieDataName}
        link={movieData}
        onHide={() => setShowModalMovie(false)}
      />
      {Object.keys(gameData).length === 0 ? (
        <div style={{ marginTop: "50px" }}>
          <Loading />
        </div>
      ) : (
        <>
          <div className="detailGame pt-5" style={{ position: "relative" }}>
            <ModalSuccess />
            <Container>
              <IntroDetailGame
                key={gameData.id}
                idGame={gameData.id}
                image={
                  !gameData.background_image
                    ? "/assets/background/ImageNotFound.svg"
                    : `${gameData.background_image}?q=15&width=300`
                }
                gameName={gameData.name}
                rating={!gameData.metacritic ? 0 : gameData.metacritic}
                genre={
                  gameData.genres.length === 0
                    ? "Unknown"
                    : gameData.genres &&
                      gameData.genres.map((genre) => genre.name).join(", ")
                }
                developer={
                  gameData.developers.length === 0
                    ? "Unknown"
                    : gameData.developers &&
                      gameData.developers.map((dev) => dev.name).join(", ")
                }
                release={!gameData.released ? "Unknown" : gameData.released}
                playtime={
                  gameData.playtime > 0
                    ? `${gameData.playtime} Hours`
                    : "Unknown"
                }
                website={
                  gameData.website ? (
                    <Link to={gameData.website}>{gameData.website}</Link>
                  ) : (
                    "There are no website for this game"
                  )
                }
                platforms={
                  gameData.parent_platforms &&
                  gameData.parent_platforms.map((game, index) => {
                    const platformSlug = game.platform.slug;
                    const platformIcon = `/assets/platforms/whiteColor/${platformSlug}.svg`;
                    return (
                      <img
                        key={index}
                        src={platformIcon}
                        width="20px"
                        className="me-2"
                      />
                    );
                  })
                }
                recomended={gameData.ratings[0].percent + "%"}
                meh={gameData.ratings[1].percent + "%"}
                skip={gameData.ratings[2].percent + "%"}
                exceptional={gameData.ratings[3].percent + "%"}
                btnTrailerMovie={
                  movieData.length == 0 ? null : (
                    <button
                      className="btn btn-sm py-2 text-white fw-semibold"
                      style={styleBtnTrailer}
                      onClick={() => setShowModalMovie(true)}
                    >
                      Watch Trailer Movie
                    </button>
                  )
                }
                imgWishlist={
                  isFavorite ? (
                    <span
                      style={{
                        backgroundColor: "white",
                        padding: "5px",
                        borderRadius: "7px",
                        marginTop: "-20px",
                        marginLeft: "-18px",
                        position: "absolute",
                      }}
                    >
                      <img
                        src="/assets/icon/doneAddFav.svg"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleAddToWishlist(gameData)}
                        alt=""
                      />
                    </span>
                  ) : null
                }
                onclickWishlist={() => handleAddToWishlist(gameData)}
              />
              <div className="descriptionGame">
                <div className="title mb-4">
                  <h2
                    className="fw-semibold px-3"
                    style={{ borderLeft: "3px solid white" }}
                  >
                    Description
                  </h2>
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: gameData.description }}
                ></div>
              </div>
              <Requirements />
              <TrailersGame />
            </Container>
          </div>
          <Footer />
        </>
      )}
    </React.Fragment>
  );
};

export default DetailGame;
