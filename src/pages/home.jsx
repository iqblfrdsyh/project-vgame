import { Container } from "react-bootstrap";
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
