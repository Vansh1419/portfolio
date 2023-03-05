import React from "react";
import { Button, Paper } from "@mui/material";
import Link from "next/link";
const AdminPanelCard = ({ title, link }) => {
  return (
    <Paper elevation={4} className="flex-1 overflow-hidden border">
      <h6 className="text-2xl text-center bg-yellow-300 p-2 font-semibold capitalize">
        {title}
      </h6>
      <div className="text-xl bg-gray-100 p-2 flex flex-col space-y-6 items-center">
        <p className="text-xl">
          You want to add the new {title}. Please click in below button
        </p>
        <Link href={`/admin/${link}`}>
          <Button variant="outlined" className="mx-auto bg-gray-100">
            Click Here
          </Button>
        </Link>
      </div>
    </Paper>
  );
};

export default AdminPanelCard;
