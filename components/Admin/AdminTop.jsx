import React from "react";
import { auth } from "../../utils/Firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { Button } from "@mui/material";
const AdminTop = ({ user }) => {
  const handler = () => {
    signOut(auth);
  };
  return (
    <div>
      <div className="text-xl text-center bg-yellow-50 p-2 font-extrabold">
        Logged in as {user.email}
        <Button
          onClick={handler}
          variant="outlined"
          className="text-black font-semibold"
        >
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default AdminTop;
