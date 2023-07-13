import { LocationContext } from "@/hoc/ContextApi/LocationContext";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const schema = yup.object().shape({
  name: yup.string().required("Location is required."),
});

const AddLocation = () => {
  return (
    <LocationContext.Consumer>
      {({ postLocation }) => {
        return (
          <div>
            <Formik
              initialValues={{
                name: "",
              }}
              validationSchema={schema}
              onSubmit={(Values, { resetForm }) => {
                console.log(Values);
                postLocation(Values, resetForm);
              }}
            >
              {({ handleSubmit }) => {
                return (
                  <Form
                    onSubmit={handleSubmit}
                    className="mt-4 flex flex-col gap-4 w-full mx-auto shadow-lg p-6 shadow-gray-400 bg-white "
                  >
                    <div className="w-full  flex flex-col gap-6 ">
                      <label className=" font-semibold w-24  ">Location</label>
                      <Field
                        type="text"
                        className="p-2 rounded border "
                        placeholder="Enter Location"
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
    </LocationContext.Consumer>
  );
};

export default AddLocation;
