import { MouseEvent } from "react";

export default function ListGroup() {
  const items = ["New York", "San franciso", "Tokyo", "London", "Paris"];

  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item active"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
