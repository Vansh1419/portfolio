import React from "react";

const projects = ({ users }) => {
  return (
    <div>
      projects
      {users?.map((user, index) => (
        <div key={index}>{user?.name}</div>
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
