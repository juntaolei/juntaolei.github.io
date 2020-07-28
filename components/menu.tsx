import Link from "next/link";
import styled from "styled-components";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const MenuDiv = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 16rem;
  z-index: 10;
  background-color: ${props => props.theme.white};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transform: ${props => props.open ? "translateX(0%)" : "translateX(-100%)"};
  transition: transform 300ms ease-in-out;
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.75rem 1.75rem;

  * {
    margin: 0.25rem 0;
    background-color: transparent;
    cursor: pointer;
  }
`;

const MenuLink = styled.a`
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: 300ms;

  &:hover {
    background-color: ${props => props.theme.light};
    transform: scale(1.1);
  }
`;

const OutsideLinks = styled.div`
  display: flex;
  padding: 0.2rem 0;
  border-top: 2px solid ${props => props.theme.light};

  a {
    padding: 0.5rem;
    border: none;
    border-radius: 0.375rem;
    color: inherit;
    cursor: pointer;
    margin-right: 0.5rem;
  }
  
  a:hover {
    background-color: ${props => props.theme.light};
    transform: scale(1.1);
  }
`;

const Menu: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <MenuDiv open={open} aria-label="navigation menu drawer">
      <MenuContent aria-label="navigation menu inner content">
        <Link href="/">
          <MenuLink aria-label="link to home page">
            Home
          </MenuLink>
        </Link>
        <Link href="/projects">
          <MenuLink aria-label="link to projects page">
            Projects
          </MenuLink>
        </Link>
        <OutsideLinks>
          <a href="https://github.com/juntaolei" aria-label="link to GitHub">
            <FontAwesomeIcon icon={faGithub} size="lg" aria-label="GitHub icon" />
          </a>
          <a href="https://www.linkedin.com/in/juntaolei" aria-label="link to LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="lg" aria-label="LinkedIn icon" />
          </a>
          <a href="mailto:contact@juntaolei.com" aria-label="shortcut to email">
            <FontAwesomeIcon icon={faEnvelope} size="lg" aria-label="email icon" />
          </a>
        </OutsideLinks>
      </MenuContent>
    </MenuDiv>
  );
};

export default Menu;
