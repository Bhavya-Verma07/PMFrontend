import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Error() {
  return (
    <div >
      <center>
              <h1 style={{ color: "red" , margin:"100px"}}> Error 404 page not found</h1>
              <NavLink to ="/">Back to home page</NavLink>
          </center>         
    </div>
  );
}