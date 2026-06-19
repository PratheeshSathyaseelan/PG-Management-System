import {
  Dashboard,
  Apartment,
  Groups,
  Hotel,
  Payments,
  Assessment,
  Settings,
} from "@mui/icons-material";

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

const drawerWidth = 240;

const menuItems = [
  { text: "Dashboard", icon: <Dashboard /> },
  { text: "My PGs", icon: <Apartment /> },
  { text: "Guests", icon: <Groups /> },
  { text: "Rooms", icon: <Hotel /> },
  { text: "Payments", icon: <Payments /> },
  { text: "Reports", icon: <Assessment /> },
  { text: "Settings", icon: <Settings /> },
];

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          background: "#1E293B",
          color: "white",
        },
      }}
    >
      <Toolbar>
        <Typography variant="h6" fontWeight="bold">
          PG Manager
        </Typography>
      </Toolbar>

      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                {item.icon}
              </ListItemIcon>

              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;