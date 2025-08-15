import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Design from "./Components/Design/Design";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/design" element={<Design />} />
      </Routes>
    </>
  );
}

export default App;
