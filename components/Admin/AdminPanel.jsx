import Head from "next/head";
import React from "react";
import { Button, Paper } from "@mui/material";
import Link from "next/link";
import { signOut } from "firebase/auth";
import AdminPanelCard from "./AdminPanelCard";
import AdminTop from "./AdminTop";
import { auth } from "../../utils/Firebase/firebaseConfig";
import BackendNavbar from "./BackendNavbar";

const AdminPanel = ({ user }) => {
  const handler = () => {
    signOut(auth);
  };
  return (
    <div>
      <Head>
        <title>Admin</title>
      </Head>
      <div className="flex flex-col">
        {/* <h2 className="text-4xl text-center bg-yellow-500 p-3 font-bold">
          Admin Panel
        </h2>
        <div className="text-1xl text-center bg-yellow-400 p-2 font-extrabold">
          Logged in as {user.email}
          <Button
            onClick={handler}
            variant="outlined"
            className="text-black font-semibold"
          >
            Log Out
          </Button>
        </div> */}
        <BackendNavbar />
        <AdminTop user={user}/>
        <div className="block sm:flex w-screen max-w-3xl mx-auto my-16 space-x-0 space-y-8 sm:space-x-8 sm:space-y-0 ">
          <AdminPanelCard title="blog" link="blogadmin" />
          <AdminPanelCard title="project" link="projectadmin" />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
