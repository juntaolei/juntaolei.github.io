import styled from "styled-components";
import { useRef, useState, useEffect, RefObject, createRef } from "react";

import Menu from "./menu";
import Navbar from "./navbar";

const Div = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const Main = styled.main`
  margin: 0 auto;
  height: calc(100% - 3.75rem);

  @media(min-width: 768px) {
    max-width: 768px;
  }
  
  @media(max-width: 768px) {
    padding: 0 1rem;
  }
`;

const useOnclickOutside = (ref: RefObject<HTMLDivElement>, closeMenu: () => void) => {
  useEffect(() => {
    const eventListener = (event: MouseEvent) => {
      if (ref.current && event.target && ref.current.contains(event.target as Node)) {
        return;
      }
      closeMenu();
    };

    document.addEventListener("mousedown", eventListener);

    return () => {
      document.removeEventListener("mousedown", eventListener);
    };
  }, [ref, closeMenu]);
};

const Layout: React.FC<React.ReactNode> = ({ children }) => {
  const mainRef = createRef<HTMLDivElement>();
  const nodeRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  useOnclickOutside(nodeRef, () => setOpen(false));
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.classList.toggle("underlay", open);
    }
  }, [open, mainRef]);

  return (
    <Div aria-label="main layout">
      <Navbar open={open} toggleMenu={() => setOpen(true)} />
      <div ref={nodeRef} aria-label="menu container">
        <Menu open={open} />
      </div>
      <Main ref={mainRef}>{children}</Main>
    </Div>
  );
};

export default Layout;
