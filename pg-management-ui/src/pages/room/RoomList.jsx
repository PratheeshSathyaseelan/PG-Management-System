import { useState } from "react";
import { Box, Card, CardContent, Typography, Button, TextField, Chip, Divider } from "@mui/material";
import MainLayout from "../../layouts/MainLayout";

const mockRooms = [
  { id: 101, roomNumber: "101", type: "Single", status: "Occupied", guest: "Rajesh Kumar", rent: 8000, electricity: { units: 45, bill: 450 } },
  { id: 102, roomNumber: "102", type: "Double", status: "Occupied", guest: "Priya Singh", rent: 12000, electricity: { units: 62, bill: 620 } },
  { id: 103, roomNumber: "103", type: "Single", status: "Vacant", guest: null, rent: 8000, electricity: { units: 0, bill: 0 } },
  { id: 104, roomNumber: "104", type: "Double", status: "Vacant", guest: null, rent: 12000, electricity: { units: 0, bill: 0 } },
  { id: 105, roomNumber: "105", type: "Single", status: "Occupied", guest: "Amit Patel", rent: 8000, electricity: { units: 38, bill: 380 } },
  { id: 106, roomNumber: "106", type: "Triple", status: "Occupied", guest: "3 Guests", rent: 15000, electricity: { units: 85, bill: 850 } },
  { id: 107, roomNumber: "107", type: "4-Sharing", status: "Occupied", guest: "4 Guests", rent: 6000, electricity: { units: 95, bill: 950 } },
  { id: 108, roomNumber: "108", type: "4-Sharing", status: "Occupied", guest: "4 Guests", rent: 6000, electricity: { units: 88, bill: 880 } },
  { id: 109, roomNumber: "109", type: "4-Sharing", status: "Vacant", guest: null, rent: 6000, electricity: { units: 0, bill: 0 } },
  { id: 110, roomNumber: "110", type: "4-Sharing", status: "Occupied", guest: "4 Guests", rent: 6000, electricity: { units: 92, bill: 920 } },
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

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: 2 }}>
        {filteredRooms.map((room) => (
          <Card key={room.id} sx={{ boxShadow: 2, "&:hover": { boxShadow: 4 } }}>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Room {room.roomNumber}
                </Typography>
                <Chip label={room.status} color={getStatusColor(room.status)} />
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography color="textSecondary" sx={{ mb: 0.5 }}>
                  <strong>Type:</strong> {room.type}
                </Typography>
                <Typography color="textSecondary" sx={{ mb: 0.5 }}>
                  <strong>Rent:</strong> ₹{room.rent}/month
                </Typography>
                {room.guest && (
                  <Typography color="textSecondary" sx={{ mb: 0.5 }}>
                    <strong>Guest:</strong> {room.guest}
                  </Typography>
                )}
              </Box>

              <Divider sx={{ my: 1.5 }} />

              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1, color: "#1976d2" }}>
                  ⚡ Electricity Bill
                </Typography>
                <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1 }}>
                  <Box sx={{ background: "#f5f5f5", p: 1, borderRadius: 1 }}>
                    <Typography variant="caption" color="textSecondary">
                      Units Used
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                      {room.electricity.units} kWh
                    </Typography>
                  </Box>
                  <Box sx={{ background: "#fff3e0", p: 1, borderRadius: 1 }}>
                    <Typography variant="caption" color="textSecondary">
                      Current Bill
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem", color: "#f57c00" }}>
                      ₹{room.electricity.bill}
                    </Typography>
                  </Box>
                </Box>
              </Box>

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
