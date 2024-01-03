//import { MouseEvent } from "react";

import { useState } from "react";

export default function ListGroup() {
  const items = ["New York", "San franciso", "Tokyo", "London", "Paris"];

  //let selectedIndex = 0;
  //const handleClick = (event: MouseEvent) => console.log(event);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
