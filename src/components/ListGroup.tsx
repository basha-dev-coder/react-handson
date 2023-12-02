import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        <span>{items.length === 0 && "No Item Found!"}</span>
        {items.map((item, index) => (
          <li
            className={`list-group-item ${
              selectedIndex === index ? "active" : ""
            }`}
            key={index}
            // calling an anoymonus function
            // we can pass variable in the function to capture what event is triggerd
            // In browser it will display as SyntheticBaseEvent , compaitable with all browsers
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
