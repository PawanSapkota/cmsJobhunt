import { CategoryContext } from "@/hoc/ContextApi/CategoryContext";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { AiOutlineClose } from "react-icons/ai";

const schema = yup.object().shape({
  name: yup.string().required("Category is required."),
});

const EditCategory = () => {
  return (
    <CategoryContext.Consumer>
      {({ patchCategory, setCurrentCategory, currentCategory }) => {
        return (
          <div
            className={`fixed z-50 top-0 left-0 w-screen h-screen bg-black bg-opacity-20 right-0 flex items-center justify-center`}
          >
            <div className={`bg-white w-fit h-fit p-6 relative `}>
              <Formik
                initialValues={{
                  name: "",
                }}
                validationSchema={schema}
                onSubmit={(Values, { resetForm }) => {
                  console.log(Values);
                  patchCategory(Values, resetForm);
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
                        Category Name
                      </label>

                      <Field
                        type="text"
                        name="name"
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
                          setCurrentCategory([]);
                          console.log(currentCategory);
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
    </CategoryContext.Consumer>
  );
};

export default EditCategory;
