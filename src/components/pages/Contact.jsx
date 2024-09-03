import { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Form() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "userName") {
      setUserName(value);
    } else if (name === "text") {
      setText(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    }

    alert(`Email submitted: ${email}`);
    setEmail("");
    setText("");
    setErrorMessage("");
  };

  return (
    <>
      <div
        className="container text-center position-absolute top-50 start-50 translate-middle"
        style={{
          width: '50%',
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          margin: 0,
        }}
      >
        <h1
          align="center"
          className="text-bg-primary p-3"
          style={{ borderRadius: "10px" }}
        >
          Contact Me
        </h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            className="form-control"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="E-mail"
          />
          <br />
          <input
            className="form-control"
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
          <br />
          <textarea
            className="form-control"
            value={text}
            name="text"
            onChange={handleInputChange}
            placeholder="Text"
          />
          <br />
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>

      {/* Footer */}

      <div
        className="card"
        style={{
          width: "100%",
          height: "100px",
          background: "black",
          display: "flex",
          position: "fixed",
          bottom: "0",
        }}
      >
        <div
          style={{
            marginTop: "10px",
            width: "100%",
            height: "100%",
            textAlign: "center",
          }}
        >
          <button
            className="bg-primary"
            style={{ marginRight: "20px", borderRadius: "10px" }}
          >
            <a
              href="https://github.com/heropon1k"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-github"
                style={{ margin: "20px", color: "black" }}
              ></i>
            </a>
          </button>

        </div>
      </div>
    </>
  );
}

export default Form;