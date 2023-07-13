import axios from "axios";
import React, { useCallback, useMemo, useState } from "react";
import { createContext } from "react";

type functions = {
  postLocation: (values: { name: string }, resetform: any) => void;
  getLocation: () => void;
  currentLocation: any[];
  setCurrentLocation: React.Dispatch<React.SetStateAction<any[]>>;
  tableRenderLocation: any[];
  deleteLocation: (id: number) => void;
  patchLocation: (values: { name: string }, resetform: any) => void;
};

export const LocationContext = createContext<functions>({} as functions);

type Props = {
  children: React.ReactNode;
};

const LocationContextApi = ({ children }: Props) => {
  const [change, setChange] = useState(false);
  const [tableRenderLocation, setTableRenderLocation] = useState<any[]>([]);
  const [currentLocation, setCurrentLocation] = useState<any[]>([]);

  const postLocation = (values: { name: string }, resetform: any) => {
    try {
      axios.post(`http://localhost:4002/location/`, values).then((res) => {
        console.log(res);
        setChange(!change);
        resetform();
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getLocation = useCallback(() => {
    try {
      axios.get(`http://localhost:4002/location/`).then((res) => {
        console.log(res);
        setTableRenderLocation([...res.data.Locations]);
      });
    } catch (err) {
      console.log(err);
    }
  }, [change]);

  useMemo(() => getLocation(), [change]);

  const deleteLocation = (id: number) => {
    try {
      axios.delete(`http://localhost:4002/location/${id}`).then((res) => {
        console.log(res);
        setChange(!change);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const patchLocation = (values: { name: string }, resetform: any) => {
    try {
      axios
        .patch(
          `http://localhost:4002/location/${currentLocation[0].id}`,
          values
        )
        .then((res) => {
          console.log(res);
          setCurrentLocation([]);
          setChange(!change);
          resetform();
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LocationContext.Provider
      value={{
        postLocation,
        getLocation,
        patchLocation,
        deleteLocation,
        currentLocation,
        setCurrentLocation,
        tableRenderLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContextApi;
