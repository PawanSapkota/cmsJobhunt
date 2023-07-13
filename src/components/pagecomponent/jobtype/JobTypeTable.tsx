import { JobTypeContext } from "@/hoc/ContextApi/JobTypeContext";
import { AiFillEye, AiOutlineDelete } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import EditJobType from "./EditJobType";

const JobTypeTable = () => {
  return (
    <JobTypeContext.Consumer>
      {({
        tableRenderJobType,
        deleteJobType,
        setCurrentJobType,
        currentJobType,
      }) => {
        return (
          <table className="w-full text-left border">
            <thead>
              <tr>
                <th className="font-semibold border-b p-4">Job Type</th>
                <th className="font-semibold border-b p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableRenderJobType.map((val, index) => {
                return (
                  <tr key={index}>
                    <td className="border-b p-4">{val.type}</td>
                    <td className="border-b p-4 text-xl font-bold">
                      <div className="flex gap-4">
                        <AiFillEye
                          // onClick={() => {
                          //   navigate(`/brand/${val.id}`);
                          // }}
                          className="cursor-pointer"
                        />
                        <AiOutlineDelete
                          onClick={() => deleteJobType(val.id)}
                          className="cursor-pointer"
                        />
                        <BiPencil
                          className="cursor-pointer"
                          onClick={() => {
                            setCurrentJobType([val]);
                          }}
                        />

                        {currentJobType.length > 0 && (
                          <>{console.log(currentJobType)}</>
                        )}
                        {currentJobType.length > 0 && <EditJobType />}
                      </div>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <th></th>
              </tr>
            </tbody>
          </table>
        );
      }}
    </JobTypeContext.Consumer>
  );
};

export default JobTypeTable;
