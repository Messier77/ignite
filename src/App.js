// components and pages
import Home from "./pages/Home.js";
import Nav from "./components/Nav.js";
// styles
import GlobalStyles from "./components/GlobalStyles.js";
// router
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game/:id" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
