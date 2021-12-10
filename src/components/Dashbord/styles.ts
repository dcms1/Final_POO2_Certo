import styled  from "styled-components";

export const Container = styled.div`
    margin: 4rem;
    display: flex;
    table {
    width: 100%;
    border-spacing: 0 0.5rem;
    margin-right: 0.5rem;
   
    h4 {
        color: black;
        padding: 1rem 2rem;
        border: 0;
        background: var(--shape);
        color: var(--text-body);
        border-radius: 0.25rem;
        margin: 0.5rem
    }
    }
`;
export const Action = styled.div`
  color: black;;
  display: flex;
  justify-content: end;

  a {
    text-decoration: none;
    display: flex;
    justify-content: end;
    margin-right: 10px;
    margin-left: 10px;
  }

  .buttonDelete,
  a {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    margin-top: 1.5rem;
    background: var(--background);
    color: #fff;
    border: 0;
    font-size: 1rem;
    border-radius: 0.25rem;
    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .button{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;