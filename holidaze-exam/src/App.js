import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Details from "./components/pages/Details";
import Admin from "./components/pages/admin/Admin";
import './sass/main.scss'
import NavBar from "./components/navbar/NavBar";



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
