import axios from "axios";
import CardGame from "../cardGame/cardGame";
import SearchBar from "../searchbar/seacrhbar";
import { useState, useEffect } from "react";
import { debounce } from "lodash";
import Loading from "../loadingAnimation/loading";
import { useNavigate } from "react-router-dom";
import ModalSuccess from "../modal/modal";

const ListGame = () => {
  const [dataGame, setDataGame] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Update initial value to false
  const [gameNotFound, setGameNotFound] = useState(false);

  const apikey = "51a2aa2785884f64a58ef1dbd153b504";

  const fetchAPI = async () => {
    try {
      setIsLoading(true); // Set loading state to true
      const response = await axios.get(
        `https://api.rawg.io/api/games?key=${apikey}&page=${page}&search=${search}`
      );
      const newDataGame = response.data.results;
      const sortDataGame = newDataGame
        .sort((a, b) => a.rating - b.rating)
        .reverse();
      setDataGame((prevData) => prevData.concat(sortDataGame));
      setIsLoading(false); // Set loading state to false
    } catch (error) {
      console.log(error);
      setIsLoading(false); // Set loading state to false
      setGameNotFound(true);
    }
  };

  useEffect(() => {
    if (!dataLoaded) {
      setDataLoaded(true);
    } else {
      fetchAPI();
    }
  }, [page, search, dataLoaded]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    setDataLoaded(false);
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
    setDataGame([]);
    setDataLoaded(false);
  };

  const debounceSearch = debounce(handleInputChange, 800);

  const [wishlist, setWishlist] = useState([]);

  const handleAddToWishlist = (game) => {
    const storedData = localStorage.getItem("wishlist");
    const existingWishlist = storedData ? JSON.parse(storedData) : [];

    // Check if game already exists in storage
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

  const styleP = {
    cursor: "pointer",
    color: "#A4ADFF",
    fontWeight: "600",
    border: "2px solid #A4ADFF",
  };

  return (
    <>
      <SearchBar
        className="searchBar d-flex justify-content-end mb-5"
        onChange={debounceSearch}
      />
      <ModalSuccess
        onclick={() => setShowModal(false)}
        show={showModal}
        title="Successfully Added To Wishlist"
        contentBody={`Check in your wishlist menu to view`}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {dataGame.length === 0 && search !== "" && !gameNotFound && (
            <div style={{ marginTop: "100px", marginBottom: "100px" }}>
              <p className="text-center fw-semibold fs-5">
                No games found for the search query.
              </p>
            </div>
          )}
          {dataGame.length > 0 && (
            <div className="listGame d-flex flex-wrap justify-content-between align-items-center">
              {dataGame.map((games, index) => {
                const isFavorite =
                  localStorage.getItem(`wishlist-${games.id}`) === "true";
                return (
                  <div className="mb-3" key={index.id}>
                    <CardGame
                      game={games.name}
                      image={
                        games.background_image === null
                          ? "/assets/background/ImageNotFound.svg"
                          : `${games.background_image}?q=15&width=300`
                      }
                      alt={games.name}
                      rating={!games.metacritic ? "0" : games.metacritic}
                      genre={games.genres.map((genre) => genre.name).join(", ")}
                      toDetail={!userData ? "/login" : `/detail/${games.id}`}
                      onclickWishlist={
                        !userData
                          ? () => navigate("/login")
                          : () => handleAddToWishlist(games)
                      }
                      srcWishlist={
                        isFavorite
                          ? "/assets/icon/doneAddFav.svg"
                          : "/assets/icon/addFav.svg"
                      }
                      platforms={
                        !games.parent_platforms
                          ? null
                          : games.parent_platforms.map((games, index) => {
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
          {dataGame.length > 0 && !gameNotFound && (
            <div className="loadMore mt-5 pt-2 d-flex justify-content-center">
              <p
                onClick={handleLoadMore}
                style={styleP}
                className="px-2 py-1 rounded"
              >
                Load More
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ListGame;
