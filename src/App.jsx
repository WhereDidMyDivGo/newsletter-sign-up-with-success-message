import "./App.css";
import { useState } from "react";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import ConfirmationSuccess from "./components/ConfirmationSuccess/ConfirmationSuccess";

function App() {
  const [valid, setValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [fade, setFade] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailInput = e.target.elements.email;
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "" || !emailRegex.test(emailValue)) {
      setValid(false);
    } else {
      setValid(true);
      setFade(true);
      setTimeout(() => {
        setEmail(emailValue);
        setSubmitted(true);
        setFade(false);
      }, 300);
    }
  };

  const handleBack = () => {
    setFade(true);
    setTimeout(() => {
      setSubmitted(false);
      setFade(false);
    }, 300);
  };

  return (
    <main>
      <div className={`fade-wrapper ${fade ? "fade-out" : "fade-in"}`}>{submitted ? <ConfirmationSuccess email={email} setSubmitted={handleBack} /> : <SignUpForm valid={valid} handleSubmit={handleSubmit} />}</div>
    </main>
  );
}

export default App;
