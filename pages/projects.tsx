import Head from "next/head";
import { Fragment } from "react";
import styled from "styled-components";

const Cards = styled.div`
  padding: 5rem 1.5rem;
  display: grid;

  @media(min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  overflow: hidden;
  border-radius: 0.25rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  @media(min-width: 768px) {
    max-width: 24rem;
  }

  h1 {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem 0 1.5rem;
  }

  hr {
    margin: 0 1.5rem;
    border: 0;
    height: 2px;
    background-color: ${props => props.theme.light};
  }

  p {
    flex: 1 0 auto;
    font-weight: 300;
    padding: 0 1.5rem;
  }

  a {
    text-align: center;
    margin: 0.5rem 1.5rem;
    padding: 0.5rem 0;
    border: 0;
    border-radius: 0.375rem;
    cursor: pointer;
    background-color: transparent;
    text-decoration: none;
    color: inherit;
    transition: background-color 300ms ease-in-out;
  }

  a:focus {
    outline: none;
  }

  a:hover {
    background-color: ${props => props.theme.light};
  }
`;

const Projects: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Jun Tao Lei - Projects</title>
        <meta property="og:title" content="Projects Page" key="projects" />
      </Head>
      <Cards aria-label="cards container">
        <Card>
          <h1>Graphics Engine</h1>
          <hr />
          <p>
            A graphics engine written in C that can create an image or a GIF from an MDL file. This engine supports mesh generation from .obj files and phong lighting.
          </p>
          <hr />
          <a href="https://github.com/juntaolei/graphics_engine">
            View Source
          </a>
        </Card>
      </Cards>
    </Fragment>
  );
};

export default Projects;
