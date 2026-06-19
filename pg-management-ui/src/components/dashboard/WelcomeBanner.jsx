import { Paper, Typography, Box } from "@mui/material";

function WelcomeBanner() {
  const currentHour = new Date().getHours();

  let greeting = "Good Evening";

  if (currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour < 17) {
    greeting = "Good Afternoon";
  }

  return (
    <Paper
      elevation={0}
      sx={{
        background: "linear-gradient(135deg,#2563EB,#4F46E5)",
        color: "white",
        borderRadius: 4,
        padding: 4,
        mb: 4,
      }}
    >
      <Box>
        <Typography
          variant="h4"
          fontWeight="bold"
        >
          👋 {greeting}, Vaishnavisripriya
        </Typography>

        <Typography
          sx={{
            mt: 1,
            opacity: 0.9,
          }}
        >
          Manage your PGs efficiently from one place.
        </Typography>
      </Box>
    </Paper>
  );
}

export default WelcomeBanner;