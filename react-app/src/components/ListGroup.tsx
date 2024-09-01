// import { Fragment } from "react";
import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
}
function ListGroup(props:Props) {
  //   const selectedIndex = 0;
  //   Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   arr[0]; // variable[selectedIndex]
  //   arr[1]; // updater function
  //   Event handler
  //   const handleClick = (event: MouseEvent) => {
  //     return console.log(event.clientX);
  //   };
  //   superHeroes = [];

  //   if (superHeroes.length == 0) {
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No hero found</p>
  //       </>
  //     );
  //   }

  // const message = superHeroes.length === 0 ? <p>No hero found.</p> : null;

  const getMessage = () => {
    // return superHeroes.length === 0 ? <p>No hero found.</p> : null;
    return props.items.length === 0 && <p>No hero found.</p>;
  };

  return (
    <>
      <h1>{props.heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {props.items.map((hero, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={hero}
            onClick={() => setSelectedIndex(index)}
          >
            {hero}
          </li>
        ))}
        {/* <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
  );
}

export default ListGroup;
