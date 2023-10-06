import * as yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useContext, useState } from "react";
import { AiOutlineFolderView } from "react-icons/ai";
import { Link } from "react-router-dom";
import { LocationContext } from "@/hoc/ContextApi/LocationContext";
import { TechnologiesContext } from "@/hoc/ContextApi/TechnologiesContext";
import { CategoryContext } from "@/hoc/ContextApi/CategoryContext";



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
  const { tableRenderLocation } = useContext(LocationContext);
  const { tableRenderCategory } = useContext(CategoryContext);
  console.log(tableRenderCategory);

  console.log(tableRenderLocation);
  return (
    <div className="w-10/12 mx-auto mt-4">
      <Link to={"/alljobs"}>
        <div className="cursor-pointer bg-[#1d2531] inline-block rounded p-2">
          <h1 className="font-bold flex gap-2 items-center text-white">
            View All <AiOutlineFolderView className="text-xl" />
          </h1>
        </div>
      </Link>
      <Formik
        initialValues={{
          job_name: "",
          job_phone: "",
          job_email: "",
          date_posted: "",
          company_name: "",
          salary_range: "",
          description: "",
          deadline_date: "",
          locations: "",
          benefits: "",
          technologies: "",
          skills: "",
          jobtype: "",
          experience: "",
        }}
        onSubmit={(Values, { resetForm }) => {
          console.log(Values);
          resetForm();
        }}
      >
        {({ handleSubmit, values, setFieldValue }) => {
          return (
            <Form
              onSubmit={handleSubmit}
              className="mt-4 flex flex-col gap-4 w-full mx-auto  p-6  bg-white "
            >
              {/* <label className=" font-bold text-2xl text-center   ">Form</label> */}
              <div className="  grid grid-cols-2 gap-4 ">
                <div className="flex flex-col gap-1">
                  <label className="font-semibold">Enter Job Name</label>
                  <Field
                    type="text"
                    className="p-2 border w-full  outline-none  rounded "
                    placeholder=""
                    name="job_name"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="job_name"
                    component={"div"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold ">Enter Job Phone</label>
                  <Field
                    type="text"
                    className="p-2  border w-full  outline-none  rounded "
                    placeholder=""
                    name="job_phone"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="job_phone"
                    component={"div"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold ">Enter Date Posted</label>

                  <Field
                    type="date"
                    className="p-2  border w-full  outline-none  rounded "
                    placeholder=""
                    name="date_posted"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="date_posted"
                    component={"div"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold ">Enter Company Name</label>
                  <Field
                    type="text"
                    className="p-2  border w-full  outline-none  rounded "
                    placeholder=" "
                    name="company_name"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="company_name"
                    component={"div"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold ">Enter Company Email</label>
                  <Field
                    type="text"
                    className="p-2  border w-full  outline-none  rounded "
                    placeholder=" "
                    name="company_email"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="company_email"
                    component={"div"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold ">Enter Skills</label>
                  <Field
                    type="text"
                    className="p-2  border w-full  outline-none  rounded "
                    placeholder=" "
                    name="skills"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="skills"
                    component={"div"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold ">Enter Technology</label>
                  <Field
                    type="text"
                    className="p-2  border w-full  outline-none  rounded "
                    placeholder=" "
                    name="technologies"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="technologies"
                    component={"div"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold ">Enter Salary Range</label>
                  <Field
                    as="select"
                    className="p-2  border w-full  outline-none  rounded "
                    placeholder=""
                    name="salary_range"
                  >
                    <option value={""}>----</option>
                    {salaryData.map((val, i) => {
                      return <option key={i}>{val.salary}</option>;
                    })}
                  </Field>
                  <ErrorMessage
                    className="text-red-500"
                    name="salary_range"
                    component={"div"}
                  />
                </div>
                <div>
                  <label className="font-semibold ">Enter Categories </label>
                  <Field
                    as="select"
                    type="text"
                    className="p-2  border w-full  outline-none  rounded "
                    placeholder=""
                    name="categories"
                  >
                    <option value={""}>----</option>
                    {tableRenderCategory.map((val, i) => {
                      return <option key={i}>{val.name}</option>;
                    })}
                  </Field>
                  <ErrorMessage
                    className="text-red-500"
                    name="categories"
                    component={"div"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold ">Enter Location</label>
                  <Field
                    as="select"
                    type="text"
                    className="p-2  border w-full  outline-none  rounded "
                    placeholder=""
                    name="locations"
                  >
                    <option value={""}>----</option>
                    {tableRenderLocation.map((val, i) => {
                      return <option key={i}>{val.name}</option>;
                    })}
                  </Field>
                  <ErrorMessage
                    className="text-red-500"
                    name="locations"
                    component={"div"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold ">Enter Deadline Date</label>
                  <Field
                    type="date"
                    className="p-2  border w-full  outline-none  rounded "
                    placeholder=""
                    name="deadline_date"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="deadline_date"
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
