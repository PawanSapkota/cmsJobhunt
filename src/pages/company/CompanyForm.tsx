import { Formik, Field, Form, ErrorMessage } from "formik";
import { useContext, useEffect, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { TechnologiesContext } from "@/hoc/ContextApi/TechnologiesContext";
import { RxCross1 } from "react-icons/rx";
import SocialMediaIcons from "./SocialMediaIcons";
import { BiChevronDown, BiUpload } from "react-icons/bi";
import { CompanyContext } from "@/hoc/ContextApi/CompanyContext";
import { CategoryContext } from "@/hoc/ContextApi/CategoryContext";
import { LocationContext } from "@/hoc/ContextApi/LocationContext";
import { BenefitContext } from "@/hoc/ContextApi/BenefitContext";
import Multiselect from "multiselect-react-dropdown";
import { AiFillDelete } from "react-icons/ai";

// const schema = yup.object().shape({
//   company_name: yup.string().required("Company Name is required."),
//   ceo_name: yup.string().required("Ceo is required."),
//   job_name: yup.string().required("Job Name is required."),
//   agent_name: yup.string().required("Agent Name is required."),
//   company_code: yup.string().required("Company Code is required."),
//   company_phone: yup.string().required("Company Number is required."),
//   company_email: yup.string().required("Company Email is required."),
//   total_employee: yup.string().required("Total Employee is required."),
//   jobtypes: yup.string().required("Jobtypes is required."),
//   benefits: yup.string().required("Benefits is required."),
//   locations: yup.string().required("Locations is required."),
//   categories: yup.string().required("Category is required."),
// });

const CompanyForm = ({}) => {
  const { tableRenderTechnologies } = useContext(TechnologiesContext);
  const { tableRenderCategory } = useContext(CategoryContext);
  const { tableRenderLocation } = useContext(LocationContext);
  const { tableRenderBenefit } = useContext(BenefitContext);
  console.log(tableRenderTechnologies);

  const [isOptionOpen, setOptionOpen] = useState(false);
  const [isOptionOpenCategory, setOptionOpenCategory] = useState(false);
  const [isOptionOpenLocation, setOptionOpenLocation] = useState(false);
  const [isOptionOpenBenefit, setOptionOpenBenefit] = useState(false);

  const handleOption = () => {
    setOptionOpen(!isOptionOpen);
  };

  //   const handleHover = (event: MouseEvent) => {
  //     if (
  //       dropDownRef.current &&
  //       (dropDownRef.current as HTMLDivElement).contains(event.target as Node)
  //     ) {
  //       return;
  //     }
  //     setOptionOpen(false);
  //   };
  //   document.addEventListener("mousedown", handleHover);

  //   return () => {
  //     document.removeEventListener("mousedown", handleHover);
  //   };
  // }, []);

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
    <CompanyContext.Consumer>
      {({ postCompany }) => {
        return (
          <div className="w-10/12 mx-auto">
            <Formik
              initialValues={{
                company_name: "",
                ceo_name: "",
                agent_name: "",
                company_code: "",
                company_phone: "",
                company_email: "",
                establish_date: "",
                total_employee: "",
                locations: [],
                benefits: [],
                job_name: "",
                jobtypes: "",
                categories: [],
                description: "",
                technologies: [],
                image: null,
               
              }}
              // validationSchema={schema}
              onSubmit={(values: any, { resetForm }) => {
                console.log(values);
                const formdata = new FormData();

                let techdata: any = [];
                values.technologies.map((val: any) => {
                  techdata.push(val.id);
                });
                let categorydata: any = [];
                values.categories.map((value: any) => {
                  categorydata.push(value.id);
                });
                let locationdata: any = [];
                values.locations.map((value: any) => {
                  locationdata.push(value.id);
                });
                let benefitsdata: any = [];
                values.benefits.map((val: any) => {
                  benefitsdata.push(val.id);
                });
                formdata.append("image", values.image);
                formdata.append("company_name", values.company_name);
                formdata.append("ceo_name", values.ceo_name);
                formdata.append("agent_name", values.agent_name);
                formdata.append("company_code", values.company_code);
                formdata.append("company_phone", values.company_phone);
                formdata.append("company_email", values.company_email);
                formdata.append("establish_date", values.establish_date);
                formdata.append("total_employee", values.total_employee);
                formdata.append("job_name", values.job_name);
                formdata.append("jobtypes", values.jobtypes);
                formdata.append("description", values.description);

                formdata.append("technologies", JSON.stringify(techdata));
                formdata.append("locations", JSON.stringify(locationdata));
                formdata.append("benefits", JSON.stringify(benefitsdata));
                formdata.append("categories", JSON.stringify(categorydata));

                // values.technologies = techdata;
                // values.locations = locationdata;
                // values.categories = categorydata;
                // values.benefits = benefitsdata;
                postCompany(values, resetForm);
                // resetForm();
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
                          name="company_name"
                        />
                        <ErrorMessage
                          className="text-red-500"
                          name="company_name"
                          component={"div"}
                        />
                      </div>

                      <div>
                        <label className="font-semibold mb-2">
                          Enter Ceo Name
                        </label>
                        <Field
                          type="text"
                          className="px-3 py-2 border w-full outline-none rounded  "
                          placeholder="Enter Ceo Name"
                          name="ceo_name"
                        />
                        <ErrorMessage
                          className="text-red-500"
                          name="ceo_name"
                          component={"div"}
                        />
                      </div>

                      <div>
                        <label className="font-semibold mb-2">
                          Enter Company Email
                        </label>
                        <Field
                          type="text"
                          className="px-3 py-2 border w-full outline-none rounded  "
                          placeholder="Enter Email"
                          name="company_email"
                        />
                        <ErrorMessage
                          className="text-red-500"
                          name="company_email"
                          component={"div"}
                        />
                      </div>

                      <div>
                        <label className="font-semibold mb-2">
                          Enter Company Number
                        </label>
                        <Field
                          type="text"
                          className="px-3 py-2 border w-full outline-none rounded  "
                          placeholder="Enter Phone Number"
                          name="company_phone"
                        />
                        <ErrorMessage
                          className="text-red-500"
                          name="company_phone"
                          component={"div"}
                        />
                      </div>

                      <div>
                        <label className="font-semibold mb-2">
                          Enter Agent Name
                        </label>
                        <Field
                          type="text"
                          className="px-3 py-2 border w-full outline-none rounded  "
                          placeholder="Enter Agent Name"
                          name="agent_name"
                        />
                        <ErrorMessage
                          className="text-red-500"
                          name="agent_name"
                          component={"div"}
                        />
                      </div>

                      <div>
                        <label className="font-semibold mb-2">
                          Enter Company Code
                        </label>
                        <Field
                          type="text"
                          className="px-3 py-2 border w-full outline-none rounded  "
                          placeholder="Enter Company Code"
                          name="company_code"
                        />
                        <ErrorMessage
                          className="text-red-500"
                          name="company_code"
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
                          name="establish_date"
                        />
                        <ErrorMessage
                          className="text-red-500"
                          name="establish_date"
                          component={"div"}
                        />
                      </div>

                      <div>
                        <label className="font-semibold mb-2">
                          Enter Job Name
                        </label>
                        <Field
                          type="text"
                          className="px-3 py-2 border w-full outline-none rounded  "
                          placeholder="Enter Job Name"
                          name="job_name"
                        />
                        <ErrorMessage
                          className="text-red-500"
                          name="job_name"
                          component={"div"}
                        />
                      </div>

                      <div>
                        <label className="font-semibold mb-2">
                          Enter Job Types
                        </label>
                        <Field
                          type="text"
                          className="px-3 py-2 border w-full outline-none rounded  "
                          placeholder="Enter Job Types"
                          name="jobtypes"
                        />
                        <ErrorMessage
                          className="text-red-500"
                          name="jobtypes"
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
                        <label className="font-semibold">Select Benefits</label>
                        <div
                          className=" border bg-white   cursor-pointer h-12 overflow-y-auto scroll rounded  grid grid-cols-12 justify-between flex-wrap -z-20 "
                          onClick={() =>
                            setOptionOpenBenefit(!isOptionOpenBenefit)
                          }
                        >
                          <div className="col-span-11 flex  flex-wrap">
                            {values.benefits.map(
                              (benefit: any, index: number) => {
                                return (
                                  <div
                                    key={index}
                                    className="w-fit h-fit flex items-center p-2  justify-between"
                                  >
                                    <div className=" bg-gray-200 p-1 flex gap-2 rounded z-20 ">
                                      <h1 className="capitalize ">
                                        {benefit.name}
                                      </h1>

                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          const data = values.benefits;
                                          data.splice(index, 1);
                                          setFieldValue("benefits", [...data]);
                                          console.log(data);
                                        }}
                                      >
                                        <RxCross1 className="text-sm" />
                                      </button>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>

                          <div className="h-11 flex items-center justify-end sticky top-0 right-0  col-span-1">
                            <BiChevronDown className="text-2xl" />
                          </div>
                        </div>

                        <div className="relative">
                          <div
                            onMouseLeave={() => setOptionOpenBenefit(false)}
                            className={`${
                              isOptionOpenBenefit
                                ? "translate-y-0 block"
                                : "hidden -translate-y-0"
                            }  transition-all duration-700 ease-in-out delay-200 shadow-md z-50 absolute top-0 left-0   w-full bg-white  `}
                          >
                            <select
                              multiple
                              className="p-2 capitalize outline-none rounded h-fit z-60 border overflow-y-auto scroll w-full  bg-white"
                              placeholder="Enter Location"
                              name="benefits"
                              onChange={(e: any) => {
                                const data = e.target.value;
                                console.log(data, { name: "pawan" });
                                let datas = tableRenderBenefit[data];
                                let valued = [...values.benefits, datas];
                                setFieldValue("benefits", valued);

                                console.log(tableRenderBenefit[data]);
                              }}
                            >
                              {tableRenderBenefit.map((val: any, i: number) => {
                                return (
                                  <option key={i} value={i}>
                                    {val.name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="font-semibold">
                          Select Locations
                        </label>
                        <div
                          className=" border bg-white   cursor-pointer h-12 overflow-y-auto scroll rounded  grid grid-cols-12 justify-between flex-wrap -z-20 "
                          onClick={() =>
                            setOptionOpenLocation(!isOptionOpenLocation)
                          }
                        >
                          <div className="col-span-11 flex  flex-wrap">
                            {values.locations.map(
                              (location: any, index: number) => {
                                return (
                                  <div
                                    key={index}
                                    className="w-fit h-fit flex items-center p-2  justify-between"
                                  >
                                    <div className=" bg-gray-200 p-1 flex gap-2 rounded z-20 ">
                                      <h1 className="capitalize ">
                                        {location.name}
                                      </h1>

                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          const data = values.locations;
                                          data.splice(index, 1);
                                          setFieldValue("locations", [...data]);
                                          console.log(data);
                                        }}
                                      >
                                        <RxCross1 className="text-sm" />
                                      </button>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>

                          <div className="h-11 flex items-center justify-end sticky top-0 right-0  col-span-1">
                            <BiChevronDown className="text-2xl" />
                          </div>
                        </div>

                        <div className="relative">
                          <div
                            onMouseLeave={() => setOptionOpenLocation(false)}
                            className={`${
                              isOptionOpenLocation
                                ? "translate-y-0 block"
                                : "hidden -translate-y-0"
                            }  transition-all duration-700 ease-in-out delay-200 shadow-md z-50 absolute top-0 left-0   w-full bg-white  `}
                          >
                            <select
                              multiple
                              className="p-2 capitalize outline-none rounded h-fit z-60 border overflow-y-auto scroll w-full  bg-white"
                              placeholder="Enter Location"
                              name="locations"
                              onChange={(e: any) => {
                                const data = e.target.value;
                                console.log(data, { name: "pawan" });
                                let datas = tableRenderLocation[data];
                                let valued = [...values.locations, datas];
                                setFieldValue("locations", valued);

                                console.log(tableRenderLocation[data]);
                              }}
                            >
                              {tableRenderLocation.map(
                                (val: any, i: number) => {
                                  return (
                                    <option key={i} value={i}>
                                      {val.name}
                                    </option>
                                  );
                                }
                              )}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="font-semibold">
                          Select Categories
                        </label>
                        <div
                          className=" border bg-white   cursor-pointer h-12 overflow-y-auto scroll rounded  grid grid-cols-12 justify-between flex-wrap -z-20 "
                          onClick={() =>
                            setOptionOpenCategory(!isOptionOpenCategory)
                          }
                        >
                          <div className="col-span-11 flex  flex-wrap">
                            {values.categories.map(
                              (category: any, index: number) => {
                                return (
                                  <div
                                    key={index}
                                    className="w-fit h-fit flex items-center p-2  justify-between"
                                  >
                                    <div className=" bg-gray-200 p-1 flex gap-2 rounded z-20 ">
                                      <h1 className="capitalize ">
                                        {category.name}
                                      </h1>

                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          const data = values.categories;
                                          data.splice(index, 1);
                                          setFieldValue("categories", [
                                            ...data,
                                          ]);
                                          console.log(data);
                                        }}
                                      >
                                        <RxCross1 className="text-sm" />
                                      </button>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>

                          <div className="h-11 flex items-center justify-end sticky top-0 right-0  col-span-1">
                            <BiChevronDown className="text-2xl" />
                          </div>
                        </div>

                        <div className="relative">
                          <div
                            onMouseLeave={() => setOptionOpenCategory(false)}
                            className={`${
                              isOptionOpenCategory
                                ? "translate-y-0 block"
                                : "hidden -translate-y-0"
                            }  transition-all duration-700 ease-in-out delay-200 shadow-md z-50 absolute top-0 left-0   w-full bg-white  `}
                          >
                            <select
                              multiple
                              className="p-2 capitalize outline-none rounded h-fit z-60 border overflow-y-auto scroll w-full  bg-white"
                              placeholder="Enter Category"
                              name="categories"
                              onChange={(e: any) => {
                                const data = e.target.value;
                                console.log(data, { name: "pawan" });
                                let datas = tableRenderCategory[data];
                                let valued = [...values.categories, datas];
                                setFieldValue("categories", valued);

                                console.log(tableRenderCategory[data]);
                              }}
                            >
                              {tableRenderCategory.map(
                                (val: any, i: number) => {
                                  return (
                                    <option key={i} value={i}>
                                      {val.name}
                                    </option>
                                  );
                                }
                              )}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="font-semibold">
                          Select Technologies
                        </label>
                        <div>
                          <div
                            className=" border bg-white   cursor-pointer h-12 overflow-y-auto scroll rounded  grid grid-cols-12 justify-between flex-wrap -z-20 "
                            onClick={handleOption}
                          >
                            <div className="col-span-11 flex  flex-wrap">
                              {values.technologies.map(
                                (technology: any, index: number) => {
                                  return (
                                    <div
                                      key={index}
                                      className="w-fit h-fit flex items-center p-2  justify-between"
                                    >
                                      <div className=" bg-gray-200 p-1 flex gap-2 rounded z-20 ">
                                        <h1 className="capitalize ">
                                          {technology.name}
                                        </h1>

                                        <button
                                          type="button"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            const data = values.technologies;
                                            data.splice(index, 1);
                                            setFieldValue("technologies", [
                                              ...data,
                                            ]);
                                            console.log(data);
                                          }}
                                        >
                                          <RxCross1 className="text-sm" />
                                        </button>
                                      </div>
                                    </div>
                                  );
                                }
                              )}
                            </div>

                            <div className="h-11 flex items-center justify-end sticky top-0 right-0  col-span-1">
                              <BiChevronDown className="text-2xl" />
                            </div>
                          </div>

                          <div className="relative">
                            <div
                              onMouseLeave={() => setOptionOpen(false)}
                              className={`${
                                isOptionOpen
                                  ? "translate-y-0 opacity-100"
                                  : "opacity-0 -translate-y-0"
                              }  transition-all duration-700 absolute top-0 left-0 ease-in-out delay-200 shadow-md z-20 w-full bg-white -mt-1 `}
                            >
                              <select
                                multiple
                                className="p-2 capitalize outline-none rounded border overflow-y-auto scroll w-full  bg-white"
                                placeholder="Enter Technologies"
                                name="technologies"
                                onChange={(e: any) => {
                                  const data = e.target.value;
                                  console.log(data, { name: "pawan" });
                                  let datas = tableRenderTechnologies[data];
                                  let valued = [...values.technologies, datas];
                                  setFieldValue("technologies", valued);

                                  console.log(tableRenderTechnologies[data]);
                                }}
                              >
                                {tableRenderTechnologies.map(
                                  (val: any, i: number) => {
                                    return (
                                      <option key={i} value={i}>
                                        {val.name}
                                      </option>
                                    );
                                  }
                                )}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full h-full  flex  flex-col gap-6">
                        <label htmlFor="image" className="font-semibold  p-1 ">
                          Upload Company Logo
                          <div className="border mt-1 shadow-sm rounded w-full h-40">
                            {values.image ? (
                              <img
                                alt="company"
                                className="w-full h-full"
                                src={URL.createObjectURL(values.image)}
                              />
                            ) : (
                              <div className="flex justify-center items-center h-full w-full rounded-full">
                                <BiUpload className="text-2xl font-bold" />
                              </div>
                            )}
                          </div>
                        </label>
                        <input
                          id="image"
                          className="p-2 rounded hidden  border"
                          type="file"
                          onChange={(e: any) => {
                            setFieldValue("image", e.target.files[0]);
                          }}
                        />
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

                    <div className="mt-8">
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
      }}
    </CompanyContext.Consumer>
  );
};

export default CompanyForm;
