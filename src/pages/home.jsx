import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import NavigationBar from "../components/layouts/navigationBar";
import HomeJumbotron from "../components/jumbotron/jumbotron";
import ListGame from "../components/listGame/listGame";
import Footer from "../components/layouts/footer";

const Home = () => {
  const h2Style = {
    borderLeft: "3px solid #fff",
    paddingLeft: "17px",
    fontWeight: "600",
  };

  return (
    <React.Fragment>
      <NavigationBar />
      <div className="home">
        <HomeJumbotron />
        <Container>
          <h2 style={h2Style} className="mt-3 mb-4">
            Genres
          </h2>
          <div className="genres d-flex justify-content-start gap-3 flex-wrap">
            <Link to="/genre/action">Action</Link>
            <Link to="/genre/indie">Indie</Link>
            <Link to="/genre/adventure">Adventure</Link>
            <Link to="/genre/rpg">RPG</Link>
            <Link to="/genre/strategy">Strategy</Link>
            <Link to="/genre/shooter">Shooter</Link>
            <Link to="/genre/casual">Casual</Link>
            <Link to="/genre/simulation">Simulation</Link>
            <Link to="/genre/puzzle">Puzzle</Link>
            <Link to="/genre/arcade">Arcade</Link>
            <Link to="/genre/platformer">Platformer</Link>
            <Link to="/genre/massively-multiplayer">Massively Multiplayer</Link>
            <Link to="/genre/sports">Sports</Link>
            <Link to="/genre/fighting">Fighting</Link>
            <Link to="/genre/family">Family</Link>
            <Link to="/genre/board-games">Board Games</Link>
            <Link to="/genre/educational">Educational</Link>
            <Link to="/genre/card">Card</Link>
          </div>
        </Container>
        <Container className="mt-5" id="allgame">
          <h2 style={h2Style}>All Games</h2>
          <ListGame />
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
