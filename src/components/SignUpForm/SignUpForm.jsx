import { useState, useEffect } from "react";
import styled from "styled-components";
import signUpDesktop from "../../assets/images/illustration-sign-up-desktop.svg";
import signUpMobile from "../../assets/images/illustration-sign-up-mobile.svg";
import iconList from "../../assets/images/icon-list.svg";

function SignUpForm({ valid, handleSubmit }) {
  const [signUpImg, setSignUpImg] = useState(window.innerWidth <= 950 ? signUpMobile : signUpDesktop);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSignUpImg(window.innerWidth <= 950 ? signUpMobile : signUpDesktop);
    });
  }, []);

  return (
    <SignUpFormStyled valid={valid}>
      <img src={signUpImg} className="signup-img" />
      <div className="content">
        <div className="texts">
          <h1 className="title">Stay updated!</h1>
          <p className="description">Join 60,000+ product managers receiving monthly updates on:</p>
          <div className="bullets">
            <div className="group">
              <img src={iconList} />
              <p>Product discovery and building what matters</p>
            </div>
            <div className="group">
              <img src={iconList} />
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div className="group">
              <img src={iconList} />
              <p>And much more!</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="text-group">
              <label htmlFor="email">Email address</label>
              <p className="invalid">Valid email required</p>
            </div>
            <input id="email" placeholder="email@company.com" />
          </div>
          <button type="submit">
            <p>Subscribe to monthly newsletter</p>
          </button>
        </form>
      </div>
    </SignUpFormStyled>
  );
}

const SignUpFormStyled = styled.div`
  flex-shrink: 0;
  border-radius: 36px;
  background: #fff;
  box-shadow: 0px 15px 60px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  padding: 24px 24px 24px 0;

  @media (max-width: 950px) {
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;
    border-radius: 0;
    padding: 0;
  }

  .signup-img {
    height: 100%;

    @media (max-width: 950px) {
      width: 100%;
      border-radius: 0;
    }
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 0 64px;

    @media (max-width: 950px) {
      width: calc(100% - 48px);
      margin: 40px 24px;
    }

    .texts {
      width: 100%;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      gap: 24px;

      .title {
        color: #242742;
        font-feature-settings: "liga" off, "clig" off;
        font-size: 56px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%;

        @media (max-width: 950px) {
          font-size: 40px;
        }
      }

      .description {
        color: #242742;
        font-feature-settings: "liga" off, "clig" off;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }

      .bullets {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .group {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 16px;

          img {
            width: 21px;
            height: 21px;
            flex-shrink: 0;
          }

          p {
            color: #242742;
            font-feature-settings: "liga" off, "clig" off;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
          }
        }
      }
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 24px;

      .input-group {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;

        .text-group {
          width: 100%;
          display: flex;
          justify-content: space-between;

          label {
            color: #242742;
            font-feature-settings: "liga" off, "clig" off;
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            line-height: 150%;
          }

          .invalid {
            color: #ff6155;
            text-align: right;
            font-feature-settings: "liga" off, "clig" off;
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            line-height: 150%;
            display: ${({ valid }) => (valid ? "none" : "block")};
          }
        }

        input {
          width: 100%;
          height: 56px;
          padding: 0 0 0 24px;
          border: 1px solid ${({ valid }) => (valid ? "rgba(25, 24, 43, 0.25)" : "#ff6155")};
          border-radius: 8px;
          background: ${({ valid }) => (valid ? "#fff" : "rgba(255, 97, 85, 0.15)")};
          color: ${({ valid }) => (valid ? "#242742" : "#FF6155")};

          &::placeholder {
            color: "#242742";
            font-feature-settings: "liga" off, "clig" off;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            opacity: 0.5;
          }

          &:focus {
            outline: none;
            border: 1px solid ${({ valid }) => (valid ? "#242742" : "#FF6155")};
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
        animation: ${({ valid }) => (valid ? "none" : "shake 0.3s")};

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
    }
  }
    
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(5px);
    }
    75% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export default SignUpForm;
