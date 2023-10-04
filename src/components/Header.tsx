import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          RADIODENT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            activeKey={window.location.pathname}
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/inicio">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/contato">
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
