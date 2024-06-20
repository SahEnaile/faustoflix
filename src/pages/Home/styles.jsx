import styled from "styled-components";

export const Container = styled.div`
  h1 {
    text-align: center;
    margin: 4rem 0;
    text-transform: uppercase;
    font-size: 39pt;
    background: -webkit-linear-gradient(45deg, #f24f00, #f24f00, #ffa540);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 1rem;
    width: 180px;
    margin-bottom: 2rem;
  }

  span {
    background: -webkit-linear-gradient(45deg, #f24f00, #f24f00, #ffa540);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    font-size: 120%;
  }

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }
`;
