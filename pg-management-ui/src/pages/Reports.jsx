import { Box, Card, CardContent, Typography, Button, Grid } from "@mui/material";
import MainLayout from "../layouts/MainLayout";

function Reports() {
  const reports = [
    { title: "Monthly Revenue", value: "₹1,25,000", change: "+12% from last month", icon: "📊" },
    { title: "Total Guests", value: "45", change: "5 new this month", icon: "👥" },
    { title: "Occupancy Rate", value: "92%", change: "2% increase", icon: "🏠" },
    { title: "Outstanding Amount", value: "₹32,000", change: "4 overdue payments", icon: "💰" },
  ];

  return (
    <MainLayout>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        Reports & Analytics
      </Typography>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        {reports.map((report, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ textAlign: "center", p: 2 }}>
              <Typography sx={{ fontSize: "2rem", mb: 1 }}>{report.icon}</Typography>
              <Typography variant="body2" color="textSecondary">
                {report.title}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold", my: 1 }}>
                {report.value}
              </Typography>
              <Typography variant="body2" color="primary">
                {report.change}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Monthly Report
          </Typography>
          <Box sx={{ height: "300px", display: "flex", alignItems: "center", justifyContent: "center", background: "#f5f5f5", borderRadius: 1 }}>
            <Typography color="textSecondary">Chart will be displayed here</Typography>
          </Box>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Generate Reports
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 2 }}>
            <Button variant="contained">Monthly Report</Button>
            <Button variant="outlined">Quarterly Report</Button>
            <Button variant="outlined">Yearly Report</Button>
            <Button variant="outlined">Custom Report</Button>
          </Box>
        </CardContent>
      </Card>
    </MainLayout>
  );
}

export default Reports;
