import React, { useState } from "react";
import { Container } from "react-bootstrap";
import CardGame from "../components/cardGame/cardGame";
import Footer from "../components/layouts/footer";
import NavigationBar from "../components/layouts/navigationBar";

const Wishlist = () => {
  const [dataWishlist, setDataWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist") || "[]")
  );

  console.log(dataWishlist);

  const handleRemoveWishlist = (game) => {
    const decision = confirm("are you sure to delete from your wishlist");

    if (decision) {
      localStorage.removeItem(`wishlist-${game.id}`);
      const updatedWishlist = dataWishlist.filter(
        (item) => item.id !== game.id
      );

      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setDataWishlist(updatedWishlist);
    }
  };

  return (
    <React.Fragment>
      <NavigationBar />
      <div className="wishlist">
        <Container>
          <div className="title">
            <h2
              className="fw-semibold px-3 mt-4 mb-5"
              style={{ borderLeft: "3px solid white" }}
            >
              Your Wishlist
            </h2>
          </div>
          <div className="contentWishlist">
            {dataWishlist.length === 0 ? (
              <div className="text-center" style={{ height: "60vh" }}>
                <h3>You no have wishlist</h3>
              </div>
            ) : (
              <div className="d-flex flex-wrap justify-content-evenly">
                {dataWishlist.map((games) => {
                  const wishlistStatus = localStorage.getItem(
                    `wishlist-${games.id}`
                  );

                  return (
                    <div className="mb-4">
                      <CardGame
                        game={games.name}
                        image={`${games.background_image}?q=15&width=300`}
                        alt={games.name}
                        rating={!games.metacritic ? "0" : games.metacritic}
                        genre={games.genres
                          .map((genre) => genre.name)
                          .join(", ")}
                        toDetail={`/detail/${games.id}`}
                        onclickWishlist={() => handleRemoveWishlist(games)}
                        srcWishlist={
                          wishlistStatus
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
          </div>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Wishlist;
