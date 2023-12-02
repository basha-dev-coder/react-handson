import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Nottingham", "Leicester", "Birmingham", "Manschester"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
