import * as yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useContext, useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { TechnologiesContext } from "@/hoc/ContextApi/TechnologiesContext";
import { RxCross1 } from "react-icons/rx";
import SocialMediaIcons from "./SocialMediaIcons";

const schema = yup.object().shape({
  Company_name: yup.string().required("Company Name is required."),
  ceo: yup.string().required("Ceo is required."),

  Company_benefits: yup.string().required("Company Benefits is required."),
  sub_title: yup.string().required("Sub Title is required."),
  jobs: yup.string().required("Job Name is required."),
  estd: yup.date().required("Estd  is required."),
  total_employee: yup.number().required(" Total Employee is required."),
});

const CompanyForm = () => {
  const { tableRenderTechnologies } = useContext(TechnologiesContext);
  console.log(tableRenderTechnologies);
  const [isOptionOpen, setOptionOpen] = useState(false);

  const handleOption = () => {
    setOptionOpen(!isOptionOpen);
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <div className="w-10/12 mx-auto">
      <Formik
        initialValues={{
          Company_name: "",
          ceo: "",
          estd: "",
          total_employee: "",
          Company_benefits: "",
          sub_title: "",
          jobs: "",
          technologies: [],
        }}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ handleSubmit, values, setFieldValue }) => {
          return (
            <Form
              onSubmit={handleSubmit}
              className="mt-4 flex flex-col gap-4 w-full mx-auto  p-6   "
            >
              <div className="w-full  grid grid-cols-2 gap-6 ">
                <div>
                  <label className="font-semibold mb-2">
                    Enter Company Name
                  </label>
                  <Field
                    type="text"
                    className="px-3 py-2 border w-full outline-none rounded  "
                    placeholder="Enter Company Name"
                    name="Company_name"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="Company_name"
                    component={"div"}
                  />
                </div>

                <div>
                  <label className="font-semibold mb-2">Enter Ceo Name</label>
                  <Field
                    type="text"
                    className="px-3 py-2 border w-full outline-none rounded  "
                    placeholder="Enter Ceo Name"
                    name="ceo"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="ceo"
                    component={"div"}
                  />
                </div>

                <div>
                  <label className="font-semibold mb-2">
                    Enter Establish Date
                  </label>
                  <Field
                    type="date"
                    className="px-3 py-2 border w-full outline-none rounded  "
                    placeholder="Enter Founded Date"
                    name="estd"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="estd"
                    component={"div"}
                  />
                </div>

                <div>
                  <label className="font-semibold mb-2">Enter Job Name</label>
                  <Field
                    type="text"
                    className="px-3 py-2 border w-full outline-none rounded  "
                    placeholder="Enter Job Name"
                    name="jobs"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="jobs"
                    component={"div"}
                  />
                </div>

                <div>
                  <label className="font-semibold mb-2">
                    Enter Total Employee
                  </label>
                  <Field
                    type="text"
                    className="px-3 py-2 border w-full outline-none rounded  "
                    placeholder="Enter Total Employee"
                    name="total_employee"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="total_employee"
                    component={"div"}
                  />
                </div>

                <div>
                  <label className="font-semibold mb-2">
                    Enter Company Benefits
                  </label>
                  <Field
                    type="text"
                    className="px-3 py-2 border w-full outline-none rounded  "
                    placeholder="Enter Company Benefits"
                    name="Company_benefits"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="Company_benefits"
                    component={"div"}
                  />
                </div>

                <div>
                  <label className="font-semibold mb-2">Enter Sub Title</label>
                  <Field
                    type="text"
                    className="px-3 py-2 border w-full outline-none rounded  "
                    placeholder="Enter Sub Title"
                    name="sub_title"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name="sub_title"
                    component={"div"}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 ">
                <div>
                  <label className="font-semibold">Select Technologies</label>
                  <div
                    className=" border  h-12 overflow-y-auto scroll rounded flex flex-wrap -z-20 "
                    onClick={handleOption}
                  >
                    {values.technologies.map((technology, index) => {
                      return (
                        <div
                          key={index}
                          className="w-fit h-fit flex items-center p-2"
                        >
                          <div className=" bg-gray-200 p-1 flex gap-2 rounded z-20 ">
                            <h1 className="capitalize ">{technology}</h1>

                            <button
                              type="button"
                              onClick={() => {
                                const data = values.technologies;
                                data.splice(index, 1);
                                setFieldValue("technologies", [...data]);
                                console.log(data);
                              }}
                            >
                              <RxCross1 className="text-sm" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div
                    className={`${
                      isOptionOpen
                        ? "translate-y-0 opacity-100"
                        : "opacity-0 -translate-y-0"
                    }  transition-all duration-700 ease-in-out delay-200   w-full bg-white mt-2 `}
                  >
                    <Field
                      as="select"
                      multiple
                      className="p-2 capitalize outline-none rounded border overflow-y-auto scroll w-full shadow-lg bg-white"
                      placeholder="Enter Technologies"
                      name="technologies"
                      onChange={(e: any) => {
                        const data = e.target.value;
                        console.log(data, { name: "pawan" });
                        setFieldValue("technologies", [
                          ...values.technologies,
                          data,
                        ]);
                        console.log([values.technologies, data]);
                      }}
                    >
                      {tableRenderTechnologies.map((val: any, i: number) => {
                        return <option key={i}>{val.name}</option>;
                      })}
                    </Field>
                  </div>
                </div>

                <div>
                  <label className="font-semibold">Description</label>
                  <ReactQuill
                    theme="snow"
                    formats={formats}
                    className="w-full h-32 "
                  />
                </div>

                <div className="mt-4 ">
                  <SocialMediaIcons />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-1/2 p-2 mt-2 bg-blue-700 rounded text-white hover:to-blue-400"
                >
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CompanyForm;
