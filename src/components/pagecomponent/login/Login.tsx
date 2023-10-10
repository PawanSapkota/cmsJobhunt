import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../../hoc/CustomAxios";
import * as yup from "yup";
import { useEffect } from "react";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = Cookies.get("token");
    console.log(userToken);
    if (userToken) {
      navigate("/", {
        replace: true,
      });
    }
  }, []);

  const schema = yup.object().shape({
    email: yup.string().required("Email is required."),
    password: yup.string().required("Password is Required."),
  });

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <p className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"></p>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign In in to your account
            </h1>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={schema}
              onSubmit={(Values, { resetForm }) => {
                console.log(Values);
                try {
                  axios
                    .post(`/auth/login`, Values, {
                      withCredentials: true,
                    })
                    .then((res) => {
                      console.log(res);
                      navigate("/");
                      console.log(res.data.token);

                      localStorage.setItem("token", res.data.token);
                      console.log(res.data.token);
                      resetForm();
                    })
                    .catch((err) => console.log(err));
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              {({ handleSubmit }) => {
                return (
                  <Form
                    onSubmit={handleSubmit}
                    // className="mt-4 flex flex-col gap-4 w-full mx-auto  p-6 shadow-gray-400 bg-white "
                  >
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Email
                      </label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      <ErrorMessage
                        className="text-red-500"
                        name="username"
                        component={"div"}
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      <ErrorMessage
                        className="text-red-500"
                        name="password"
                        component={"div"}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-1/2 p-2 mt-4 bg-blue-700 rounded text-white hover:to-blue-400"
                    >
                      Sign In
                    </button>
                    <Link to={"/register"}>
                      <div className="flex items-center justify-center  gap-4 mt-8">
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                          Don’t have an account yet?{" "}
                        </p>

                        <p className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                          Sign up
                        </p>
                      </div>
                    </Link>
                  </Form>
                );
              }}
            </Formik>
            {/* <form className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Username
                </label>
                <input
                  type="username"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="username"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Company Id
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="123456"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Forgot password?
                </p>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <p className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Sign up
                </p>
              </p>
            </form> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
