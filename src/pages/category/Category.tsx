import AddCategory from "@/components/pagecomponent/category/AddCategory";
import CategoryTable from "@/components/pagecomponent/category/CategoryTable";
import CategoryContextApi, {
  CategoryContext,
} from "@/hoc/ContextApi/CategoryContext";

const Category = () => {
  return (
    <CategoryContextApi>
      <CategoryContext.Consumer>
        {({}) => {
          return (
            <div className="bg-secondary p-4 h-screen justify-start  grid grid-cols-5 gap-12 ">
              <div className="col-span-2 ">
                <h1 className="text-xl font-semibold">Add Skill </h1>
                <AddCategory />
              </div>

              <div className="col-span-3 overflow-y-scroll scroll h-4/5  border">
                <CategoryTable />
              </div>
            </div>
          );
        }}
      </CategoryContext.Consumer>
    </CategoryContextApi>
  );
};

export default Category;
