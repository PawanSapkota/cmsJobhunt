import React from "react";
import {
  BenefitContextApi,
  BenefitContext,
} from "@/hoc/ContextApi/BenefitContext";
import AddBenefit from "@/components/pagecomponent/benefit/AddBenefit";
import BenefitTable from "@/components/pagecomponent/benefit/BenefitTable";

const Benefit = () => {
  return (
    <BenefitContextApi>
      <BenefitContext.Consumer>
        {({}) => {
          return (
            <div className="bg-secondary p-4 h-screen justify-start  grid grid-cols-5 gap-12 ">
              <div className="col-span-2 ">
                <h1 className="text-xl font-semibold">Benefits </h1>
                <AddBenefit />
              </div>

              <div className="col-span-3 overflow-y-scroll scroll h-4/5  border">
                <BenefitTable />
              </div>
            </div>
          );
        }}
      </BenefitContext.Consumer>
    </BenefitContextApi>
  );
};

export default Benefit;
