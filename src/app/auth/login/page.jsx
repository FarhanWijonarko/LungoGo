'use client';

import axios from 'axios';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [massage, setMassage] = useState('');
  const handelLogin = async (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };
    await axios
      .post('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/login', payload, {
        headers: { apikey: '24405e01-fbc1-45a5-9f5a-be13afcd757c' },
      })
      .then((res) => {
        const token = res?.data?.token;
        const role = res?.data?.data?.role;
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        setTimeout(() => {}, 2000);
        window.location.href = '/';
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.code === '404') {
          setMassage('Registration Failed');
        }
      });
  };
  const handlEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlPassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="/" className="flex items-center mb-6 text-2xl text-sky-700 font-bold">
        LungoGo
      </a>
      <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Sign in</h1>

          <form className="space-y-4 md:space-y-6" action="">
            <div>
              <h1 className="text-rose-500 mb-4 text-center">{massage}</h1>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handlEmail}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb.02198 mb -2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handlPassword}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start"></div>
              <a href="#" className="text-sm font-medium text-rose-800 hover:underline dark:text-primary-500">
                Forgot password?
              </a>
            </div>
            <button onClick={handelLogin} type="submit" className="w-full text-white bg-sky-700 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Sign in
            </button>
            <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{' '}
              <a href="/auth/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
