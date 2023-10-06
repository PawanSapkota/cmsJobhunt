import { BenefitContext } from "@/hoc/ContextApi/BenefitContext";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const schema = yup.object().shape({
  name: yup.string().required("Benefit is required."),
});
const AddBenefit = () => {
  return (
    <BenefitContext.Consumer>
      {({ postBenefit }) => {
        return (
          <div>
            <Formik
              initialValues={{
                name: "",
              }}
              validationSchema={schema}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                postBenefit(values, resetForm);
              }}
            >
              {({ handleSubmit }) => {
                return (
                  <Form
                    onSubmit={handleSubmit}
                    className="mt-4 flex flex-col gap-4 w-full mx-auto shadow-lg p-6 shadow-gray-400 bg-white "
                  >
                    <div className="w-full  flex flex-col gap-6 ">
                      <label className=" font-semibold w-24  ">Benefit</label>
                      <Field
                        type="text"
                        className="p-2 rounded border "
                        placeholder="Enter Benefit"
                        name="name"
                      />
                      <ErrorMessage
                        className="text-red-500"
                        name="name"
                        component={"div"}
                      />
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
    </BenefitContext.Consumer>
  );
};

export default AddBenefit;
