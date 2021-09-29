import React from "react";
import "./_loginScreen.scss";

const LoginScreen = () => {
  return (
    <div className="login">
      <div className="login__container">
        <h1>Welcome to the YouTube Clone</h1>
        <img src="/images/youtube_logo.png" alt="logo" />
        <button>
          <img src="/images/google.svg" alt="google-logo" />
          Log in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
