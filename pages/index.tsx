import Link from "next/link";
import Head from "next/head";
import { Fragment } from "react";
import styled from "styled-components";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 1.5rem 0 1.5rem;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  width: 60%;
`;

const Divider = styled.hr`
  width: 100%;
  border: 0;
  height: 2px;
  margin: 0.5rem 0;
  background: linear-gradient(to right, ${props => props.theme.sizzlingred}, ${props => props.theme.slateblue});
`;

const IconsDiv = styled.div`
  display: flex;
  padding: 0.5rem 0;
  background-color: transparent;

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
  }
`;

const SmallDiv = styled.div`
  display: flex;
  padding: 2rem 1.5rem 0 1.5rem;
`;

const ButtonLink = styled.a`
  padding: 0.75rem 1rem;
  color: ${props => props.theme.white};
  border-radius: 0.375rem;
  cursor: pointer;
  background-color: ${props => props.theme.brightblue};
  transition: 300ms;

  &:hover {
    transform: scale(1.1);
  }
  
  &:focus {
    outline: none;
  }
`;

const Index: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Jun Tao Lei | Home</title>
        <meta property="og:title" content="Home Page" key="home" />
      </Head>
      <Div>
        <Title>Hi, I'm an undergraduate at Cornell University studying computer science and linguistics.</Title>
        <Divider />
        <IconsDiv>
          <a href="https://github.com/juntaolei" aria-label="link to GitHub">
            <FontAwesomeIcon icon={faGithub} size="lg" aria-label="GitHub icon" />
          </a>
          <a href="#linkedin" aria-label="link to LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="lg" aria-label="LinkedIn icon" />
          </a>
          <a href="mailto:contact@juntaolei.com" aria-label="shortcut to email">
            <FontAwesomeIcon icon={faEnvelope} size="lg" aria-label="email icon" />
          </a>
        </IconsDiv>
      </Div>
      <SmallDiv>
        <Link href="/projects">
          <ButtonLink aria-label="link to projects page">View Projects</ButtonLink>
        </Link>
      </SmallDiv>
    </Fragment>
  );
};

export default Index;
