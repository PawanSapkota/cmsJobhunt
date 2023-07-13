import { JobTypeContext } from "@/hoc/ContextApi/JobTypeContext";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";

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
    value: "Part Time",
  },
  {
    value: "Internship",
  },
  {
    value: "Hourly",
  },
];

const AddJobtype = () => {
  return (
    <JobTypeContext.Consumer>
      {({ postJobType }) => {
        return (
          <Formik
            initialValues={{
              type: "",
            }}
            validationSchema={schema}
            onSubmit={(Values, { resetForm }) => {
              console.log(Values);
              postJobType(Values, resetForm);
            }}
          >
            {({ handleSubmit }) => {
              return (
                <Form
                  onSubmit={handleSubmit}
                  className="mt-4 flex flex-col gap-4 w-full mx-auto shadow-lg p-6 shadow-gray-400 bg-white "
                >
                  <div className="w-full  flex flex-col gap-6 ">
                    <label className=" font-semibold w-24  ">Job Type</label>
                    <Field
                      as="select"
                      name="type"
                      className="border border-gray-200 rounded p-2 outline-none"
                    >
                      <option className="text-sm" value="">
                        Select JobType
                      </option>
                      {options.map((option, index) => {
                        return (
                          <option key={index} className="text-sm">
                            {option.value}
                          </option>
                        );
                      })}
                    </Field>
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
        );
      }}
    </JobTypeContext.Consumer>
  );
};

export default AddJobtype;
