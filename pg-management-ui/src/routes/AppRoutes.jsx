import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/auth/Login";
import GuestList from "../pages/guest/GuestList";
import GuestDetails from "../pages/guest/GuestDetails";
import PGList from "../pages/pg/PGList";
import PGDetails from "../pages/pg/PGDetails";
import RoomList from "../pages/room/RoomList";
import PaymentList from "../pages/payment/PaymentList";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import GlideTest from "../pages/GlideTest";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/guests" element={<GuestList />} />
        <Route path="/guests/:id" element={<GuestDetails />} />
        <Route path="/properties" element={<PGList />} />
        <Route path="/properties/:id" element={<PGDetails />} />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/payments" element={<PaymentList />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/test-glide" element={<GlideTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;