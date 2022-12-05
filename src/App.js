import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import Auth from "./pages/Auth/Auth";
import Bag from "./pages/Bag/Bag";
import ComputerPage from "./pages/ComputerPage/ComputerPage";
import FridgePage from "./pages/FridgePage/FridgePage";
import Home from "./pages/Home/Home";
import PhonePage from "./pages/PhonePage/PhonePage";
import Register from "./pages/Register/Register";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/phone" element={<PhonePage />} />
        <Route path="/computer" element={<ComputerPage />} />
        <Route path="/fridge" element={<FridgePage />} />
      </Routes>
    </div>
  );
};

export default App;
