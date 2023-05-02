import { Container } from "react-bootstrap";
import "./layouts.css";

const Footer = () => {
  return (
    <footer className="text-center text-white mt-lg-5 px-5 py-5">
      <Container className="d-flex justify-content-between align-items-center">
        <div className="footerBrand d-flex align-items-center">
          <img
            src="/assets/logo/logo.png"
            alt=""
            width="90px"
            className="me-2"
          />
          <h3 className="fw-semibold">VGame</h3>
        </div>
        <div className="socialMedia">
          <h5>Social Media</h5>
          <div>
            <table>
              <tr>
                <td>
                  <img
                    src="/assets/icon/twitter.svg"
                    alt="twitter"
                    width="35px"
                  />
                </td>
                <td>
                  <a href="">@vgameofc</a>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="/assets/icon/instagram.svg"
                    alt="instagram"
                    width="35px"
                  />
                </td>
                <td>
                  <a href="">@vgameofc</a>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="someLink d-flex flex-column text-start">
          <a href="" className="text-decoration-none text-white mb-2">
            FAQ
          </a>
          <a href="" className="text-decoration-none text-white mb-2">
            Service
          </a>
          <a href="" className="text-decoration-none text-white mb-2">
            Contact
          </a>
          <a href="" className="text-decoration-none text-white">
            Support
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
