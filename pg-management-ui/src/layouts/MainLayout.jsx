import { Box, Toolbar } from "@mui/material";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

function MainLayout({ children }) {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, ml: "260px" }}>
        <Navbar />

        <Box sx={{ p: 3, mt: 8 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default MainLayout;