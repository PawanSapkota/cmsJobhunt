import { SkillContext } from "@/hoc/ContextApi/SkillContext";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const schema = yup.object().shape({
  title: yup.string().required("Skill is required."),
  type: yup.string().required("Type is required."),
});

const opts = [
  {
    value: "Technical",
  },
  {
    value: "Others",
  },
];

const AddSkill = () => {
  return (
    <SkillContext.Consumer>
      {({ postSkill }) => {
        return (
          <div>
            <Formik
              initialValues={{
                title: "",
                type: "",
              }}
              validationSchema={schema}
              onSubmit={(Values, { resetForm }) => {
                console.log(Values);
                postSkill(Values, resetForm);
              }}
            >
              {({ handleSubmit }) => {
                return (
                  <Form
                    onSubmit={handleSubmit}
                    className="mt-4 flex flex-col gap-4 w-full mx-auto shadow-lg p-6 shadow-gray-400 bg-white "
                  >
                    <div className="w-full  flex flex-col gap-6 ">
                      <label className=" font-semibold w-24  ">Skill</label>
                      <Field
                        type="text"
                        className="p-2 rounded border "
                        placeholder="Enter Skill"
                        name="title"
                      />
                      <ErrorMessage
                        className="text-red-500"
                        name="title"
                        component={"div"}
                      />
                      <Field
                        as="select"
                        name="type"
                        className="border border-gray-200 rounded p-2 outline-none"
                      >
                        <option value="">Select Category</option>
                        {opts.map((option, index) => {
                          return <option key={index}>{option.value}</option>;
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
          </div>
        );
      }}
    </SkillContext.Consumer>
  );
};

export default AddSkill;
