import { useState } from "react";
import { Box, Card, CardContent, Typography, Button, TextField, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import MainLayout from "../../layouts/MainLayout";

const mockPayments = [
  { id: 1, guestName: "Rajesh Kumar", month: "June 2024", amount: 8000, status: "Paid", dueDate: "2024-06-05", paidDate: "2024-06-03" },
  { id: 2, guestName: "Priya Singh", month: "June 2024", amount: 12000, status: "Paid", dueDate: "2024-06-05", paidDate: "2024-06-04" },
  { id: 3, guestName: "Amit Patel", month: "June 2024", amount: 8000, status: "Pending", dueDate: "2024-06-05", paidDate: null },
  { id: 4, guestName: "Rajesh Kumar", month: "May 2024", amount: 8000, status: "Paid", dueDate: "2024-05-05", paidDate: "2024-05-05" },
  { id: 5, guestName: "Priya Singh", month: "May 2024", amount: 12000, status: "Paid", dueDate: "2024-05-05", paidDate: "2024-05-03" },
];

function PaymentList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [payments] = useState(mockPayments);

  const filteredPayments = payments.filter(
    (payment) =>
      payment.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.month.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => (status === "Paid" ? "success" : "warning");

  const totalAmount = filteredPayments.reduce((sum, p) => sum + p.amount, 0);
  const paidAmount = filteredPayments.filter(p => p.status === "Paid").reduce((sum, p) => sum + p.amount, 0);

  return (
    <MainLayout>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
          Payment Management
        </Typography>
        <TextField
          placeholder="Search by guest name or month..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          sx={{ mb: 3 }}
        />
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 2, mb: 3 }}>
        <Card sx={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "white" }}>
          <CardContent>
            <Typography color="inherit" variant="body2">Total Amount</Typography>
            <Typography sx={{ fontSize: "1.8rem", fontWeight: "bold" }}>₹{totalAmount.toLocaleString()}</Typography>
          </CardContent>
        </Card>
        <Card sx={{ background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", color: "white" }}>
          <CardContent>
            <Typography color="inherit" variant="body2">Paid Amount</Typography>
            <Typography sx={{ fontSize: "1.8rem", fontWeight: "bold" }}>₹{paidAmount.toLocaleString()}</Typography>
          </CardContent>
        </Card>
        <Card sx={{ background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", color: "white" }}>
          <CardContent>
            <Typography color="inherit" variant="body2">Pending Amount</Typography>
            <Typography sx={{ fontSize: "1.8rem", fontWeight: "bold" }}>₹{(totalAmount - paidAmount).toLocaleString()}</Typography>
          </CardContent>
        </Card>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ background: "#f5f5f5" }}>
            <TableRow>
              <TableCell><strong>Guest Name</strong></TableCell>
              <TableCell><strong>Month</strong></TableCell>
              <TableCell align="right"><strong>Amount</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Due Date</strong></TableCell>
              <TableCell><strong>Action</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPayments.map((payment) => (
              <TableRow key={payment.id} hover>
                <TableCell>{payment.guestName}</TableCell>
                <TableCell>{payment.month}</TableCell>
                <TableCell align="right">₹{payment.amount}</TableCell>
                <TableCell>
                  <Chip label={payment.status} color={getStatusColor(payment.status)} />
                </TableCell>
                <TableCell>{payment.dueDate}</TableCell>
                <TableCell>
                  <Button size="small" variant="outlined">Mark Paid</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainLayout>
  );
}

export default PaymentList;
