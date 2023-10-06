import axios from "axios";
import React, { createContext, useState, useMemo, useCallback } from "react";

type functions = {
  postCategory: (values: { name: string }, resetform: any) => void;
  getCategory: () => void;
  currentCategory: any[];
  setCurrentCategory: React.Dispatch<React.SetStateAction<any[]>>;
  tableRenderCategory: any[];
  deleteCategory: (id: number) => void;
  patchCategory: (values: { name: string }, resetform: any) => void;
};

type Props = {
  children: React.ReactNode;
};

export const CategoryContext = createContext<functions>({} as functions);

const CategoryContextApi = ({ children }: Props) => {
  const [change, setChange] = useState(false);
  const [tableRenderCategory, setTableRenderCategory] = useState<any[]>([]);
  const [currentCategory, setCurrentCategory] = useState<any[]>([]);

  const postCategory = (values: { name: string }, resetform: any) => {
    try {
      axios
        .post(`http://localhost:4002/category/`, values, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          setChange(!change);
          resetform();
        });
    } catch (err) {
      console.log(err);
    }
  };

  const getCategory = useCallback(() => {
    try {
      axios
        .get(`http://localhost:4002/category/`, { withCredentials: true })
        .then((res) => {
          console.log(res);
          setTableRenderCategory([...res.data.categories]);
        });
    } catch (err) {
      console.log(err);
    }
  }, [change]);
  useMemo(() => getCategory(), [change]);

  const deleteCategory = (id: number) => {
    try {
      axios
        .delete(`http://localhost:4002/category/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          setChange(!change);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const patchCategory = (values: { name: string }, resetform: any) => {
    try {
      axios
        .patch(
          `http://localhost:4002/category/${currentCategory[0].id}`,
          values,
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res);
          setChange(!change);
          setCurrentCategory([]);
          resetform();
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        postCategory,
        getCategory,
        deleteCategory,
        patchCategory,
        currentCategory,
        setCurrentCategory,
        tableRenderCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextApi;
