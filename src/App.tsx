import { Board } from "./components/Board";
import { CardContextProvider } from "./context/CardContext";

function App() {
  return (
    <CardContextProvider>
      <Board />
    </CardContextProvider>
  );
}

export default App;
