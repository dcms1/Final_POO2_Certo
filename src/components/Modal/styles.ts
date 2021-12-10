import styled from 'styled-components'

export const Container = styled.form`
 h2{
    font-size: 1.5rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color:black;
 }

 input{
    width: 100%;
    padding: 0 1rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: var(--background);
    color:black;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
        color: var(--text-body)
    }

    & + input {
        margin-top: 1rem;
    }
 }

 select{
    margin-top: 1rem;
    width: 100%;
    padding: 0 1rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: var(--background);
    color:black;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
        color: var(--text-body)
    }

    & + input {
        margin-top: 1rem;
    }
 }

 button{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    margin-top: 1.5rem;
    background: var(--background);
    color:black;
    border: 0;
    font-size: 1rem;
    border-radius: 0.25rem;
    font-weight: 600;

    transition: 0.2s;

    &:hover{
        filter: brightness(0.9);
    }
 }
`