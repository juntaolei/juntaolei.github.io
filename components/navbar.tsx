import Link from "next/link";
import styled from "styled-components";
import { useEffect, createRef } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = styled.nav`
  position: sticky;
  display: flex;
  flex-direction: column;
  height: 3.75rem;
  width: 100%;
  padding: 0;
  border-bottom: 2px solid ${props => props.theme.light};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 100%;

  @media(min-width: 768px) {
    max-width: 768px;
  }

  @media(max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Title = styled.a`
  font-weight: 200;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;
`;

const IconBtn = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background-color: transparent;
  transition: background-color 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.light};
  }

  &:focus {
    outline: none;
  }
`;

const Navbar: React.FC<{ open: boolean, toggleMenu: () => void }> = ({ open, toggleMenu }) => {
  const navRef = createRef<HTMLDivElement>();
  const menuBtn = createRef<HTMLButtonElement>();

  useEffect(() => {
    if (navRef.current && menuBtn.current) {
      navRef.current.classList.toggle("underlay", open);
      menuBtn.current.classList.toggle("disabled", open);
    }
  }, [open]);

  return (
    <Nav ref={navRef} aria-label="main navigation">
      <NavItems aria-label="navigation items">
        <Link href="/">
          <Title aria-label="site brand">Jun Tao Lei</Title>
        </Link>
        <IconBtn ref={menuBtn} onClick={toggleMenu} aria-label="menu button">
          <FontAwesomeIcon icon={faBars} size="lg" aria-label="menu button icon" />
        </IconBtn>
      </NavItems>
    </Nav>
  );
};

export default Navbar;
