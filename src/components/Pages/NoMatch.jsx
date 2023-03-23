import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import error from "../img/4o4.png";
function NoMatch() {
  return (
    <div className="py-20 md:p-0">
      <div сlassName="">
        <img
          className="m-auto items-center self-center "
          src={error}
          alt="error 404"
        />
        <div className="m-auto text-center mb-32">
          <Link to="Home">
            <Button variant="contained" color="error">
              Домой
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NoMatch;
