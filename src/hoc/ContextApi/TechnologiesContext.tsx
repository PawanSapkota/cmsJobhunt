import axios from "axios";
import { createContext, useCallback, useState, useMemo } from "react";

type functions = {
  postTechnologies: (values: { name: string }, resetform: any) => void;
  getTechnologies: () => void;
  deleteTechnologies: (id: number) => void;
  patchTechnologies: (values: { name: string }, resetform: any) => void;
  tableRenderTechnologies: any[];
  setCurrentTechnologies: React.Dispatch<React.SetStateAction<any[]>>;
  currentTechnologies: any[];
};

export const TechnologiesContext = createContext<functions>({} as functions);

type Props = {
  children: React.ReactNode;
};

const TechnologiesContextApi = ({ children }: Props) => {
  const [change, setChange] = useState(false);
  const [tableRenderTechnologies, setTableRenderTechnologies] = useState<any[]>(
    []
  );
  const [currentTechnologies, setCurrentTechnologies] = useState<any[]>([]);

  const postTechnologies = (values: { name: string }, resetform: any) => {
    try {
      axios.post(`http://localhost:4002/technology/`, values).then((res) => {
        setChange(!change);
        console.log(res);
        resetform();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getTechnologies = useCallback(() => {
    try {
      axios.get(`http://localhost:4002/technology/`).then((res) => {
        console.log(res);
        setTableRenderTechnologies([...res.data.technologies]);
      });
    } catch (err) {
      console.log(err);
    }
  }, [change]);
  useMemo(() => getTechnologies(), [change]);

  const deleteTechnologies = (id: number) => {
    try {
      axios.delete(`http://localhost:4002/technology/${id}`).then((res) => {
        console.log(res);
        setChange(!change);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const patchTechnologies = (
    values: { name: string },

    resetform: any
  ) => {
    try {
      axios
        .patch(
          `http://localhost:4002/technology/${currentTechnologies[0].id}`,
          values
        )
        .then((res) => {
          console.log(res);
          setChange(!change);
          setCurrentTechnologies([]);
          resetform();
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TechnologiesContext.Provider
      value={{
        postTechnologies,
        getTechnologies,
        tableRenderTechnologies,
        deleteTechnologies,
        patchTechnologies,
        setCurrentTechnologies,
        currentTechnologies,
      }}
    >
      {children}
    </TechnologiesContext.Provider>
  );
};

export default TechnologiesContextApi;
