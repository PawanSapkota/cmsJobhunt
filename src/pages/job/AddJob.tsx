import * as yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useState } from "react";
import { AiOutlineFolderView } from "react-icons/ai";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  Job_title: yup.string().required("Job Title is required."),
  Job_code: yup.string().required("Job_code is required."),
  Date_posted: yup.date().required("Date Posted is required."),
  Categories: yup.string().required(" Categories is required."),
  Company: yup.string().required("Company  is required."),
  Job_Description: yup.string().required("Job Description  is required."),
  Salary_range: yup.string().required("Salary_range  is required."),
  Location: yup.string().required("  Location is required."),
  Expiry_date: yup.date().required("  Expiry Date is required."),
});

const salaryData = [
  {
    salary: "0-50,000",
  },
  {
    salary: "50,000-1,00,000",
  },
  {
    salary: "1,00,000-1,50,000",
  },
  {
    salary: "1,50,000-2,00,000",
  },
  {
    salary: "Above",
  },
];

const AddJob = () => {
  const [value, setValue] = useState("");
  return (
    <div className="w-10/12 mx-auto mt-4">
      <Link to={"/alljobs"}>
        <div className="cursor-pointer">
          <h1 className="font-bold flex gap-2 items-center">
            View All <AiOutlineFolderView className="text-xl" />
          </h1>
        </div>
      </Link>
      <Formik
        initialValues={{
          Job_title: "",
          Job_code: "",
          Salary_range: "",
          Job_Description: "",
          Location: "",
          Company: "",
          Categories: "",
          Date_posted: "",
          Expiry_date: "",
        }}
        validationSchema={schema}
        onSubmit={(Values, { resetForm }) => {
          console.log(Values);
          console.log("name");
          resetForm();
        }}
      >
        {({ handleSubmit, values, setFieldValue }) => {
          return (
            <Form
              onSubmit={handleSubmit}
              className="mt-4 flex flex-col gap-4 w-full mx-auto shadow-lg p-6 shadow-gray-400 bg-white "
            >
              <label className=" font-bold text-2xl text-center   ">Form</label>
              <div className="  grid grid-cols-2 gap-4 ">
                <div className="flex flex-col gap-1">
                  <label className="font-semibold">Enter Job Title</label>
                  <Field
                    type="text"
                    className="p-2 border w-full  outline-none shadow-lg rounded-xl "
                    placeholder=""
                    name="Job_title"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="Job_title"
                    component={"div"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold ">Enter Job Code</label>
                  <Field
                    type="text"
                    className="p-2  border w-full  outline-none shadow-lg rounded-xl "
                    placeholder=""
                    name="Job_code"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="Job_code"
                    component={"div"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold ">Enter Date Posted</label>

                  <Field
                    type="date"
                    className="p-2  border w-full  outline-none shadow-lg rounded-xl "
                    placeholder=""
                    name="Date_posted"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="Date_posted"
                    component={"div"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold ">Enter Company Name</label>
                  <Field
                    type="text"
                    className="p-2  border w-full  outline-none shadow-lg rounded-xl "
                    placeholder=" "
                    name="Company"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="Company"
                    component={"div"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold ">Enter Salary Range</label>
                  <Field
                    as="select"
                    className="p-2  border w-full  outline-none shadow-lg rounded-xl "
                    placeholder=""
                    name="Salary_range"
                  >
                    <option value={""}>----</option>
                    {salaryData.map((val, i) => {
                      return <option key={i}>{val.salary}</option>;
                    })}
                  </Field>
                  <ErrorMessage
                    className="text-red-500"
                    name="Salary_range"
                    component={"div"}
                  />
                </div>
                <div>
                  <label className="font-semibold ">Enter Categories </label>
                  <Field
                    type="text"
                    className="p-2  border w-full  outline-none shadow-lg rounded-xl "
                    placeholder=""
                    name="Categories"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="Categories"
                    component={"div"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold ">Enter Location</label>
                  <Field
                    type="text"
                    className="p-2  border w-full  outline-none shadow-lg rounded-xl "
                    placeholder=""
                    name="Location"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="Location"
                    component={"div"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold ">Enter Expiry Date</label>
                  <Field
                    type="date"
                    className="p-2  border w-full  outline-none shadow-lg rounded-xl "
                    placeholder=""
                    name="Expiry_date"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="Expiry_date"
                    component={"div"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold ">Description</label>
                  <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={setValue}
                    className="h-52 w-full "
                  />
                  ;
                </div>
              </div>

              <button
                type="submit"
                className="w-1/2 p-2 mt-2 bg-blue-700 rounded text-white hover:to-blue-400"
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddJob;
