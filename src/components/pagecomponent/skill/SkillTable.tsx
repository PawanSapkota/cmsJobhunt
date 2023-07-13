import { SkillContext } from "@/hoc/ContextApi/SkillContext";

import { BiPencil } from "react-icons/bi";
import { AiFillEye, AiOutlineDelete } from "react-icons/ai";
import EditSkill from "./EditSkill";

const SkillTable = () => {
  return (
    <SkillContext.Consumer>
      {({ tableRenderSkill, deleteSkill, currentSkill, setCurrentSkill }) => {
        return (
          <table className="w-full text-left border">
            <thead>
              <tr>
                {/* <th className="font-semibold border-b p-4">Image</th> */}
                <th className="font-semibold border-b p-4">Skill Name</th>
                <th className="font-semibold border-b p-4">type</th>
                <th className="font-semibold border-b p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableRenderSkill.map((val, index) => {
                return (
                  <tr key={index}>
                    <td className="border-b p-4">{val.title}</td>
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
                          onClick={() => deleteSkill(val.id)}
                          className="cursor-pointer"
                        />
                        <BiPencil
                          className="cursor-pointer"
                          onClick={() => {
                            setCurrentSkill([val]);
                          }}
                        />

                        {currentSkill.length > 0 && (
                          <>{console.log(currentSkill)}</>
                        )}
                        {currentSkill.length > 0 && <EditSkill />}
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
    </SkillContext.Consumer>
  );
};

export default SkillTable;
