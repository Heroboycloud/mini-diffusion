'use client';
import React, { useState } from 'react';
import signUp from "../firebase/auth/signup";
import { useRouter } from 'next/navigation';


const isValidEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const validateData = ({ email, password }) => {
  const errorObj = {};

//  if (!username) errorObj.username = "Please provide the username";

  if (!email) {
    errorObj.email = "Please provide the email";
  } else if (!isValidEmail(email)) {
    errorObj.email = "Please provide a valid email address..";
  }

  if (!password) {
    errorObj.password = "Please provide the password";
  } else if (password.length < 4) {
    errorObj.password = "Password length should be atleast 4";
  }
  return errorObj;
}



const Form = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const router = useRouter()
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const handleEmailChange = e => {
    setEmail(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

const handlePasswordChange = e => {
    setPassword(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }


   const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/signin")
    }
  const handleSubmit = e => {
    e.preventDefault();
    const errorObj = validateData(formData);
    setFormErrors(errorObj);
    if (Object.keys(errorObj).length == 0) handleForm(e);
  }

  const inputClasses = (field) => (
    `block w-full sm:text-sm px-3 py-2 bg-white border border-slate-300 shadow-sm rounded-md
    placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    ${formErrors[field] ? "border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500" : ""}`
  );
  const fieldErrorClasses = (field) => (
    `mt-2 ${formErrors[field] ? "visible" : "invisible"} text-red-600 text-sm`
  )

  return (
    <>
      <div className='max-w-lg mx-auto p-4 '>
        <form onSubmit={handleSubmit}>
<h2>Sign Up</h2>
          <div className="mb-4">
            <label htmlFor="email" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">Email</label>
            <input type="email" name="email" id="email" className={inputClasses("email")} placeholder="you@example.com" onChange={handleEmailChange} />
            <p className={fieldErrorClasses("email")}>{formErrors.email}</p>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">Password</label>
            <input type="password" name="password" id="password" className={inputClasses("password")} onChange={handlePasswordChange} />
            <p className={fieldErrorClasses("password")}>{formErrors.password}</p>
          </div>

          <div className="text-right">
            <button onClick={handleSubmit} className="bg-sky-500 hover:bg-sky-600 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form
