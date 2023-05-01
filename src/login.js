import "./login.css";

function Login() {
  return (
    <>
      <div className="container">
        <h1 id="signInHeading"> Login Form</h1>

        <form action="" id="form">
          <input
            type="text"
            id="email"
            className="textbox"
            placeholder="Email"
            required
          />

          <input
            type="password"
            id="password"
            className="textbox"
            placeholder="Password"
            required
          />
          <br />
          <br />

          <input
            type="button"
            value="Submit"
            id="signInBtn"
            onclick="signIn()"
          />
          <br />
        </form>
      </div>
    </>
  );
}

export default Login;
