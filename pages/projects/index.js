import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const projects = ({ users }) => {
  const router = useRouter();
  return (
    <div>
      projects
      {users?.map((user, index) => (
        <div key={index}>
          <span>{user.name} </span>
          <Button
            onClick={(e) => {
              router.push({
                pathname: "/projects/[id]",
                query: { id: user?.id }
              });
            }}
            variant="outlined"
          >
            Click
          </Button>
        </div>
      ))}
    </div>
  );
};

export default projects;

export const getServerSideProps = async () => {
  const data = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();
  console.log(data);
  return {
    props: { users: data },
  };
};
