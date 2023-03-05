import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { auth } from "../../utils/Firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="h-screen flex items-center w-screen justify-center flex-col space-y-6">
        <h2 className="text-4xl">Log In as Admin</h2>
      <form className="flex flex-col space-y-4 " onSubmit={loginHandler}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <Button variant="outlined" type="submit">Login</Button>
      </form>
    </div>
  );
};

export default AdminLogin;
