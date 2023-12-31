import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Badge from '@mui/material/Badge';
import Image from 'next/image';
import logoOwp from '../../public/owpLogo.png'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { fetchUserData, userLoginData } from '@/slices/userActions'
const jwt = require('jsonwebtoken');
import { window } from 'global';
import { useRouter } from 'next/router';
const Login = () => {
    const token = useSelector((state: RootState) => state.user.userDetails);
    const dispatch = useDispatch<AppDispatch>()  
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const [userId, setUserId] = useState('');
    const [jwtEmail, setJwtEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here
    dispatch(userLoginData({ email, password }));
    // Wait for the localStorage data to be available
    const jwtToken = await new Promise((resolve) => {
      const checkLocalStorage = () => {
        const token = window.localStorage.getItem('access_token');
        if (token) {
          resolve(token);
        } else {
          setTimeout(checkLocalStorage, 100); // Check again in 100ms if data is not available
        }
      };
      checkLocalStorage();
    });
  
    // Decode the JWT token
    const decodedToken = jwt.decode(jwtToken);
    setUserId(decodedToken.sub);
    setJwtEmail(decodedToken.email);

    localStorage.setItem("email",decodedToken.email)

    if (jwtToken) {
      router.push('/login'); // Redirect to /owpm
    } else {
      router.push('/'); // Redirect to /login
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
        <Image  className="mt-6 text-center" src={logoOwp} alt="Logo" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
