'use client';

import axios from 'axios';
import { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('');
  const [picture, setPicture] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [eror, setEror] = useState('');

  const handleRegis = async (e) => {
    if (password !== confirmPassword) {
      alert('Password not match');
    }
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
      passwordRepeat: confirmPassword,
      role: role,
      name: name,
      phoneNumber: phoneNumber,
      profilPictureUrl: picture,
    };
    await axios
      .post('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/register', payload, {
        headers: { apikey: '24405e01-fbc1-45a5-9f5a-be13afcd757c' },
      })
      .then((res) => {
        console.log(res.status === 409);
        if (res.data.code === '200') {
          alert('Registration Success');
          window.location.href = '/auth/login';
        } else {
          alert('Registration Failed');
        }
      })

      .catch((err) => {
        console.log(err);
        if (err.response.data.code === '409') {
          setEror('Email already exist');
        } else if (err.response.data.code === '400') {
          setEror('Registration Failed');
        }
      });
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="/" className="flex items-center mb-6 text-2xl text-sky-700 font-bold">
        LungoGo
      </a>
      <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Sign up</h1>

          <form className="space-y-4 md:space-y-6" onSubmit={handleRegis}>
            <div>
              <p className="text-rose-500 mb-4 text-center">{eror}</p>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div className="flex gap-2">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="hp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  No Handphone
                </label>
                <input
                  type="tel"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="No Handphone"
                  required
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Confirm password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="Role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Role
              </label>
              <div className="flex items-center mb-4 gap-5">
                <div className="flex gap-2">
                  <input type="radio" id="admin" name="drone" value="admin" onChange={(e) => setRole(e.target.value)} />
                  <label className="text-xs text-white" for="admin">
                    Admin
                  </label>
                </div>
                <div className="flex gap-2">
                  <input type="radio" id="user" name="drone" value="user" onChange={(e) => setRole(e.target.value)} />
                  <label className="text-xs text-white" for="user">
                    User
                  </label>
                </div>
              </div>
            </div>
            <button onClick={handleRegis} type="submit" className="w-full text-white bg-sky-700 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Sign up
            </button>
            <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
              Already have an account yet?{' '}
              <a href="/auth/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
