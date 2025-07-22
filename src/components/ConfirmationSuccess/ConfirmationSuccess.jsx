import styled from "styled-components";

import iconSuccess from "../../assets/images/icon-success.svg";

function ConfirmationSuccess({ email, setSubmitted }) {
  function handleClick() {
    setSubmitted(false);
  }

  return (
    <ConfirmationSuccessStyled>
      <img src={iconSuccess} className="icon-success" />
      <div className="texts">
        <h1 className="title">Thanks for subscribing!</h1>
        <p className="description">
          A confirmation email has been sent to <span>{email}</span>. Please open it and click the button inside to confirm your subscription.
        </p>
      </div>
      <button onClick={handleClick}>
        <p>Dismiss message</p>
      </button>
    </ConfirmationSuccessStyled>
  );
}

const ConfirmationSuccessStyled = styled.div`
  width: 504px;
  flex-shrink: 0;
  border-radius: 36px;
  background: #fff;
  box-shadow: 0px 15px 60px 0px rgba(0, 0, 0, 0.25);
  padding: 48px 64px 64px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 950px) {
    width: 100vw;
    min-height: 100vh;
    border-radius: 0;
    padding: 149px 24px 40px;
  }

  .icon-success {
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    animation: popIn 0.6s 0.5s both;
  }

  .texts {
    display: flex;
    flex-direction: column;
    gap: 24px;

    .title {
      color: #242742;
      font-feature-settings: "liga" off, "clig" off;
      font-size: 56px;
      font-style: normal;
      font-weight: 700;
      line-height: 100%;
    }

    .description {
      color: #242742;
      font-feature-settings: "liga" off, "clig" off;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;

      span {
        font-weight: 700;
      }
    }
  }

  button {
    position: relative;
    overflow: hidden;
    transition: 0.5s;
    border: none;
    cursor: pointer;
    width: 100%;
    height: 56px;
    border-radius: 8px;
    background: #242742;

    @media (max-width: 950px) {
      margin-top: auto;
    }

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(204deg, #ff6a3a 0%, #ff527b 100%);
      opacity: 0;
      transition: 0.5s;
      z-index: 0;
      pointer-events: none;
    }

    &:hover::before {
      opacity: 1;
    }

    &:hover {
      box-shadow: 0px 16px 32px 0px rgba(255, 97, 85, 0.5);
    }

    p {
      position: relative;
      z-index: 1;
      color: #fff;
      text-align: center;
      font-feature-settings: "liga" off, "clig" off;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 150%;
    }
  }

  @keyframes popIn {
    0% {
      transform: scale(0.3);
      opacity: 0;
    }
    60% {
      transform: scale(1.1);
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default ConfirmationSuccess;
