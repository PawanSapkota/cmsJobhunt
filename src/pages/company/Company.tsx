import TechnologiesContextApi from "@/hoc/ContextApi/TechnologiesContext";
import CompanyForm from "./CompanyForm";

const Company = () => {
  return (
    <TechnologiesContextApi>
      <div>
        <CompanyForm />
      </div>
    </TechnologiesContextApi>
  );
};

export default Company;
