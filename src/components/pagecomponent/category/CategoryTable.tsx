import { CategoryContext } from "@/hoc/ContextApi/CategoryContext";
import { AiFillEye, AiOutlineDelete } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import EditCategory from "./EditCategory";

const CategoryTable = () => {
  return (
    <CategoryContext.Consumer>
      {({
        tableRenderCategory,
        setCurrentCategory,
        currentCategory,
        deleteCategory,
      }) => {
        return (
          <table className="w-full text-left border">
            <thead>
              <tr>
                <th className="font-semibold border-b p-4">Skill Name</th>
                <th className="font-semibold border-b p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableRenderCategory.map((val, index) => {
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
                          onClick={() => deleteCategory(val.id)}
                          className="cursor-pointer"
                        />
                        <BiPencil
                          className="cursor-pointer"
                          onClick={() => {
                            setCurrentCategory([val]);
                          }}
                        />

                        {currentCategory.length > 0 && (
                          <>{console.log(currentCategory)}</>
                        )}
                        {currentCategory.length > 0 && <EditCategory />}
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
    </CategoryContext.Consumer>
  );
};

export default CategoryTable;
