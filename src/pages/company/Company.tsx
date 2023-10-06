import TechnologiesContextApi from "@/hoc/ContextApi/TechnologiesContext";
import CompanyForm from "./CompanyForm";
import LocationContextApi from "@/hoc/ContextApi/LocationContext";
import CategoryContextApi from "@/hoc/ContextApi/CategoryContext";
import { BenefitContextApi } from "@/hoc/ContextApi/BenefitContext";
import { CompanyContextApi } from "@/hoc/ContextApi/CompanyContext";

const Company = () => {
  return (
    <BenefitContextApi>
      <CategoryContextApi>
        <LocationContextApi>
          <TechnologiesContextApi>
            <CompanyContextApi>
              <div>
                <CompanyForm />
              </div>
            </CompanyContextApi>
          </TechnologiesContextApi>
        </LocationContextApi>
      </CategoryContextApi>
    </BenefitContextApi>
  );
};

export default Company;
