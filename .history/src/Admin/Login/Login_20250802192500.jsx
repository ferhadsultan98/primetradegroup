import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Server";
import "./Login.scss";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/services");
    } catch (error) {
      setError(t("login.error"));
      console.error("Error logging in: ", error);
    }
  };

  return (
    <div className="loginContainer">
      <Helmet>
        <title>{t("login.title")} - PRIME TRADE GROUP MMC</title>
        <meta name="author" content="PRIME TRADE GROUP MMC" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="containerWrapper">
        <div className="loginCard">
          <h2 className="loginTitle">{t("login.title")}</h2>
          <p className="loginSubtitle">{t("login.subtitle")}</p>

          <div className="loginForm">
            <div className="inputGroup">
              <label htmlFor="email" className="inputLabel">
                {t("login.email")}
              </label>
              <input
                type="email"
                id="email"
                className="inputField"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("login.email_placeholder")}
                required
              />
            </div>

            <div className="inputGroup">
              <label htmlFor="password" className="inputLabel">
                {t("login.password")}
              </label>
              <input
                type="password"
                id="password"
                className="inputField"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t("login.password_placeholder")}
                required
              />
            </div>

            {error && <p className="errorMessage">{error}</p>}

            <button className="loginButton" onClick={handleLogin}>
              {t("login.button")}
            </button>

            <div className="additionalLinks">
              <p className="linkText">
                {t("login.no_account")}{" "}
                <span
                  className="link"
                  onClick={() => navigate("/register")}
                >
                  {t("login.register")}
                </span>
              </p>
              <p className="linkText">
                <span
                  className="link"
                  onClick={() => navigate("/forgot-password")}
                >
                  {t("login.forgot_password")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;