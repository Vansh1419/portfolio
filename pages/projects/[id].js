import React from "react";

const invividualProject = ({ user }) => {
  console.log(user);
  return <div>{user[0]?.name}</div>;
};

export default invividualProject;

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const datas = await (
    await fetch(`https://jsonplaceholder.typicode.com/users/`)
  ).json();
  console.log(datas.filter((data) => data.id == id));
  return {
    props: { user: datas.filter((data) => data.id == id) },
  };
};
