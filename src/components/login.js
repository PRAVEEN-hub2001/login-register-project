import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Loading, setloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/profile";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
      setloading(false);
    } catch (error) {
      setloading(false);
      toast.error("User login Failed!", {
        position: "bottom-center",
      });
    }
  };

  return (
    <>
      {!Loading ? (
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            New user <a href="/register">Register Here</a>
          </p>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Login;
