import { Card, CardContent, Typography, Box } from "@mui/material";

function DashboardCard({ title, value, icon }) {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        height: 140,
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography color="text.secondary">
            {title}
          </Typography>

          {icon}
        </Box>

        <Typography
          variant="h4"
          fontWeight="bold"
          mt={3}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DashboardCard;