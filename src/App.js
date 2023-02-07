import "./assets/fonts/Ubuntu-Regular.ttf";
import "./assets/fonts/Ubuntu-Bold.ttf";
import "./assets/fonts/Ubuntu-Light.ttf";
import "./assets/fonts/Ubuntu-Medium.ttf";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PokemonDetails from "./Pages/PokemonDetails/PokemonDetails";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
      </Routes>
    </div>
  );
}

export default App;
