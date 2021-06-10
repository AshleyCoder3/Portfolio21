import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavItem from "@material-tailwind/react/NavItem";
import NavLink from "@material-tailwind/react/NavLink";
import NavbarInput from "@material-tailwind/react/NavbarInput";
import Icon from "@material-tailwind/react/Icon";

export default function Navigation() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar color="lightBlue" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarBrand>Ashley Burns</NavbarBrand>
          <NavbarToggler
            color="white"
            onClick={() => setOpenNavbar(!openNavbar)}
            ripple="light"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav leftSide>
            <NavItem active="light" ripple="light">
              <Icon name="language" size="xl" />
                        Home
                    </NavItem>
            <NavLink href="#navbar" ripple="light">
              <Icon name="info" size="xl" />
                        About
                    </NavLink>
            <NavLink href="#navbar" ripple="light">
              <Icon name="book" size="xl" />
                        Projects
                    </NavLink>
            <NavItem ripple="light">
              <Icon name="phone" size="xl" />
                        Contact
                    </NavItem>
          </Nav>
          <NavbarInput type="text" placeholder="Search here" />
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}