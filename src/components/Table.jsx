import React from "react";

const Table = (props) => {
console.log(props);

  
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={{border: "1px solid black" , padding:"8px"}}>Name</th>
          <th style={{border: "1px solid black" , padding:"8px"}}>Phone Number</th>
          <th style={{border: "1px solid black" , padding:"8px"}}>Email</th>
          <th style={{border: "1px solid black" , padding:"8px"}}>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{border: "1px solid black" , padding:"8px"}}>{props.name}</td>
          <td style={{border: "1px solid black" , padding:"8px"}}>{props.phone}</td>
          <td style={{border: "1px solid black" , padding:"8px"}}>john@example.com</td>
          <td style={{border: "1px solid black" , padding:"8px"}}>{props.age}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
