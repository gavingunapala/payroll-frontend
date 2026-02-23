import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [rank, setRank] = useState("");
  const [username, setUsername] = useState("");
  const [userRole, setUserRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      rank,
      username,
      userRole,
      password,
      confirmPassword,
    };
    console.log("Signup form submitted:", formData);
    // TODO: connect to signup API
  };

  // Hard-coded roles for now (will come from Backend later)
  const ROLE_OPTIONS = ["admin", "clark", "user"];

  const PersonIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ color: "#87CEEB" }}
    >
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );

  const LockIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ color: "#87CEEB" }}
    >
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
    </svg>
  );

  const handleEmblemError = (e) => {
    const el = e.target;
    if (el.dataset.triedSvg) {
      el.style.display = "none";
      if (el.nextSibling) el.nextSibling.classList.remove("d-none");
    } else {
      el.dataset.triedSvg = "1";
      el.src = `${process.env.PUBLIC_URL}/Images/SriLankaAirForceemblem.svg`;
    }
  };

  const bgStyle = { backgroundColor: "#244BC5" };
  const circlesStyle = {
    height: "auto",
    objectFit: "contain",
    objectPosition: "left bottom",
  };
  const containerStyle = { maxWidth: "420px" };
  const emblemStyle = { maxHeight: "180px" };
  const inputGroupStyle = { border: "1px solid #87CEEB" };
  const inputStyle = { border: "none", outline: "none" };
  const selectStyle = { border: "none", outline: "none", backgroundColor: "transparent" };

  return (
    <div
      className="h-100 d-flex align-items-center justify-content-center position-relative overflow-hidden"
      style={bgStyle}
    >
      <img
        src={`${process.env.PUBLIC_URL}/Images/LoginIcon.svg`}
        alt=""
        className="position-absolute opacity-75"
        style={{ ...circlesStyle, left: "0px", bottom: "-150px" }}
        aria-hidden
      />

      <div className="position-relative z-1 w-100" style={containerStyle}>
        <div className="text-center mb-4">
          <img
            src={`${process.env.PUBLIC_URL}/Images/SriLankaAirForceemblem.png`}
            alt="Sri Lanka Air Force"
            className="img-fluid mb-4"
            style={emblemStyle}
            onError={handleEmblemError}
          />
          <div className="d-none small text-white">
            Sri Lanka Air Force emblem
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-transparent rounded">
          <div className="mb-3">
            <div
              className="input-group input-group-lg rounded bg-white"
              style={inputGroupStyle}
            >
              <span className="input-group-text border-0 bg-white">
                <PersonIcon />
              </span>
              <input
                type="text"
                className="form-control border-0"
                placeholder="RANK"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
                style={inputStyle}
                aria-label="Rank"
              />
            </div>
          </div>

          <div className="mb-3">
            <div
              className="input-group input-group-lg rounded bg-white"
              style={inputGroupStyle}
            >
              <span className="input-group-text border-0 bg-white">
                <PersonIcon />
              </span>
              <input
                type="text"
                className="form-control border-0"
                placeholder="USERNAME"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={inputStyle}
                aria-label="Username"
              />
            </div>
          </div>

          <div className="mb-3">
            <div
              className="input-group input-group-lg rounded bg-white"
              style={inputGroupStyle}
            >
              <span className="input-group-text border-0 bg-white">
                <PersonIcon />
              </span>
              <select
                className="form-select border-0 form-control"
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                style={selectStyle}
                aria-label="User role"
              >
                <option value="">USER ROLE</option>
                {ROLE_OPTIONS.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-3">
            <div
              className="input-group input-group-lg rounded bg-white"
              style={inputGroupStyle}
            >
              <span className="input-group-text border-0 bg-white">
                <LockIcon />
              </span>
              <input
                type="password"
                className="form-control border-0"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
                aria-label="Password"
              />
            </div>
          </div>

          <div className="mb-3">
            <div
              className="input-group input-group-lg rounded bg-white"
              style={inputGroupStyle}
            >
              <span className="input-group-text border-0 bg-white">
                <LockIcon />
              </span>
              <input
                type="password"
                className="form-control border-0"
                placeholder="CONFIRM PASSWORD"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={inputStyle}
                aria-label="Confirm password"
              />
            </div>
          </div>

          <div className="d-grid mb-2">
            <button
              type="submit"
              className="btn btn-light btn-lg fw-bold text-primary rounded py-3"
            >
              SIGN UP
            </button>
          </div>

          <div className="text-center">
            <Link to="/" className="text-white text-decoration-none small">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
