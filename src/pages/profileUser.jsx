import { Container } from "react-bootstrap";
import NavigationBar from "../components/layouts/navigationBar";
import CardProfile from "../components/cardProfile/cardProifle";

const ProfileUser = () => {
  const bgProfile = {
    backgroundImage: "url('assets/background/bgProfileUser.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  return (
    <div className="ProfileUser" style={bgProfile}>
      <NavigationBar />
      <Container>
        <CardProfile />
      </Container>
    </div>
  );
};

export default ProfileUser;
