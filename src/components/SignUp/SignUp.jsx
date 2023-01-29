import "./SignUp.scss";

const SignUp = () => {
  const singUp = () => {
    window.location.href = window.location.origin + "/login";
  };
  return (
    <div className="signin-wrapper">
      <h1>Real Time Chat</h1>
      <p>log in to your account</p>
      <input placeholder="enter your name" />
      <input placeholder="enter your email" />
      <input placeholder="enter your password" />
      <input placeholder="repeat your password" />
      <button>Create account</button>
      <a href="#x3" onClick={singUp}>
        Sign in
      </a>
    </div>
  );
};
export { SignUp };
