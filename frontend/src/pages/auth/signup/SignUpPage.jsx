import { Link } from "react-router-dom";
import { useState } from "react";

import { MdOutlineMail, MdPassword, MdDriveFileRenameOutline } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    fullName: "",
    password: "",
  });

  const queryClient = useQueryClient();

  const { mutate, isError, isPending, error } = useMutation({
    mutationFn: async ({ email, username, fullName, password }) => {
      try {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, username, fullName, password }),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to create account");
        return data;
      } catch (error) {
        throw error;
      }
    },
    onSuccess: () => {
      toast.success("Account created successfully");
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className='flex h-screen w-screen items-center justify-center bg-cover bg-center'
      style={{ backgroundImage: 'url(/images.jpeg)' }}
    >
      <div className='absolute inset-0 bg-base-100 bg-opacity-20 backdrop-blur-md'></div>
      <div className='relative z-10 flex-1 hidden lg:flex items-center justify-center'>
        <h1 className='lg:w-3/4 lg:h-auto text-8xl font-extrabold text-primary'>VVIT Connect</h1>
      </div>
      <div className='relative z-10 flex-1 flex flex-col justify-center items-center p-4'>
        <form className='flex gap-4 flex-col w-full max-w-xs' onSubmit={handleSubmit}>
          <h1 className='w-full h-auto lg:hidden text-5xl font-extrabold text-primary mb-4'>VVIT Connect</h1>
          <h1 className='text-4xl font-extrabold text-primary'>Join today.</h1>
          <label className='input input-bordered rounded flex items-center gap-2 bg-neutral text-primary'>
            <MdOutlineMail />
            <input
              type='email'
              className='grow bg-neutral text-primary'
              placeholder='Email'
              name='email'
              onChange={handleInputChange}
              value={formData.email}
            />
          </label>
          <label className='input input-bordered rounded flex items-center gap-2 bg-neutral text-primary'>
            <FaUser />
            <input
              type='text'
              className='grow bg-neutral text-primary'
              placeholder='Username'
              name='username'
              onChange={handleInputChange}
              value={formData.username}
            />
          </label>
          <label className='input input-bordered rounded flex items-center gap-2 bg-neutral text-primary'>
            <MdDriveFileRenameOutline />
            <input
              type='text'
              className='grow bg-neutral text-primary'
              placeholder='Full Name'
              name='fullName'
              onChange={handleInputChange}
              value={formData.fullName}
            />
          </label>
          <label className='input input-bordered rounded flex items-center gap-2 bg-neutral text-primary'>
            <MdPassword />
            <input
              type='password'
              className='grow bg-neutral text-primary'
              placeholder='Password'
              name='password'
              onChange={handleInputChange}
              value={formData.password}
            />
          </label>
          <button className='btn rounded-full btn-primary text-neutral'>
            {isPending ? "Loading..." : "Sign up"}
          </button>
          {isError && <p className='text-error'>{error.message}</p>}
        </form>
        <div className='flex flex-col gap-2 mt-4 w-full max-w-xs'>
          <p className='text-primary text-lg'>Already have an account?</p>
          <Link to='/login'>
            <button className='btn rounded-full btn-outline btn-primary w-full'>
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
