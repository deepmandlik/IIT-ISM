import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "../components/Portal/sidebar";
import { useNavigate } from "react-router";

export default function RecruitmentPortal() {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    console.log("signout", localStorage.getItem("isAdmin"))
    navigate("/");
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <Sidebar signOut={signOut} />
    </div>
  );
}
