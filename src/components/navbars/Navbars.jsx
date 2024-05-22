import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";


const NavButton = ({ text, onClickHandler }) => {
  return (
    <span className="nav-button" onClick={onClickHandler}>
      {text}
    </span>
  );
};

export const Navbars = () => {
  const navigate = useNavigate()

  const handleNavigateToContPage = () => {
    navigate('/content')
  }

  const handleNavigateToAuthPage = () => {
    navigate('/auth')
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand onClick={handleNavigateToContPage} style={{ fontSize: '1.5rem', cursor: 'pointer' }}>trivamos</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-1 my-lg-0">
              <Nav.Link href="#action1" style={{ fontSize: '1.2rem' }}>Favoritos</Nav.Link>
              <Nav.Link onClick={handleNavigateToAuthPage} style={{ fontSize: '1.2rem', cursor: 'pointer' }}>Iniciar sesion</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
