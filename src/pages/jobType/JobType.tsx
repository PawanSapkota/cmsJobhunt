import AddJobtype from "@/components/pagecomponent/jobtype/AddJobtype";
import JobTypeTable from "@/components/pagecomponent/jobtype/JobTypeTable";
import JobtypeApi, { JobTypeContext } from "@/hoc/ContextApi/JobTypeContext";

const JobType = () => {
  return (
    <JobtypeApi>
      <JobTypeContext.Consumer>
        {({}) => {
          return (
            <div className="bg-secondary p-4 h-screen justify-start  grid grid-cols-5 gap-12 ">
              <div className="col-span-2 ">
                <h1 className="text-xl font-semibold">Job Type</h1>
                <AddJobtype />
              </div>

              <div className="col-span-3 overflow-y-scroll scroll h-4/5  border">
                <JobTypeTable />
              </div>
            </div>
          );
        }}
      </JobTypeContext.Consumer>
    </JobtypeApi>
  );
};

export default JobType;
