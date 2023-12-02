function ListGroup() {
  const items = ["Nottingham", "Leicester", "Birmingham", "Manschester"];

  return (
    <>
      <h1>List Component</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={index}
            // calling an anoymonus function
            // we can pass variable in the function to capture what event is triggerd
            // In browser it will display as Syntheticevent , compaitable with all browsers
            onClick={() => console.log("Clicked ", { item }, { index })}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
