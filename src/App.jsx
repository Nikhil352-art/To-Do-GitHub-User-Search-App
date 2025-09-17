import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Todo from "./Todo";
import Github from "./Github";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/github" element={<Github />} />
      </Routes>
    </BrowserRouter>
  );
}