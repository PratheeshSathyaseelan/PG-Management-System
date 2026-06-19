import { useState } from "react";
import { Box, Card, CardContent, Typography, Button, TextField, Chip } from "@mui/material";
import MainLayout from "../../layouts/MainLayout";

const mockRooms = [
  { id: 101, roomNumber: "101", type: "Single", status: "Occupied", guest: "Rajesh Kumar", rent: 8000 },
  { id: 102, roomNumber: "102", type: "Double", status: "Occupied", guest: "Priya Singh", rent: 12000 },
  { id: 103, roomNumber: "103", type: "Single", status: "Vacant", guest: null, rent: 8000 },
  { id: 104, roomNumber: "104", type: "Double", status: "Vacant", guest: null, rent: 12000 },
  { id: 105, roomNumber: "105", type: "Single", status: "Occupied", guest: "Amit Patel", rent: 8000 },
  { id: 106, roomNumber: "106", type: "Triple", status: "Occupied", guest: "3 Guests", rent: 15000 },
];

function RoomList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [rooms] = useState(mockRooms);

  const filteredRooms = rooms.filter(
    (room) =>
      room.roomNumber.includes(searchTerm) ||
      room.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => (status === "Occupied" ? "error" : "success");

  return (
    <MainLayout>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
          Room Management
        </Typography>
        <TextField
          placeholder="Search by room number or type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          sx={{ mb: 3 }}
        />
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 2 }}>
        {filteredRooms.map((room) => (
          <Card key={room.id}>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Room {room.roomNumber}
                </Typography>
                <Chip label={room.status} color={getStatusColor(room.status)} />
              </Box>
              <Typography color="textSecondary" sx={{ mb: 1 }}>
                Type: {room.type}
              </Typography>
              <Typography color="textSecondary" sx={{ mb: 1 }}>
                Rent: ₹{room.rent}/month
              </Typography>
              {room.guest && (
                <Typography color="textSecondary" sx={{ mb: 1 }}>
                  Guest: {room.guest}
                </Typography>
              )}
              <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                <Button variant="outlined" size="small">
                  View
                </Button>
                <Button variant="outlined" size="small">
                  Edit
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </MainLayout>
  );
}

export default RoomList;
