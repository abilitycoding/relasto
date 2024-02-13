import {
  NavDropdown,
  Navbar,
  Nav,
  Container,
  Button,
  Form
} from "react-bootstrap";
import "../Styles/Navbar.css";

function RelastoNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="d-flex gap-3 align-items-center">
          <img
            src="https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/6426c505237e74001426cac8/appSource/images/img_home.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP5YW2GMK2%2F20240213%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240213T044223Z&X-Amz-Expires=25200&X-Amz-Signature=e21ae1b80f7b11d50ba7120f2680cfba193577a936819c0a286f773e42b555aa&X-Amz-SignedHeaders=host"
            alt=""
          />
          <p className="text-left font-markoone text-orange-A700 text-xl w-auto m-0">
            Relasto
          </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/listing">Listing</Nav.Link>
            <NavDropdown title="Agent" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/agent">Agents</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/property">Property</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Nav>
            <div className="d-flex align-items-center">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-dark">Search</Button>
              </Form>
            </div>
            <Nav.Link href="/login">
              <Button variant="dark">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default RelastoNavbar;
