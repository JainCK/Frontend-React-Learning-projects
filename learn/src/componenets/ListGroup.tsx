//import { MouseEvent } from "react";
interface Props {
  items: String[];
  heading: String;
  onSelectItem: (item: String) => void;
}

import { useState } from "react";

export default function ListGroup({ items, heading, onSelectItem }: Props) {
  //let selectedIndex = 0;
  //const handleClick = (event: MouseEvent) => console.log(event);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
