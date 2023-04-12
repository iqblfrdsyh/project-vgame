const SearchBar = (props) => {
  const style = {
    padding: "7px",
    paddingLeft: "42px",
    width: "320px",
    outline: "2px solid rgb(255, 255, 255)",
    borderRadius: "15px",
    backgroundImage: "url(assets/icon/search.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "10px",
    backgroundSize: "25px",
  };

  return (
    <div className={props.className}>
      <input
        type="search"
        name="search"
        placeholder="Search game...."
        style={style}
        onChange={props.onChange}
      />
    </div>
  );
};

export default SearchBar;
