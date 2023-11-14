import { Board } from "./components/Board";
import { Card } from "./components/Card";

import { CARDS } from "./constants/cards";

function App() {
  return (
    <>
      <Board />
      <Card card={CARDS[0]} />
    </>
  );
}

export default App;
