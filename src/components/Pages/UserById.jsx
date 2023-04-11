import React from "react";
import { useParams } from "react-router-dom";
function UserById() {
  const { id } = useParams();
  // const [user, setUser] = useState({});

  return (
    <div className="pt-40">
      <h1>Id:{id}</h1>
      <h1>name:{}</h1>
    </div>
  );
}

export default UserById;
