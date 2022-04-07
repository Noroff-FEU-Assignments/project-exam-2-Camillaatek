import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Details from "./components/pages/Details";
import Admin from "./components/pages/admin/pages/Admin";
import './sass/main.scss'
import NavBar from "./components/navbar/NavBar";
import Login from "./components/pages/Login";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import Accommodations from "./components/pages/Accommodations";
import AllHotels from "./components/pages/admin/pages/AllHotels";
import Enquiries from "./components/pages/admin/pages/Enquiries";
import Messages from "./components/pages/admin/pages/Messages";



function App() {
  return (
  <>
  <AuthProvider>
  <Router>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/accommodations' element={<Accommodations />} />
      <Route path='/login' element={<Login />} />
      <Route path='/:id' element={<Details />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/allhotels' element={<AllHotels />} />
      <Route path='/enquiries' element={<Enquiries />} />
      <Route path='/messages' element={<Messages />} />
    </Routes>
  </Router>
  </AuthProvider>
  </>
  );
}

export default App;
