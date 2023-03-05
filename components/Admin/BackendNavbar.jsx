import React from "react";
import Link from "next/link";
import { Box, Button, IconButton, Stack } from "@mui/material";
const BackendNavbar = () => {
  return (
    <div>
      <Stack
        direction="row"
        className="h-20 m-0 flex items-center p-3 bg-yellow-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-100 justify-around sticky top-0 z-100"
      >
        <Link href="/admin" className="flex-1">
          <h1 className="font-valencia text-3xl text-black rounded-none">
            Admin
          </h1>
        </Link>
        <Stack direction="row" className="space-x-4">
          <Link href="/admin/projectadmin">
            <Button
              variant="outlined"
              className="font-bold text-base capitalize text-black"
            >
              Projects
            </Button>
          </Link>
          <Link href="/admin/blogadmin">
            <Button
              className="font-bold text-base capitalize text-black"
              variant="outlined"
            >
              Blogs
            </Button>
          </Link>
        </Stack>
      </Stack>
    </div>
  );
};

export default BackendNavbar;
