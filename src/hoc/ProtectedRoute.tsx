import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "../hoc/CustomAxios";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    let token = Cookies.get("token");
    console.log(token);

    if (token) {
      try {
        axios
          .get(`/auth/verifytoken`, { withCredentials: true })
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              setHasToken(true);
            }
          })
          .catch((err: any) => {
            if (err.response.status !== 200) {
              setHasToken(false);
              Cookies.remove("token");
              navigate("/login", {
                replace: true,
              });
            }
          });
      } catch (err) {
        console.log(err);
      }
    } else {
      navigate("/login"),
        {
          replace: true,
        };
    }
  }, []);

  return hasToken ? <Outlet /> : "Reloading";
};

export default ProtectedRoute;
