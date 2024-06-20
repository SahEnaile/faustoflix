import styled from "styled-components";

export const Container = styled.div`
  h1 {
    margin: 3rem 0;
    background: -webkit-linear-gradient(45deg, #f24f00, #f24f00, #ffa540);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 450px;
    border-radius: 1rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
    max-width: 50%;
  }

  span {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%;
  }

  .release {
    opacity: 0.4;
  }

  button {
    background: linear-gradient(45deg, #f24f00, #ffa540);
    cursor: pointer;
    border-radius: 2rem;
    width: 200px;
    height: 60px;
    color: #111111;
    font-weight: bold;
    font-size: 16pt;
  }

  button:hover {
    transition: 2s;
    color: #f24f00;
    border: 4px solid #f24f00;
    background: white;
  }
`;
