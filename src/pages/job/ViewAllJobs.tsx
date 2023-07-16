import { tr } from "date-fns/locale";
import { jobData } from "./jobData";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";

const ViewAllJobs = () => {
  return (
    <div className="w-10/12 mx-auto mt-4">
      <table className="w-full text-left border bg-white ">
        <thead>
          <tr>
            <th className="border-b p-2 pb-8  text-sm  text-gray-500 ">
              Job Name
            </th>
            <th className="border-b p-2 pb-8  text-sm  text-gray-500">
              Job Code
            </th>
            <th className="border-b p-2 pb-8  text-sm  text-gray-500">
              Company Name
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
              Expiry Date
            </th>
            <th className="border-b p-2 pb-8  text-sm  text-gray-500">
              Description
            </th>
            <th className="border-b p-2 pb-8  text-sm  text-gray-500">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {jobData.map((val, i) => {
            return (
              <tr key={i}>
                <td className="border-b p-4 pb-2 text-sm">{val.jobTitle}</td>
                <td className="border-b p-4 pb-2 text-sm">{val.jobCode}</td>
                <td className="border-b p-4 pb-2 text-sm">{val.companyName}</td>
                <td className="border-b p-4 pb-2 text-sm">{val.salaryRange}</td>
                <td className="border-b p-4 pb-2 text-sm">{val.category}</td>
                <td className="border-b p-4 pb-2 text-sm">{val.datePosted}</td>
                <td className="border-b p-4 pb-2 text-sm">{val.expiryDate}</td>
                <td className="border-b p-4 pb-2 text-sm">{val.description}</td>
                <td className="border-b p-4 pb-2 text-sm">
                  <div className="flex gap-2">
                    <button>
                      <AiOutlineEye className="text-xl font-semibold" />
                    </button>{" "}
                    <button>
                      <AiOutlineDelete className="text-xl font-semibold" />
                    </button>
                    <button>
                      <BiPencil className="text-xl font-semibold" />
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
};

export default ViewAllJobs;
