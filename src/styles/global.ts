import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap" rel="stylesheet">

:root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --green: #33cc95;
    --blue: #5429cc;
    --blue-light: #6933ff;
  
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #FFFFFF;
  }

* {
    padding: 0;
    margin: 0;
    box-sizing:border-box;
    font-family: Roboto, sans-serif;
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  
  // rem = 1rem = 16px;
  // 1080px - 93,75%
  // 16x - 100%
  // x - 93,75%
  // x = 15px
  
  // 720px% - 87,5%
  // 16px - 100%
  //  x  - 87,5%
  // x = 14px;
  body, input, textarea, button {
    font-family: 'Poppins' sans-serif;
    font-weight: 400;
  }

button {
    cursor:pointer;
}

.react-modal-overlay {

    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

.react-modal-content {
    width: 100%;
    max-width: 576px;
    color: black;
    background: #7ae457;
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
}


`;
