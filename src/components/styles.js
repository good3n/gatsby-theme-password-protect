import styled from "styled-components"

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .gatsby-image-wrapper {
    position: fixed;
    height: 100vh;
    width: 100vw;
  }

  form {
    background: #fff;
    border-radius: 24px;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    max-width: 400px;
    position: relative;
    z-index: 99;
  }

  input {
    background: #e3eaf1;
    border-radius: 6px;
    border: none;
    padding: 16px 10px;
    outline: 0;
  }
`