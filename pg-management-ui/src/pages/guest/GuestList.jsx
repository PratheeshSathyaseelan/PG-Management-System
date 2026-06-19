import { useState } from "react";
import { Box, Card, CardContent, Typography, Button, TextField } from "@mui/material";
import MainLayout from "../../layouts/MainLayout";

const mockGuests = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "rajesh@email.com",
    phone: "9876543210",
    room: "101",
    moveInDate: "2024-01-15",
    moveOutDate: "2025-01-15",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya@email.com",
    phone: "9876543211",
    room: "102",
    moveInDate: "2024-02-10",
    moveOutDate: "2025-02-10",
    status: "Active",
  },
  {
    id: 3,
    name: "Amit Patel",
    email: "amit@email.com",
    phone: "9876543212",
    room: "103",
    moveInDate: "2023-12-01",
    moveOutDate: "2024-12-01",
    status: "Inactive",
  },
];

function GuestList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [guests] = useState(mockGuests);

  const filteredGuests = guests.filter(
    (guest) =>
      guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
          Guest Management
        </Typography>
        <TextField
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          sx={{ mb: 3 }}
        />
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 2 }}>
        {filteredGuests.map((guest) => (
          <Card key={guest.id}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                {guest.name}
              </Typography>
              <Typography color="textSecondary" sx={{ mb: 1 }}>
                Email: {guest.email}
              </Typography>
              <Typography color="textSecondary" sx={{ mb: 1 }}>
                Phone: {guest.phone}
              </Typography>
              <Typography color="textSecondary" sx={{ mb: 1 }}>
                Room: {guest.room}
              </Typography>
              <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                <Button variant="outlined" size="small">
                  View
                </Button>
                <Button variant="outlined" size="small" color="error">
                  Delete
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </MainLayout>
  );
}

export default GuestList;
