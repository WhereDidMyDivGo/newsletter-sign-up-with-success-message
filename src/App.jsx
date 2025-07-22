import "./App.css";
import signUpDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import iconList from "./assets/images/icon-list.svg";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();

    //
  };

  return (
    <main>
      <div className="sign-up">
        <img src={signUpDesktop} className="signUpDesktop" />
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
            <div>
              <label htmlFor="email">Email address</label>
              <input id="email" type="email" placeholder="email@company.com" required />
            </div>
            <button type="submit">
              <span className="label">Subscribe to monthly newsletter</span>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default App;
