import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/pages/Home";
import Details from "./components/pages/Details";
import Admin from "./components/pages/admin/Admin";



function App() {
  return (
  <>
  <Router>
    <NavBar />
    <Routes>
      <Route index element={<Home />} />
      <Route path='login' element={<Admin />} />
      <Route path=':id' element={<Details />} />
    </Routes>
  </Router>
  </>
  );
}

export default App;
