import axios from "axios";
import { createContext, useCallback, useState } from "react";

type functions = {
  postCompany: (formdata: any, resetform: any) => void;
};

export const CompanyContext = createContext<functions>({} as functions);

type Props = {
  children: React.ReactNode;
};

export const CompanyContextApi = ({ children }: Props) => {
  const [change, setChange] = useState(false);
  // const [tableRenderCompany, setTableRenderCompany] = useState();

  const postCompany = (formdata: any, resetForm: any) => {
    try {
      axios.post(`http://localhost:4002/company/`, formdata).then((res) => {
        console.log(res);
        setChange(!change);
        resetForm();
      });
    } catch (err) {
      console.log(err);
    }
  };

  // const getCompany = useCallback(() => {
  //   try {
  //     axios.get(`http://localhost:4002/company/`).then((res) => {
  //       console.log(res);
  //       setTableRenderCompany(res.data.)
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  return (
    <CompanyContext.Provider value={{ postCompany }}>
      {children}
    </CompanyContext.Provider>
  );
};
