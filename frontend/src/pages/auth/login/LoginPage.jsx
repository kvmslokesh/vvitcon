import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMail, MdPassword } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const queryClient = useQueryClient();

  const {
    mutate: loginMutation,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: async ({ username, password }) => {
      try {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation(formData);
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
          <h1 className='w-full h-auto lg:hidden text-5xl font-mono text-primary mb-4'>VVIT Connect</h1>
          <h1 className='text-3xl font-extrabold text-primary'>{"Connecting Alumni..."}</h1>
          <label className='input input-bordered rounded flex items-center gap-2 bg-neutral text-primary'>
            <MdOutlineMail />
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
            {isPending ? "Loading..." : "Login"}
          </button>
          {isError && <p className='text-error'>{error.message}</p>}
        </form>
        <div className='flex flex-col gap-2 mt-4 w-full max-w-xs'>
          <p className='text-primary text-lg'>{"Don't"} have an account?</p>
          <Link to='/signup'>
            <button className='btn rounded-full btn-outline btn-primary w-full'>
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
