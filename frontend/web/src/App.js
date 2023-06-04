import { Home, Downloads } from "./pages";
import { Footer, Navbar } from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/downloads/*" element={<Downloads />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
