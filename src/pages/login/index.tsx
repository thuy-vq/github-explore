import React, {useEffect, useState} from 'react';
import {useAuthStore} from "@/store/auth";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const token = useAuthStore((state) => state.token)
  const setToken = useAuthStore((state) => state.setToken)
  const navigate = useNavigate();
  const [text, setText] = useState('');

  const handleSave = () => {
    setToken(text);
  }

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <div>
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
        <form action="#">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label htmlFor="description"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Generate your github token
                and paste it in the form below:</label>
              <textarea id="description" rows="8"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Your description here"
                        value={text}
                        onChange={e => setText(e.target.value)}
              >
              </textarea>
            </div>
          </div>
          <button type="submit"
                  className="transition-all inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-600 disabled:bg-gray-300 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                  disabled={!text}
                  onClick={handleSave}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;