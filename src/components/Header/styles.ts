import styled from "styled-components";

export const Container = styled.header`
  padding: 2.4rem 1.6rem;
  background: var(--color-gray-100);
  display: flex;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: black;
    background: #7ae457;

    width: 195px;
    height: 3rem; //3rem = 48px
    padding: 0 2rem;

    border: 0;
    border-radius: 5px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  img {
    max-width: 160px;
    border-radius: 12px;
  }  
`;

