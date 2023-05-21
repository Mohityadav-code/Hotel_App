// import React, { useState } from "react";

// export default function Reset() {
//   const [email, setEmail] = useState("");
//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(email);
//   };

//   return (
//     <>
//       <div className="container flex items-center justify-center h-screen bg-stone-900">
//         <div className="w-1/3 bg-white registerBox h-2/3">
//           <div className="content">
//             <h1 className="p-5 text-3xl font-bold text-center">
//               Reset Password
//             </h1>
//             <form
//               onSubmit={submitHandler}
//               className="flex flex-col items-center justify-center h-full"
//             >
//               <input
//                 type="email"
//                 placeholder="Enter Your Email"
//                 className="w-2/3 h-10 pl-2 my-2 border-2 border-gray-300 rounded-md"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <button className="w-2/3 h-10 my-2 text-white bg-blue-500 rounded-md">
//                 Reset
//               </button>
//                 {/*  i want to show otp input field when i press on reset button */}
//                 <input type="text" placeholder="Enter OTP" className="w-2/3 h-10 pl-2 my-2 border-2 border-gray-300 rounded-md"/>
//                 <button className="w-2/3 h-10 my-2 text-white bg-blue-500 rounded-md">
//                 Submit
//                 </button>

//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState } from "react";
import Form from "../components/Register/Form";

export default function Reset() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const[resetPassword, setResetPassword]   = useState("");

  const [showOtpInput, setShowOtpInput] = useState(false);
  const [showResetPasswordInput, setShowResetPasswordInput] = useState(false);
  


  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);
    setShowOtpInput(true);
    console.log("otp", otp);
    if (otp === "123456") {
      console.log("otp matched");
      setShowResetPasswordInput(true);
      console.log("showResetPasswordInput",resetPassword);

    }
    
};

  return (
    <>
      <div className="container flex items-center justify-center h-screen bg-stone-900">
        <div className="w-1/3 bg-white registerBox h-2/3">
          <div className="content">
            <h1 className="p-5 text-3xl font-bold text-center">
              Reset Password
            </h1>
            <Form 
            formData={{email, setEmail ,otp,  setOtp,resetPassword,setResetPassword }} 
            onSubmit={submitHandler} 
            formTypes={[...(showResetPasswordInput ? ['resetPassword'] : (showOtpInput ? ['otp'] : ['email', 'resetButton'])  ) ]}>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
