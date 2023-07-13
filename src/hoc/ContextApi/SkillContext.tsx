import axios from "axios";
import React, { createContext, useCallback, useMemo, useState } from "react";

type functions = {
  postSkill: (Values: any, resetform: any) => void;
  getSkill: () => void;
  deleteSkill: (id: number) => void;
  patchSkill: (
    values: { title: string; type: string; id: any },
    resetform: any
  ) => void;
  tableRenderSkill: any[];
  currentSkill: any[];
  setCurrentSkill: React.Dispatch<React.SetStateAction<any[]>>;
};

export const SkillContext = createContext<functions>({} as functions);

type Props = {
  children: React.ReactNode;
};

const SkillContextApi = ({ children }: Props) => {
  const [change, setChange] = useState(false);
  const [tableRenderSkill, setTableRenderSkill] = useState<any[]>([]);
  const [currentSkill, setCurrentSkill] = useState<any[]>([]);

  const postSkill = (Values: any, resetform: any) => {
    try {
      axios.post("http://localhost:4002/skills/", Values).then((res) => {
        console.log(res);
        setChange(!change);
        resetform();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getSkill = useCallback(() => {
    try {
      axios.get("http://localhost:4002/skills/").then((res) => {
        console.log(res);
        setTableRenderSkill([...res.data.skills]);
      });
    } catch (error) {
      console.log(error);
    }
  }, [change]);
  useMemo(() => getSkill(), [change]);

  const deleteSkill = (id: number) => {
    try {
      axios.delete(`http://localhost:4002/skills/${id}`).then((res) => {
        console.log(res);
        setChange(!change);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const patchSkill = (
    values: { title: string; type: string; id: any },
    resetform: any
  ) => {
    try {
      axios
        .patch(`http://localhost:4002/skills/${currentSkill[0].id}`, values)
        .then((res) => {
          console.log(res);
          setChange(!change);
          setCurrentSkill([]);
          resetform();
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SkillContext.Provider
      value={{
        postSkill,
        getSkill,
        deleteSkill,
        tableRenderSkill,
        currentSkill,
        setCurrentSkill,
        patchSkill,
      }}
    >
      {children}
    </SkillContext.Provider>
  );
};

export default SkillContextApi;
