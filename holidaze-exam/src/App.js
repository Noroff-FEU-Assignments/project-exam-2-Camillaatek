import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Details from "./components/pages/Details";
import Admin from "./components/pages/admin/Admin";
import './sass/main.scss'
import NavBar from "./components/navbar/NavBar";
import Login from "./components/pages/Login";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";



function App() {
  return (
  <>
  <AuthProvider>
  <Router>
    <NavBar />
    <Routes>
      <Route index element={<Home />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/login' element={<Login />} />
      <Route path='/:id' element={<Details />} />
    </Routes>
    <Footer />
  </Router>
  </AuthProvider>
  </>
  );
}

export default App;
