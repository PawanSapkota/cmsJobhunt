import { AiOutlineClose } from "react-icons/ai";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { SkillContext } from "@/hoc/ContextApi/SkillContext";

const schema = yup.object().shape({
  title: yup.string().required("Skill is required."),
  type: yup.string().required("Type is required."),
});

const EditSkill = () => {
  return (
    <SkillContext.Consumer>
      {({ patchSkill, setCurrentSkill, currentSkill }) => {
        console.log(currentSkill);
        return (
          <div
            className={`fixed z-50 top-0 left-0 w-screen h-screen bg-black bg-opacity-20 right-0 flex items-center justify-center`}
          >
            <div className={`bg-white w-fit h-fit p-6 relative `}>
              <Formik
                initialValues={{
                  id: currentSkill[0].id,
                  title: currentSkill[0].title,
                  type: currentSkill[0].type,
                }}
                validationSchema={schema}
                onSubmit={(Values, { resetForm }) => {
                  console.log(Values);
                  patchSkill(Values, resetForm);
                }}
                //   className="flex flex-col gap-4"
              >
                {({ handleSubmit }) => {
                  return (
                    <Form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-2"
                    >
                      <label className="text-lg font-semibold">
                        Skill Name
                      </label>

                      <Field
                        type="text"
                        name="title"
                        className="border border-gray-200 rounded p-2 outline-none"
                      />
                      <Field
                        type="text"
                        name="type"
                        className="border border-gray-200 rounded p-2 outline-none"
                      />

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
                          setCurrentSkill([]);
                          console.log(currentSkill);
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
    </SkillContext.Consumer>
  );
};

export default EditSkill;
