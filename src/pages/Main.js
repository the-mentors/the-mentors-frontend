import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from '../public/shared/localStorage';


function Main () {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate("/signin");
    }
  }, [navigate]);

  return (
    <div></div>
  );
}

export default Main;