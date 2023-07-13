import { LocationContext } from "@/hoc/ContextApi/LocationContext";
import { AiFillEye, AiOutlineDelete } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import EditLocation from "./EditLocation";

const LocationTable = () => {
  return (
    <LocationContext.Consumer>
      {({
        tableRenderLocation,
        deleteLocation,
        setCurrentLocation,
        currentLocation,
      }) => {
        return (
          <table className="w-full text-left border">
            <thead>
              <tr>
                <th className="font-semibold border-b p-4">Location Name</th>
                <th className="font-semibold border-b p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableRenderLocation.map((val, index) => {
                return (
                  <tr key={index}>
                    <td className="border-b p-4">{val.name}</td>
                    <td className="border-b p-4 text-xl font-bold">
                      <div className="flex gap-4">
                        <AiFillEye
                          // onClick={() => {
                          //   navigate(`/brand/${val.id}`);
                          // }}
                          className="cursor-pointer"
                        />
                        <AiOutlineDelete
                          onClick={() => deleteLocation(val.id)}
                          className="cursor-pointer"
                        />
                        <BiPencil
                          className="cursor-pointer"
                          onClick={() => {
                            setCurrentLocation([val]);
                          }}
                        />

                        {currentLocation.length > 0 && (
                          <>{console.log(currentLocation)}</>
                        )}
                        {currentLocation.length > 0 && <EditLocation />}
                      </div>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <th></th>
              </tr>
            </tbody>
          </table>
        );
      }}
    </LocationContext.Consumer>
  );
};

export default LocationTable;
