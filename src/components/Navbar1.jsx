import React, { useRef } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Navbar1 = () => {
  const searchRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchRef.current.value);
  };

  return (
    <>
      <Navbar collapseOnSelect expand='md' bg='clear' variant='dark'>
        <Navbar.Brand href='#home'>NixTech</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
            <NavDropdown title='Dropdown' id='collapsible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline onSubmit={handleSearch}>
            <FormControl
              type='text'
              placeholder='Search'
              className='mr-sm-2'
              ref={searchRef}
            />
            <Button variant='outline-primary'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navbar1;
