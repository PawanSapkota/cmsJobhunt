import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CategoryContext } from "@/hoc/ContextApi/CategoryContext";

const schema = yup.object().shape({
  name: yup.string().required("Category is required."),
});

const AddCategory = () => {
  return (
    <CategoryContext.Consumer>
      {({ postCategory }) => {
        return (
          <div>
            <Formik
              initialValues={{
                name: "",
              }}
              validationSchema={schema}
              onSubmit={(Values, { resetForm }) => {
                console.log(Values);
                postCategory(Values, resetForm);
              }}
            >
              {({ handleSubmit }) => {
                return (
                  <Form
                    onSubmit={handleSubmit}
                    className="mt-4 flex flex-col gap-4 w-full mx-auto shadow-lg p-6 shadow-gray-400 bg-white "
                  >
                    <div className="w-full  flex flex-col gap-6 ">
                      <label className=" font-semibold w-24  ">Category</label>
                      <Field
                        type="text"
                        className="p-2 rounded border "
                        placeholder="Enter Category"
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
    </CategoryContext.Consumer>
  );
};

export default AddCategory;
