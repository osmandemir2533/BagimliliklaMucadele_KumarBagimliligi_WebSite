import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap";
import styled from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";

const StyledNavbar = styled(Navbar)`
  background-color: #2c3e50;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Brand = styled(NavbarBrand)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ecf0f1;
  &:hover {
    color: #3498db;
  }
`;

const StyledNav = styled(Nav)`
  margin: 0 auto; /* Ortalamak için */
`;

const StyledNavItem = styled(NavItem)`
  a {
    font-size: 1rem;
    color: #ecf0f1;
    margin: 0 15px;
    &:hover {
      color: #3498db;
    }
    transition: color 0.3s ease;
  }
`;

const TogglerIcon = styled.span`
  color: #ecf0f1;
  font-size: 1.5rem;
`;

const KumarNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <StyledNavbar expand="md" fixed="top">
      <Brand href="/">Kumar Bağımlılığı Projesi</Brand>
      <NavbarToggler onClick={toggle}>
        <TogglerIcon>{isOpen ? "✖" : "☰"}</TogglerIcon>
      </NavbarToggler>
      <Collapse isOpen={isOpen} navbar>
        <StyledNav className="mx-auto" navbar>
          <StyledNavItem>
            <NavLink href="/home">Home</NavLink>
          </StyledNavItem>
          <StyledNavItem>
            <NavLink href="/about">Hakkımızda</NavLink>
          </StyledNavItem>
          <StyledNavItem>
            <NavLink href="/resources">Kaynaklar</NavLink>
          </StyledNavItem>
        </StyledNav>
      </Collapse>
    </StyledNavbar>
  );
};

export default KumarNavbar;