import { JobTypeContext } from "@/hoc/ContextApi/JobTypeContext";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { AiOutlineClose } from "react-icons/ai";

const schema = yup.object().shape({
  type: yup.string().required("Name is required."),
});

const options = [
  {
    value: "Remote",
  },
  {
    value: "Full Time",
  },
  {
    value: "Intern",
  },
  {
    value: "Hourly",
  },
];

const EditJobType = () => {
  return (
    <JobTypeContext.Consumer>
      {({ patchJobType, setCurrentJobType, currentJobType }) => {
        return (
          <div
            className={`fixed z-50 top-0 left-0 w-screen h-screen bg-black bg-opacity-20 right-0 flex items-center justify-center`}
          >
            <div className={`bg-white w-fit h-fit p-6 relative `}>
              <Formik
                initialValues={{
                  type: "",
                }}
                validationSchema={schema}
                onSubmit={(Values, { resetForm }) => {
                  console.log(Values);
                  patchJobType(Values, resetForm);
                }}
                //   className="flex flex-col gap-4"
              >
                {({ handleSubmit }) => {
                  return (
                    <Form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-2"
                    >
                      <label className="text-lg font-semibold">Job Type</label>

                      <Field
                        as="select"
                        name="type"
                        className="border border-gray-200 rounded p-2 outline-none"
                      >
                        <option value="">Select Category</option>
                        {options.map((option, index) => {
                          return <option key={index}>{option.value}</option>;
                        })}
                      </Field>

                      <button
                        type="submit"
                        className="py-2 px-3 bg-blue-700 rounded  w-1/2 my-2 text-white"
                      >
                        Submit
                      </button>

                      <button
                        type="button"
                        className=" absolute top-2 right-2 py-2 px-3 bg-blue-700 rounded text-white block my-2"
                        onClick={() => {
                          setCurrentJobType([]);
                          console.log(currentJobType);
                        }}
                      >
                        <AiOutlineClose />
                      </button>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        );
      }}
    </JobTypeContext.Consumer>
  );
};

export default EditJobType;
