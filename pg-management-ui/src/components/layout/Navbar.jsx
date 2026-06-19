import { AppBar, Toolbar, Typography, Avatar, Box, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        ml: "260px",
        width: "calc(100% - 260px)",
        background: "white",
        color: "black",
        boxShadow: 1,
        zIndex: 10,
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          PG Management Dashboard
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ textAlign: "right" }}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {user.email || "Admin"}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Administrator
            </Typography>
          </Box>
          <Button
            onClick={handleMenuOpen}
            sx={{
              p: 0,
              "&:hover": {
                background: "rgba(0,0,0,0.04)",
              },
            }}
          >
            <Avatar sx={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
              {(user.email || "A")[0].toUpperCase()}
            </Avatar>
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;