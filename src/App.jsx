import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
