import MainLayout from "../../layouts/MainLayout";
import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import { Box, Card, CardContent, Typography, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const stats = [
  {
    title: "Total Properties",
    value: "3",
    icon: "🏢",
    color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    title: "Active Guests",
    value: "45",
    icon: "👥",
    color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    title: "Total Rooms",
    value: "75",
    icon: "🚪",
    color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    title: "Monthly Revenue",
    value: "₹1.25L",
    icon: "💰",
    color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
];

const recentPayments = [
  { id: 1, guest: "Rajesh Kumar", amount: 8000, date: "2024-06-03", status: "Paid" },
  { id: 2, guest: "Priya Singh", amount: 12000, date: "2024-06-04", status: "Paid" },
  { id: 3, guest: "Amit Patel", amount: 8000, date: "2024-06-05", status: "Pending" },
];

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <MainLayout>
      <WelcomeBanner />

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                background: stat.color,
                color: "white",
                boxShadow: 2,
                "&:hover": { boxShadow: 4 },
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Box>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {stat.title}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 }}>
                      {stat.value}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "2.5rem" }}>{stat.icon}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Recent Payments
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead sx={{ background: "#f5f5f5" }}>
                    <TableRow>
                      <TableCell><strong>Guest Name</strong></TableCell>
                      <TableCell><strong>Amount</strong></TableCell>
                      <TableCell><strong>Date</strong></TableCell>
                      <TableCell><strong>Status</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {recentPayments.map((payment) => (
                      <TableRow key={payment.id} hover>
                        <TableCell>{payment.guest}</TableCell>
                        <TableCell>₹{payment.amount}</TableCell>
                        <TableCell>{payment.date}</TableCell>
                        <TableCell>
                          <Typography
                            variant="body2"
                            sx={{
                              color: payment.status === "Paid" ? "green" : "orange",
                              fontWeight: "bold",
                            }}
                          >
                            {payment.status}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Button variant="outlined" sx={{ mt: 2 }}>
                View All Payments
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: 2, mb: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Quick Actions
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Button variant="contained" fullWidth>
                  Add Guest
                </Button>
                <Button variant="outlined" fullWidth>
                  Add Property
                </Button>
                <Button variant="outlined" fullWidth>
                  Add Room
                </Button>
                <Button variant="outlined" fullWidth>
                  View Reports
                </Button>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                System Stats
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Box>
                  <Typography variant="body2" color="textSecondary">
                    Occupancy Rate
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>92%</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="textSecondary">
                    Pending Payments
                  </Typography>
                  <Typography sx={{ fontWeight: "bold", color: "orange" }}>
                    ₹32,000
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="textSecondary">
                    Vacant Rooms
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>6 Rooms</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default Dashboard;