import React from "react";
import { useParams } from "react-router-dom";

function UserById(props) {
  const { id } = useParams();

  return <div className="pt-40">Id: {id}</div>;
}

export default UserById;
