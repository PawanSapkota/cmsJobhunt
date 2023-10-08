import { Formik, Field, Form, ErrorMessage } from "formik";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useContext, useState } from "react";
import { AiOutlineFolderView } from "react-icons/ai";
import { Link } from "react-router-dom";
import { LocationContext } from "@/hoc/ContextApi/LocationContext";
import { TechnologiesContext } from "@/hoc/ContextApi/TechnologiesContext";
import { CategoryContext } from "@/hoc/ContextApi/CategoryContext";
import { BiChevronDown } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { BenefitContext } from "@/hoc/ContextApi/BenefitContext";
import { JobContext } from "@/hoc/ContextApi/JobContext";
import { SkillContext } from "@/hoc/ContextApi/SkillContext";
import { JobTypeContext } from "@/hoc/ContextApi/JobTypeContext";

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

const experienceData = [
  {
    experience: "0-1 year",
  },
  {
    experience: "1-2 years",
  },
  {
    experience: "2-3 years",
  },
  {
    experience: "3-5 years",
  },
];

const AddJob = () => {
  const [value, setValue] = useState("");

  const { tableRenderLocation } = useContext(LocationContext);
  const { tableRenderCategory } = useContext(CategoryContext);
  const { tableRenderTechnologies } = useContext(TechnologiesContext);
  const { tableRenderBenefit } = useContext(BenefitContext);
  const { tableRenderSkill } = useContext(SkillContext);
  const { tableRenderJobType } = useContext(JobTypeContext);

  console.log(tableRenderCategory, tableRenderBenefit);

  const [isOptionOpen, setOptionOpen] = useState(false);
  const [isOptionOpenCategory, setOptionOpenCategory] = useState(false);
  const [isOptionOpenLocation, setOptionOpenLocation] = useState(false);
  const [isOptionOpenBenefit, setOptionOpenBenefit] = useState(false);
  const [isOptionOpenSkill, setOptionOpenSkill] = useState(false);
  const [isOptionOpenJobtype, setOptionOpenJobtype] = useState(false);

  const handleOption = () => {
    setOptionOpen(!isOptionOpen);
  };

  return (
    <JobContext.Consumer>
      {({ postJob }) => {
        console.log(postJob);
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
                categories: [],
                locations: [],
                benefits: [],
                technologies: [],
                skills: [],
                jobtype: [],
                experience: "",
              }}
              onSubmit={(Values, { resetForm }) => {
                console.log(Values);

                let catedata: any = [];
                Values.categories.map((val: any) => {
                  catedata.push(val.id);
                });
                let locationdata: any = [];
                Values.locations.map((val: any) => {
                  locationdata.push(val.id);
                });

                let benefitdata: any = [];
                Values.benefits.map((val: any) => {
                  benefitdata.push(val.id);
                });
                let technologydata: any = [];
                Values.technologies.map((val: any) => {
                  technologydata.push(val.id);
                });
                let skillsdata: any = [];
                Values.skills.map((val: any) => {
                  skillsdata.push(val.id);
                });

                let jobtypedata: any = [];
                Values.jobtype.map((val: any) => {
                  jobtypedata.push(val.id);
                });

                Values.technologies = technologydata;
                Values.categories = catedata;
                Values.locations = locationdata;
                Values.benefits = benefitdata;
                Values.skills = skillsdata;
                Values.jobtype = jobtypedata;

                postJob(Values, resetForm);

                // resetForm();
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
                        <label className="font-semibold ">
                          Enter Job Phone
                        </label>
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
                        <label className="font-semibold ">
                          Enter Date Posted
                        </label>

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
                        <label className="font-semibold ">
                          Enter Company Name
                        </label>
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
                        <label className="font-semibold ">
                          Enter Company Email
                        </label>
                        <Field
                          type="text"
                          className="p-2  border w-full  outline-none  rounded "
                          placeholder=" "
                          name="job_email"
                        />
                        <ErrorMessage
                          className="text-red-500"
                          name="job_email"
                          component={"div"}
                        />
                      </div>

                      <div>
                        <label className="font-semibold">Select Skills</label>
                        <div>
                          <div
                            className=" border bg-white   cursor-pointer h-12 overflow-y-auto scroll rounded  grid grid-cols-12 justify-between flex-wrap -z-20 "
                            onClick={() => setOptionOpenSkill(!isOptionOpen)}
                          >
                            <div className="col-span-11 flex  flex-wrap">
                              {values.skills.map(
                                (skill: any, index: number) => {
                                  return (
                                    <div
                                      key={index}
                                      className="w-fit h-fit flex items-center p-2  justify-between"
                                    >
                                      <div className=" bg-gray-200 p-1 flex gap-2 rounded z-20 ">
                                        <h1 className="capitalize ">
                                          {skill.title}
                                        </h1>

                                        <button
                                          type="button"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            const data = values.skills;
                                            data.splice(index, 1);
                                            setFieldValue("skills", [...data]);
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
                              onMouseLeave={() => setOptionOpenSkill(false)}
                              className={`${
                                isOptionOpenSkill
                                  ? "translate-y-0 block"
                                  : "hidden -translate-y-0"
                              }  transition-all duration-700 absolute top-0 left-0 ease-in-out delay-200 shadow-md z-20 w-full bg-white -mt-1 `}
                            >
                              <select
                                multiple
                                className="p-2 capitalize outline-none rounded border overflow-y-auto scroll w-full  bg-white"
                                placeholder="Enter Skills"
                                name="skills"
                                onChange={(e: any) => {
                                  const data = e.target.value;
                                  console.log(data, { name: "pawan" });
                                  let datas = tableRenderSkill[data];
                                  let valued = [...values.skills, datas];
                                  setFieldValue("skills", valued);

                                  console.log(tableRenderSkill[data]);
                                }}
                              >
                                {tableRenderSkill.map((val: any, i: number) => {
                                  return (
                                    <option key={i} value={i}>
                                      {val.title}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="font-semibold">Select Jobtype</label>
                        <div>
                          <div
                            className=" border bg-white   cursor-pointer h-12 overflow-y-auto scroll rounded  grid grid-cols-12 justify-between flex-wrap -z-20 "
                            onClick={() =>
                              setOptionOpenJobtype(!isOptionOpenJobtype)
                            }
                          >
                            <div className="col-span-11 flex  flex-wrap">
                              {values.jobtype.map((val: any, index: number) => {
                                return (
                                  <div
                                    key={index}
                                    className="w-fit h-fit flex items-center p-2  justify-between"
                                  >
                                    <div className=" bg-gray-200 p-1 flex gap-2 rounded z-20 ">
                                      <h1 className="capitalize ">
                                        {val.type}
                                      </h1>

                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          const data = values.jobtype;
                                          data.splice(index, 1);
                                          setFieldValue("jobtype", [...data]);
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

                            <div className="h-11 flex items-center justify-end sticky top-0 right-0  col-span-1">
                              <BiChevronDown className="text-2xl" />
                            </div>
                          </div>

                          <div className="relative">
                            <div
                              onMouseLeave={() => setOptionOpenJobtype(false)}
                              className={`${
                                isOptionOpenJobtype
                                  ? "translate-y-0 block"
                                  : "hidden -translate-y-0"
                              }  transition-all duration-700 absolute top-0 left-0 ease-in-out delay-200 shadow-md z-20 w-full bg-white -mt-1 `}
                            >
                              <select
                                multiple
                                className="p-2 capitalize outline-none rounded border overflow-y-auto scroll w-full  bg-white"
                                placeholder="Enter Jobtype"
                                name="jobtype"
                                onChange={(e: any) => {
                                  const data = e.target.value;
                                  console.log(data, { name: "pawan" });
                                  let datas = tableRenderJobType[data];
                                  let valued = [...values.jobtype, datas];
                                  setFieldValue("jobtype", valued);

                                  console.log(tableRenderJobType[data]);
                                }}
                              >
                                {tableRenderJobType.map(
                                  (val: any, i: number) => {
                                    return (
                                      <option key={i} value={i}>
                                        {val.type}
                                      </option>
                                    );
                                  }
                                )}
                              </select>
                            </div>
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
                                  ? "translate-y-0 block"
                                  : "hidden -translate-y-0"
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
                              placeholder="Enter Benefit"
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

                      <div className="flex flex-col gap-1">
                        <label className="font-semibold ">
                          Enter Experience
                        </label>
                        <Field
                          as="select"
                          className="p-2  border w-full  outline-none  rounded "
                          placeholder=""
                          name="experience"
                        >
                          <option value={""}>----</option>
                          {experienceData.map((val, i) => {
                            return <option key={i}>{val.experience}</option>;
                          })}
                        </Field>
                        <ErrorMessage
                          className="text-red-500"
                          name="experience"
                          component={"div"}
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="font-semibold ">
                          Enter Salary Range
                        </label>
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
                        <label className="font-semibold">
                          Select Categories
                        </label>
                        <div>
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

                      <div className="flex flex-col gap-1">
                        <label className="font-semibold ">
                          Enter Deadline Date
                        </label>
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
                          value={values.description}
                          className="h-52 w-full "
                          onChange={(e: any) => {
                            setFieldValue("description", e);
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-16">
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
    </JobContext.Consumer>
  );
};

export default AddJob;
