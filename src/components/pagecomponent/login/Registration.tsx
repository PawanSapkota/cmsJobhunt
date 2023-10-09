import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "../../../hoc/CustomAxios";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const schema = yup.object().shape({
    email: yup.string().required("Email is required."),
    role: yup.string().required("Role is Required."),
    company_code: yup.string().required("Company Code is Required."),
  });
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <p className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"></p>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign Up to your account
            </h1>
            <Formik
              initialValues={{
                email: "",
                company_code: "",
                role: "",
              }}
              validationSchema={schema}
              onSubmit={(Values, { resetForm }) => {
                console.log(Values);
                try {
                  axios
                    .post(`/auth`, Values)
                    .then((res) => {
                      console.log(res);
                      navigate("/login");
                      resetForm();
                    })
                    .catch((err) => {
                      console.log(err);
                      setErrorMessage(err.response.data.message);
                    });
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
                        name="email"
                        component={"div"}
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Role
                      </label>
                      <Field
                        type="text"
                        name="role"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      <ErrorMessage
                        className="text-red-500"
                        name="role"
                        component={"div"}
                      />
                    </div>

                    <div className="mt-4">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Company Code
                      </label>
                      <Field
                        type="text"
                        name="company_code"
                        placeholder="123456"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      <ErrorMessage
                        className="text-red-500"
                        name="company_code"
                        component={"div"}
                      />
                    </div>

                    {/* Show error here */}
                    {errorMessage && (
                      <div className="text-red-500 mt-4">{errorMessage}</div>
                    )}

                    <button
                      type="submit"
                      className="w-1/2 p-2 mt-4 bg-blue-700 rounded text-white hover:to-blue-400"
                    >
                      Sign Up
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
