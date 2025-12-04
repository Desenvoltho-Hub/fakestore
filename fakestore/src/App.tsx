import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Loja from "./pages/Loja";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loja" element={<Loja />} />
      </Routes>
    </div>
  );
}

export default App;
