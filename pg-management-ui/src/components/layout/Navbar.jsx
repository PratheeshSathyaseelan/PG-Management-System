import { AppBar, Toolbar, Typography, Avatar, Box } from "@mui/material";

function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        ml: "240px",
        width: "calc(100% - 240px)",
        background: "white",
        color: "black",
        boxShadow: 1,
      }}
    >
      <Toolbar>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>

        <Box display="flex" alignItems="center" gap={2}>
          <Avatar>V</Avatar>

          <Typography>Vaishnavi</Typography>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;