import { Link } from "react-router-dom";
import Branding from "./Branding";
import { Navdata } from "./Navdata";

const Sidebar = () => {
  return (
    <div className=" h-screen ">
      <Branding />
      <div className="mt-8 ">
        <ul className="flex flex-col gap-2 ">
          {Navdata.map((data, i) => {
            return (
              <div key={i} className="hover:bg-[#1d2531]">
                <li className="cursor-pointer hover:text-white w-4/5 mx-auto p-2   ">
                  <Link to={data.path}>{data.title}</Link>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
