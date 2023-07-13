import { TechnologiesContext } from "@/hoc/ContextApi/TechnologiesContext";
import { AiFillEye, AiOutlineDelete } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { useState } from "react";
import EditTechnologies from "./EditTechnologies";

const TechnologiesTable = () => {
  return (
    <TechnologiesContext.Consumer>
      {({
        tableRenderTechnologies,
        deleteTechnologies,
        setCurrentTechnologies,
        currentTechnologies,
      }) => {
        return (
          <table className="w-full text-left border">
            <thead>
              <tr>
                <th className="font-semibold border-b p-4">
                  Technologies Name
                </th>
                <th className="font-semibold border-b p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableRenderTechnologies.map((val, index) => {
                return (
                  <tr key={index}>
                    <td className="border-b p-4">{val.name}</td>
                    <td className="border-b p-4 text-xl font-bold">
                      <div className="flex gap-4">
                        <AiFillEye
                          // onClick={() => {
                          //   navigate(`/brand/${val.id}`);
                          // }}
                          className="cursor-pointer"
                        />
                        <AiOutlineDelete
                          onClick={() => deleteTechnologies(val.id)}
                          className="cursor-pointer"
                        />
                        <BiPencil
                          className="cursor-pointer"
                          onClick={() => {
                            setCurrentTechnologies([val]);
                          }}
                        />

                        {currentTechnologies.length > 0 && (
                          <>{console.log(currentTechnologies)}</>
                        )}
                        {currentTechnologies.length > 0 && <EditTechnologies />}
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
    </TechnologiesContext.Consumer>
  );
};

export default TechnologiesTable;
