import React, { useState } from "react";
import Form from "../components/Register/Form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:9000/check/register", {
      name: name,
      email: email,
      password: password,
    });

    const responseInTable = response.data;
    console.table({ responseInTable });
    toast.success("Registration Successful");
  };
  
  return (
    <>
      <ToastContainer />
      <div className="container flex items-center justify-center h-screen bg-stone-900">
        <div className="w-1/3 bg-white registerBox h-2/3">
          <div className=" content">
            <h1 className="p-5 text-3xl font-bold text-center">Register</h1>
            <Form
              formTypes={["name", "email", "password", "submitButton"]}
              formData={{
                name,
                setName,
                email,
                password,
                setEmail,
                setPassword,
              }}
              onSubmit={submitHandler}
            ></Form>
          </div>
        </div>
      </div>
    </>
  );
}
