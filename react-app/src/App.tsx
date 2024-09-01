import ListGroup from "./components/ListGroup";
function App(){
  let superHeroes = ["Spiderman", "Superman", "Batman", "Ironman"];

  return <div><ListGroup items={superHeroes} heading="Super Heroes"></ListGroup></div>
}

export default App; 