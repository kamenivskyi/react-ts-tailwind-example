import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Favourites } from "./pages/Favourites";
import { Home } from "./pages/Home";
import { Header } from "./ui/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
