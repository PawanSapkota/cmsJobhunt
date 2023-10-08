import axios from "axios";
import { createContext, useCallback, useMemo, useState } from "react";

type functions = {
  postJob: (Values: any, resetForm: any) => void;
  getJob: () => void;
  tableRenderJob: any[];
};
type Props = {
  children: React.ReactNode;
};

export const JobContext = createContext<functions>({} as functions);

const JobContextApi = ({ children }: Props) => {
  const [change, setChange] = useState(false);
  const [tableRenderJob, setTableRenderJob] = useState([]);

  const postJob = (Values: any, resetForm: any) => {
    try {
      axios.post(`http://localhost:4002/job/`, Values).then((res) => {
        console.log(res);
        setChange(!change);
        resetForm();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getJob = useCallback(() => {
    try {
      axios.get(`http://localhost:4002/job/`).then((res) => {
        console.log(res);
        setTableRenderJob([]);
      });
    } catch (err) {
      console.log(err);
    }
  }, [change]);
  useMemo(() => getJob, [change]);

  return (
    <JobContext.Provider value={{ postJob, getJob, tableRenderJob }}>
      {children}
    </JobContext.Provider>
  );
};
export default JobContextApi;
