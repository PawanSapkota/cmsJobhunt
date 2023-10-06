import { BenefitContext } from "@/hoc/ContextApi/BenefitContext";
import { AiFillEye, AiOutlineDelete } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import EditBenefit from "./EditBenefit";

const BenefitTable = () => {
  return (
    <BenefitContext.Consumer>
      {({
        tableRenderBenefit,
        deleteBenefit,
        setCurrentBenefit,
        currentBenefit,
      }) => {
        return (
          <table className="w-full text-left border">
            <thead>
              <tr>
                <th className="font-semibold border-b p-4">Benefit Name</th>
                <th className="font-semibold border-b p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableRenderBenefit.map((val, index) => {
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
                          onClick={() => deleteBenefit(val.id)}
                          className="cursor-pointer"
                        />
                        <BiPencil
                          className="cursor-pointer"
                          onClick={() => {
                            setCurrentBenefit([val]);
                          }}
                        />

                        {/* {currentCategory.length > 0 && (
                          <>{console.log(currentCategory)}</>
                        )} */}
                        {currentBenefit.length > 0 && <EditBenefit />}
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
    </BenefitContext.Consumer>
  );
};

export default BenefitTable;
