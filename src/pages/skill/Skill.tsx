import SkillContextApi, { SkillContext } from "@/hoc/ContextApi/SkillContext";
import AddSkill from "@/components/pagecomponent/skill/AddSkill";
import SkillTable from "@/components/pagecomponent/skill/SkillTable";
// import { Toaster } from "@/components/ui/toaster";

const Skill = () => {
  return (
    <SkillContextApi>
      <SkillContext.Consumer>
        {({}) => {
          return (
            <div className="bg-secondary p-4 h-screen justify-start  grid grid-cols-5 gap-12 ">
              <div className="col-span-2 ">
                <h1 className="text-xl font-semibold">Add Skill </h1>
                <AddSkill />
              </div>

              <div className="col-span-3 overflow-y-scroll scroll h-4/5  border">
                <SkillTable />
              </div>
            </div>
          );
        }}
      </SkillContext.Consumer>
    </SkillContextApi>
    // <SkillContextApi>
    //   <SkillContext.Consumer>
    //     {({
    //       postSkill,
    //     }: {
    //       postSkill: (Values: any, resetform: any) => void;
    //     }) => {
    //       return (
    //         <div>
    //           <Formik
    //             initialValues={{
    //               title: "",
    //               type: "",
    //             }}
    //             validationSchema={schema}
    //             onSubmit={(Values, { resetForm }) => {
    //               console.log(Values);
    //               postSkill(Values, resetForm);
    //             }}
    //           >
    //             {({ handleSubmit }) => {
    //               return (
    //                 <Form
    //                   onSubmit={handleSubmit}
    //                   className="mt-4 flex flex-col gap-4 w-full mx-auto shadow-lg p-6 shadow-gray-400 bg-white "
    //                 >
    //                   <div className="w-full  flex flex-col gap-6 ">
    //                     <label className=" font-semibold w-24  ">Skill</label>
    //                     <Field
    //                       type="text"
    //                       className="p-2 rounded border "
    //                       placeholder="Enter Skill"
    //                       name="title"
    //                     />
    //                     <ErrorMessage
    //                       className="text-red-500"
    //                       name="title"
    //                       component={"div"}
    //                     />
    //                   </div>

    //                   <button
    //                     type="submit"
    //                     className="w-1/2 p-2 mt-2 bg-blue-700 rounded text-white hover:to-blue-400"
    //                   >
    //                     Submit
    //                   </button>
    //                 </Form>
    //               );
    //             }}
    //           </Formik>
    //         </div>
    //       );
    //     }}
    //   </SkillContext.Consumer>
    // </SkillContextApi>
  );
};

export default Skill;
