import LocationContextApi from "@/hoc/ContextApi/LocationContext";
import AddJob from "./AddJob";
import CategoryContextApi from "@/hoc/ContextApi/CategoryContext";
import TechnologiesContextApi from "@/hoc/ContextApi/TechnologiesContext";
import { BenefitContextApi } from "@/hoc/ContextApi/BenefitContext";
import SkillContextApi from "@/hoc/ContextApi/SkillContext";
import JobContextApi from "@/hoc/ContextApi/JobContext";
import JobtypeApi from "@/hoc/ContextApi/JobTypeContext";

const Job = () => {
  return (
    <CategoryContextApi>
      <LocationContextApi>
        <TechnologiesContextApi>
          <BenefitContextApi>
            <SkillContextApi>
              <JobtypeApi>
                <JobContextApi>
                  <div>
                    <AddJob />
                  </div>
                </JobContextApi>
              </JobtypeApi>
            </SkillContextApi>
          </BenefitContextApi>
        </TechnologiesContextApi>
      </LocationContextApi>
    </CategoryContextApi>
  );
};

export default Job;
