import LocationContextApi from "@/hoc/ContextApi/LocationContext";
import AddJob from "./AddJob";
import CategoryContextApi from "@/hoc/ContextApi/CategoryContext";

const Job = () => {
  return (
    <CategoryContextApi>
      <LocationContextApi>
        <div>
          <AddJob />
        </div>
      </LocationContextApi>
    </CategoryContextApi>
  );
};

export default Job;
