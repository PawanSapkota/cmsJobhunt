import AddTechnologies from "@/components/pagecomponent/technologies/AddTechnologies";
import TechnologiesTable from "@/components/pagecomponent/technologies/TechnologiesTable";
import TechnologiesContextApi, {
  TechnologiesContext,
} from "@/hoc/ContextApi/TechnologiesContext";

const Technologies = () => {
  return (
    <TechnologiesContextApi>
      <TechnologiesContext.Consumer>
        {({}) => {
          return (
            <div className="bg-secondary p-4 h-screen justify-start  grid grid-cols-5 gap-12 ">
              <div className="col-span-2 ">
                <h1 className="text-xl font-semibold">Technology </h1>
                <AddTechnologies />
              </div>

              <div className="col-span-3 overflow-y-scroll scroll h-4/5  border">
                <TechnologiesTable />
              </div>
            </div>
          );
        }}
      </TechnologiesContext.Consumer>
    </TechnologiesContextApi>
  );
};

export default Technologies;
