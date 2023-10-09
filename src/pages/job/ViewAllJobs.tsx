import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import JobContextApi, { JobContext } from "@/hoc/ContextApi/JobContext";

const ViewAllJobs = () => {
  return (
    <JobContextApi>
      <JobContext.Consumer>
        {({ tableRenderJob, deleteJob }) => {
          console.log(tableRenderJob);
          return (
            <div className=" mx-auto mt-4   ">
              <table className="w-full text-left border bg-white  ">
                <thead>
                  <tr>
                    <th className="border-b p-2 pb-8  text-sm  text-gray-500 ">
                      Job Name
                    </th>
                    <th className="border-b p-2 pb-8  text-sm  text-gray-500">
                      Job phone
                    </th>
                    <th className="border-b p-2 pb-8  text-sm  text-gray-500">
                      Job email
                    </th>
                    <th className="border-b p-2 pb-8  text-sm  text-gray-500">
                      Salary Range
                    </th>
                    <th className="border-b p-2 pb-8  text-sm  text-gray-500">
                      Categories
                    </th>
                    <th className="border-b p-2 pb-8  text-sm  text-gray-500">
                      Posted Date
                    </th>
                    <th className="border-b p-2 pb-8  text-sm  text-gray-500">
                      Deadline Date
                    </th>
                    <th className="border-b p-2 pb-8  text-sm  text-gray-500">
                      Locations
                    </th>
                    <th className="border-b p-2 pb-8  text-sm  text-gray-500">
                      Technologies
                    </th>
                    <th className="border-b p-2 pb-8  text-sm  text-gray-500">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableRenderJob.map((val, i) => {
                    return (
                      <tr key={i}>
                        <td className="border-b p-4 pb-2 text-sm">
                          {val.job_name}
                        </td>
                        <td className="border-b p-4 pb-2 text-sm">
                          {val.job_phone}
                        </td>
                        <td className="border-b p-4 pb-2 text-sm">
                          {val.job_email}
                        </td>
                        <td className="border-b p-4 pb-2 text-sm">
                          {val.salary_range}
                        </td>
                        <td className="border-b p-4 pb-2 text-sm  ">
                          {val.categories.map(
                            (category: any, index: number) => {
                              return (
                                <span key={index}>
                                  {category.name}
                                  {index < val.categories.length - 1 ? "," : ""}
                                </span>
                              );
                            }
                          )}
                        </td>
                        <td className="border-b p-4 pb-2 text-sm">
                          {(() => {
                            const date = new Date(val.date_posted);
                            const year = date.getFullYear().toString();
                            const month = (date.getMonth() + 1)
                              .toString()
                              .padStart(2, "0");

                            const day = date
                              .getDate()
                              .toString()
                              .padStart(2, "0");

                            return `${year}-${month}-${day}`;
                          })()}
                        </td>
                        <td className="border-b p-4 pb-2 text-sm">
                          {val.deadline_date}
                        </td>
                        <td className="border-b p-4 pb-2 text-sm">
                          {val.locations.map(
                            (joblocation: any, index: number) => {
                              return (
                                <span key={index}>
                                  {joblocation.name}
                                  {index < val.locations.length - 1 ? "," : ""}
                                </span>
                              );
                            }
                          )}
                        </td>
                        <td className="border-b p-4 pb-2 text-sm">
                          {val.technologies.map(
                            (jobtechnology: any, index: number) => {
                              return (
                                <span key={index}>
                                  {jobtechnology.name}
                                  {index < val.technologies.length - 1
                                    ? ","
                                    : ""}
                                </span>
                              );
                            }
                          )}
                        </td>
                        <td className="border-b p-4 pb-2 text-sm">
                          <div className="flex gap-2">
                            <button>
                              <AiOutlineEye className="text-xl font-semibold" />
                            </button>{" "}
                            <button>
                              <AiOutlineDelete
                                onClick={() => deleteJob(val.id)}
                                className="text-xl font-semibold"
                              />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        }}
      </JobContext.Consumer>
    </JobContextApi>
  );
};

export default ViewAllJobs;
