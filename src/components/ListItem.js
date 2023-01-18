import React from "react";

const ListItem = ({artist, children}) => {
    
  return (
    <li>
            <h1>{children}</h1>
            <p>{artist}</p>
    </li>
  );

}

export default ListItem;




