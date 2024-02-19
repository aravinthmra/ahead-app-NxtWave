import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import "./App.css";

const App = () => (
  <Routes>
    <Route exact path="/" Component={Home} />
  </Routes>
);

export default App;
