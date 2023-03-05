import { TextField, Paper, Button } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import { contactsCollectionRef } from "../utils/Firebase/firebaseConfig";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { Mr_Dafoe, Mrs_Sheppards } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
const dafoe = Mr_Dafoe({
  subsets: ["latin"],
  weight: ["400"],
  variables: "--dafoe-font",
  display: "fallback",
});
const contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [load, setLoad] = useState(true);
  const submitHandler = async (e) => {
    e.preventDefault();
    await addDoc(contactsCollectionRef, data);
    setData({
      name: "",
      email: "",
      message: "",
      timeStamp: serverTimestamp(),
    });
    setLoad(false);
  };
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <div>
        <Navbar />
        <div className="max-w-5xl mx-auto">
          <h3
            className={`text-transparent text-7xl md:text-9xl sticky top-22 leading-tight bg-clip-text font-valencia font-normal text-center `}
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/3826328/pexels-photo-3826328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
          >
            Contact
          </h3>
          <Paper className="relative">
            {load ? (
              <div className="py-6 px-4 ">
                <form
                  onSubmit={submitHandler}
                  className="form max-w-4xl mx-auto space-y-8 flex flex-col items-center"
                >
                  <TextField
                    id="outlined-basic"
                    required
                    label="Name"
                    variant="outlined"
                    className="w-full"
                    value={data.name}
                    onChange={(e) => {
                      setData({
                        ...data,
                        name: e.target.value,
                      });
                    }}
                  />
                  <TextField
                    id="outlined-basic"
                    required
                    label="Email"
                    variant="outlined"
                    className="w-full"
                    value={data.email}
                    onChange={(e) => {
                      setData({
                        ...data,
                        email: e.target.value,
                      });
                    }}
                  />
                  <TextField
                    id="outlined-basic"
                    required
                    label="Message"
                    multiline
                    minRows={6}
                    variant="outlined"
                    className="w-full"
                    value={data.message}
                    onChange={(e) => {
                      setData({
                        ...data,
                        message: e.target.value,
                      });
                    }}
                  />
                  <button className="bg-[#1a1a1a] text-white px-4 py-2 rounded-md mt-4">
                    Submit
                  </button>
                </form>
              </div>
            ) : (
              <div className="h-[60vh] bg-yellow-400 flex flex-col items-center">
                <h1 className="text-4xl text-center pt-20 font-extrabold">
                  !! Message transferred !!
                </h1>
                <p className="text-3xl text-center pt-10">
                  {" "}
                  Thank you for contacting me
                </p>
                <Button
                  variant="outlined"
                  className="mx-auto mt-40"
                  onClick={() => {
                    setLoad(true);
                  }}
                >
                  New Message
                </Button>
              </div>
            )}
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default contact;
