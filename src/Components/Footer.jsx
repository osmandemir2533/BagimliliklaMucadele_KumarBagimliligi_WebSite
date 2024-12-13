import React from "react";
import { Row, Col, Container } from "reactstrap";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

// Styled Components for Footer
const StyledFooter = styled.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 20px 0;
  margin-top: 30px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

const FooterBrand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #ecf0f1;
  &:hover {
    color: #3498db;
  }
`;

const FooterLinks = styled.div`
  text-align: center;
  margin-bottom: 20px;

  a {
    color: #ecf0f1;
    margin: 0 15px;
    font-size: 1rem;
    text-decoration: none;
    &:hover {
      color: #3498db;
    }
    transition: color 0.3s ease;
  }
`;

const FooterSocialIcons = styled.div`
  text-align: center;
  font-size: 1.5rem;

  a {
    color: #ecf0f1;
    margin: 0 10px;
    &:hover {
      color: #3498db;
    }
    transition: color 0.3s ease;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Row>
          <Col md="12">
            <FooterBrand>Kumar Bağımlılığı Projesi</FooterBrand>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FooterLinks>
              <a href="/home">Anasayfa</a>
              <a href="/about">Hakkımızda</a> 
              <a href="/resources">Kaynaklar</a>
            </FooterLinks>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FooterSocialIcons> 
              <a href="https://www.instagram.com/emremeralzn" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/emre-meralsm/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </FooterSocialIcons>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
};

export default Footer;