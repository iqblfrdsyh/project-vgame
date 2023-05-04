import React, { useState, useEffect } from "react";
import NavigationBar from "../../components/layouts/navigationBar";
import Footer from "../../components/layouts/footer";
import CardGame from "../../components/cardGame/cardGame";
import { Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";
import Loading from "../../components/loadingAnimation/loading";
import ModalSuccess from "../../components/modal/modal";

const GenrePage = () => {
  const { genre } = useParams();
  const h2Style = {
    borderLeft: "3px solid #fff",
    paddingLeft: "17px",
    fontWeight: "600",
  };
  const styleP = {
    cursor: "pointer",
    color: "#A4ADFF",
    fontWeight: "600",
    border: "2px solid #A4ADFF",
  };

  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const fetchGames = async () => {
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/games?key=51a2aa2785884f64a58ef1dbd153b504&genres=${genre}&page=${page}`
      );
      const newGames = response.data.results;
      setGames((prevGames) => [...prevGames, ...newGames]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (!dataLoaded) {
      setDataLoaded(true);
    } else {
      fetchGames();
    }
  }, [genre, page, dataLoaded]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    setDataLoaded(false);
  };

  const [wishlist, setWishlist] = useState([]);

  const handleAddToWishlist = (game) => {
    const storedData = localStorage.getItem("wishlist");
    const existingWishlist = storedData ? JSON.parse(storedData) : [];

    // Cek data jika sudah ada di storage
    const isGameExist = existingWishlist.some((item) => item.id === game.id);
    if (isGameExist) {
      localStorage.removeItem(`wishlist-${game.id}`);
      const updatedWishlist = wishlist.filter((item) => item.id !== game.id);

      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setWishlist(updatedWishlist);
    } else {
      // Add game to wishlist
      const newWishlistData = [...existingWishlist, game];
      localStorage.setItem("wishlist", JSON.stringify(newWishlistData));
      const newWishlist = [...existingWishlist, game];
      localStorage.setItem(`wishlist-${game.id}`, true);
      setWishlist(newWishlist);
      setShowModal(true);
    }
  };

  const userData = localStorage.getItem("user");
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <NavigationBar />
      <ModalSuccess
        onclick={() => setShowModal(false)}
        show={showModal}
        title="Successfully Added To Wishlist"
        contentBody={`Check in your wishlist menu to view`}
      />
      <Container>
        <div className="title my-4 mb-5">
          <h2 style={h2Style}>List Of Genre {genre}</h2>
        </div>
        {games.length === 0 ? (
          <>
            <Loading />
          </>
        ) : (
          <div className="games d-flex flex-wrap justify-content-between">
            {games &&
              games.map((game, index) => {
                const isFavorite =
                  localStorage.getItem(`wishlist-${game.id}`) === "true";
                return (
                  <div className="mb-3" key={index.id}>
                    <CardGame
                      game={game.name}
                      image={
                        game.background_image === null
                          ? "/assets/background/ImageNotFound.svg"
                          : `${game.background_image}?q=15&width=300`
                      }
                      alt={game.name}
                      rating={!game.metacritic ? "0" : game.metacritic}
                      genre={game.genres.map((genre) => genre.name).join(", ")}
                      toDetail={!userData ? "/login" : `/detail/${game.id}`}
                      onclickWishlist={
                        !userData
                          ? () => navigate("/login")
                          : () => handleAddToWishlist(game)
                      }
                      srcWishlist={
                        isFavorite
                          ? "/assets/icon/doneAddFav.svg"
                          : "/assets/icon/addFav.svg"
                      }
                      platforms={
                        !game.parent_platforms
                          ? null
                          : game.parent_platforms.map((games, index) => {
                              const platformSlug = games.platform.slug;
                              const platformIcon = `/assets/platforms/blackColor/${platformSlug}.svg`;

                              if (index <= 3) {
                                return (
                                  <img
                                    key={index}
                                    src={platformIcon}
                                    width="20px"
                                    className="me-2"
                                  />
                                );
                              } else if (index === 4) {
                                return (
                                  <span
                                    key={index}
                                    className="badge bg-secondary fw-semibold d-flex align-items-center"
                                  >
                                    ++
                                  </span>
                                );
                              } else {
                                return null;
                              }
                            })
                      }
                    />
                  </div>
                );
              })}
          </div>
        )}
      </Container>
      <div className="loadMore mt-5 pt-2 d-flex justify-content-center">
        <p
          onClick={handleLoadMore}
          style={styleP}
          className="px-2 py-1 rounded"
        >
          Load More
        </p>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default GenrePage;
