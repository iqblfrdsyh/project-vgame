import "./introDetailGame.css";

const IntroDetailGame = (props) => {
  const styleGenre = {
    backgroundColor: "#fff",
    color: "#000",
    padding: "2px",
    borderRadius: "6px",
  };

  const styleBtn = {
    backgroundColor: "transparent",
    border: "2px solid #fff",
  };

  const styleRating = {
    border: "2px solid",
    borderColor:
      props.rating < 50 ? "red" : props.rating < 70 ? "#fdca52" : "#7BFF65",
    color:
      props.rating < 50 ? "red" : props.rating < 70 ? "#fdca52" : "#7BFF65",
    fontSize: "14px",
    width: "47px",
    borderRadius: "5px",
  };

  const isFavorite = localStorage.getItem(`wishlist-${props.idGame}`);

  return (
    <div className="introDetailGame d-flex" style={{ height: "87vh" }}>
      <div className="imageGame mt-2 me-5 position-relative">
        {props.imgWishlist}
        <img
          src={props.image}
          alt=""
          width="570px"
          style={{ borderRadius: "7px", border: "2px solid white" }}
        />
      </div>
      <div className="contentDetail justify-content-between align-items-center w-100">
        <div className="nameGame  d-flex align-items-center justify-content-between">
          <h2 className="fw-semibold me-3 pt-2">{props.gameName}</h2>
          <span
            style={styleRating}
            className="d-flex align-items-center justify-content-center py-1 px-3"
          >
            {props.rating}
          </span>
        </div>
        <span style={styleGenre} className="px-2 fw-semibold">
          {props.genre}
        </span>
        <div className="platforms d-flex flex-wrap w-100 mt-4 mb-3">
          {props.platforms}
        </div>
        <div className="mb-2">
          <span className="me-3">Developers :</span>
          {props.developer}
        </div>
        <div className="mb-2">
          <span className="me-3">Release Date :</span>
          {props.release}
        </div>
        <div className="mb-2">
          <span className="me-3">Playtime :</span>
          {props.playtime}
        </div>
        <div className="mb-2">
          <span className="me-3">Website :</span>
          {props.website}
        </div>
        <div className="ratings" style={{ width: "400px" }}>
          <p>
            {props.recomended} Recomended | {props.meh} Meh | {props.skip} Skip
            | {props.exceptional} Exceptional
          </p>
        </div>
        <div className="mt-4">
          {isFavorite ? (
            ""
          ) : (
            <button
              className="btn btn-sm py-2 px-3 me-3 text-white fw-semibold"
              style={styleBtn}
              onClick={props.onclickWishlist}
            >
              Add To Wishlist
            </button>
          )}
          {props.btnTrailerMovie}
        </div>
      </div>
    </div>
  );
};

export default IntroDetailGame;
