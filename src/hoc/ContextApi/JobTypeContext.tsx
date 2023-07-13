import axios from "axios";
import { createContext, useCallback, useState, useMemo } from "react";

type functions = {
  postJobType: (values: { type: string }, resetform: any) => void;
  deleteJobType: (id: number) => void;
  patchJobType: (values: { type: string }, resetform: any) => void;
  tableRenderJobType: any[];
  currentJobType: any[];
  setCurrentJobType: React.Dispatch<React.SetStateAction<any[]>>;
  setTableRenderJobType: React.Dispatch<React.SetStateAction<any[]>>;
};

export const JobTypeContext = createContext<functions>({} as functions);

type Props = {
  children: React.ReactNode;
};

const JobtypeApi = ({ children }: Props) => {
  const [change, setChange] = useState(false);
  const [tableRenderJobType, setTableRenderJobType] = useState<any[]>([]);
  const [currentJobType, setCurrentJobType] = useState<any[]>([]);

  const postJobType = (values: { type: string }, resetform: any) => {
    try {
      axios.post(`http://localhost:4002/jobtype/`, values).then((res) => {
        console.log(res);
        setChange(!change);
        resetform();
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getJobType = useCallback(() => {
    try {
      axios.get(`http://localhost:4002/jobtype/`).then((res) => {
        console.log(res);
        setTableRenderJobType([...res.data.jobtypes]);
      });
    } catch (err) {
      console.log(err);
    }
  }, [change]);

  useMemo(() => getJobType(), [change]);

  const deleteJobType = (id: number) => {
    try {
      axios.delete(`http://localhost:4002/jobtype/${id}`).then((res) => {
        console.log(res);
        setChange(!change);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const patchJobType = (values: { type: string }, resetform: any) => {
    try {
      axios
        .patch(`http://localhost:4002/jobtype/${currentJobType[0].id}`, values)
        .then((res) => {
          console.log(res);
          setCurrentJobType([]);
          setChange(!change);
          resetform();
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <JobTypeContext.Provider
      value={{
        postJobType,
        tableRenderJobType,
        setTableRenderJobType,
        deleteJobType,
        patchJobType,
        setCurrentJobType,
        currentJobType,
      }}
    >
      {children}
    </JobTypeContext.Provider>
  );
};

export default JobtypeApi;
