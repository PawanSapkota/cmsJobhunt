import axios from "axios";
import { createContext, useState, useCallback, useMemo } from "react";

type functions = {
  postBenefit: (values: { name: string }, resetForm: any) => void;
  getBenefit: () => void;
  deleteBenefit: (id: number) => void;
  patchBenefit: (values: { name: string }, resetForm: any) => void;
  setCurrentBenefit: React.Dispatch<React.SetStateAction<any[]>>;
  tableRenderBenefit: any[];
  currentBenefit: any[];
};

export const BenefitContext = createContext<functions>({} as functions);

type Props = {
  children: React.ReactNode;
};

export const BenefitContextApi = ({ children }: Props) => {
  const [change, setChange] = useState(false);
  const [tableRenderBenefit, setTableRenderBenefit] = useState([]);
  const [currentBenefit, setCurrentBenefit] = useState<any[]>([]);

  const postBenefit = (values: { name: string }, resetForm: any) => {
    try {
      axios
        .post(`http://localhost:4002/benefit/`, values, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          setChange(!change);
          resetForm();
        });
    } catch (err) {
      console.log(err);
    }
  };

  const getBenefit = useCallback(() => {
    try {
      axios.get(`http://localhost:4002/benefit/`).then((res) => {
        console.log(res);
        setTableRenderBenefit(res.data.Benefits);
      });
    } catch (err) {
      console.log(err);
    }
  }, [change]);
  useMemo(() => getBenefit(), [change]);

  const deleteBenefit = (id: number) => {
    try {
      axios
        .delete(`http://localhost:4002/benefit/${id}`, {
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

  const patchBenefit = (values: { name: string }, resetForm: any) => {
    try {
      axios
        .patch(
          `http://localhost:4002/benefit/${currentBenefit[0].id}`,
          values,
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res);
          setCurrentBenefit([]);
          setChange(!change);
          resetForm();
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BenefitContext.Provider
      value={{
        postBenefit,
        getBenefit,
        tableRenderBenefit,
        currentBenefit,
        setCurrentBenefit,
        deleteBenefit,
        patchBenefit,
      }}
    >
      {children}
    </BenefitContext.Provider>
  );
};
