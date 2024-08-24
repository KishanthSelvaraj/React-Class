import React, { useEffect, useState } from "react";
import axios from "axios";
const Axios = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .delete("https://reqres.in/api/users/2")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <div>
      <h2>Axios library in react js </h2>

      {/* {data.map((data) => {
        return <p key={data.id}>{data.year}</p>;
      })} */}
    </div>
  );
};

export default Axios;
