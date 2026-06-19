import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2563EB",
    },
    secondary: {
      main: "#1E293B",
    },
    background: {
      default: "#F4F6F9",
    },
  },

  shape: {
    borderRadius: 12,
  },

  typography: {
    fontFamily: "Poppins",
  },
});

export default theme;