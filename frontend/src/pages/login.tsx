import { Button, Checkbox } from '@material-tailwind/react';
import React from 'react'
import logo from "../assets/img/logo.png";
import { Link } from 'react-router-dom';
import { EnvelopeIcon, LockClosedIcon} from "@heroicons/react/24/solid";
function login() {
  return (

    <>
      <section className="flex flex-col bg-gray-50 dark:bg-gray-900 min-h-screen justify-center">
  <div className="flex flex-col items-center justify-center px-6 lg:mt-8">
    <Link to="/login" className="flex items-center mb-4">
      <img
        className="w-40 h-20 mr-2 rounded-full"
        src={logo}
        alt="logo"
      />
    </Link>
    <div className="w-full bg-white rounded-2xl shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-800">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl">
          Welcome Back
        </h1>
        <form className="space-y-2 md:space-y-4" action="#">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-primary-600 dark:text-primary-500 font-semibold"
            >
              Email
            </label>
            <div className="relative block mb-2">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <EnvelopeIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" />
                <span className="sr-only">Email icon</span>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-xl focus:ring-primary-600 
                focus:border-primary-600 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@bluediamondresorts.com"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-primary-600 dark:text-primary-500 font-semibold"
            >
              Password
            </label>
            <div className="relative block mb-4">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <LockClosedIcon className="w-5 h-5 text-gray-500" aria-hidden="true" />
                <span className="sr-only">Password icon</span>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-xl focus:ring-primary-600 
                focus:border-primary-600 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="••••••••"
                required
              />
            </div>
          </div>
          <Button
            type="submit"
            className="mt-6 w-full rounded-xl"
            color='blue'
          >
            Sign In
          </Button>
          <p className="text-sm text-primary-600 text-center font-semibold">
            |
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

    </>

  );

}

export default login