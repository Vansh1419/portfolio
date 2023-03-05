import React from "react";
// import { createAdmin ,auth } from '../../utils/Firebase/firebaseConfig'
import { useAuthState } from "react-firebase-hooks/auth";
import AdminLogin from "../../components/Admin/AdminLogin";
import AdminPanel from "../../components/Admin/AdminPanel";
import { auth } from "../../utils/Firebase/firebaseConfig";
const adimnPanel = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <div>loading...</div>;
  }
  if (!user) {
    return <AdminLogin />;
  }
  return <AdminPanel user={user} />;
};

export default adimnPanel;
