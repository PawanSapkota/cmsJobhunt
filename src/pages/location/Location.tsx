import AddLocation from "@/components/pagecomponent/location/AddLocation";
import LocationTable from "@/components/pagecomponent/location/LocationTable";
import LocationContextApi, {
  LocationContext,
} from "@/hoc/ContextApi/LocationContext";

const Location = () => {
  return (
    <LocationContextApi>
      <LocationContext.Consumer>
        {({}) => {
          return (
            <div className="bg-secondary p-4 h-screen justify-start  grid grid-cols-5 gap-12 ">
              <div className="col-span-2 ">
                <h1 className="text-xl font-semibold">Location </h1>
                <AddLocation />
              </div>

              <div className="col-span-3 overflow-y-scroll scroll h-4/5  border">
                <LocationTable />
              </div>
            </div>
          );
        }}
      </LocationContext.Consumer>
    </LocationContextApi>
  );
};

export default Location;
