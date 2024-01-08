import styled from "styled-components";
import Main from "./Main";
import Cards from "./Cards";

export const StyledMain = styled(Main)`
  display: flex;
  flex-direction: column;
  margin-top: 5em;

  section {
    display: flex;
    gap: 7em;
    flex-wrap: wrap;
  }
  article {
    width: 47%;
    flex-grow: 1;
  }

  h1 {
    font-size: 5.5rem;
    margin-bottom: 0.3em;
  }
  p {
    font-size: 2rem;
    font-weight: 400;
  }

  article > div > img {
    width: 100%;
    border-radius: 5px;
  }

  button {
    margin-top: 2.5em;
    padding: 0.2em 0.6em;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    border: none;
    font-size: 2.3rem;
    font-weight: 600;
    background: var(--tertiary-color);
    border-radius: 5px;
    color: var(--primary-color);
    box-shadow: 5px 5px 0 var(--secondary-color);
    transition: 0.3ms;
    cursor: pointer;

    &:hover {
      transition: 0.3s;
      box-shadow: 9px 9px 0 var(--secondary-color);
    }
  }
  section {
    &:nth-child(2) {
      gap: 0rem;
    }
  }

  @media (max-width: 425px) {
    article > div > img {
      display: none;
    }
    h1 {
      font-size: 4.5rem;
    }
  }
  @media (max-width: 375px) {
    h1 {
      font-size: 4rem;
    }
  }
`;
