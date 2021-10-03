import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { login } from "../../store/actions/authActions";
import "./_loginScreen.scss";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const loginClickHandler = () => {
    dispatch(login());
  };

  const accessToken = useSelector((state) => state.auth.accessToken);
  const history = useHistory();
  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  return (
    <div className="login">
      <div className="login__container">
        <h1>Welcome to the YouTube Clone</h1>
        <img src="/images/youtube_logo.png" alt="logo" />
        <button onClick={loginClickHandler}>
          <img src="/images/google.svg" alt="google-logo" />
          Log in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
