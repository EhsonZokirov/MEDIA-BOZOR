import React from "react";
import { useParams } from "react-router-dom";

function UserById(props) {
  let params = useParams();

  return <div className="pt-40">Id: {params.id}</div>;
}

export default UserById;
