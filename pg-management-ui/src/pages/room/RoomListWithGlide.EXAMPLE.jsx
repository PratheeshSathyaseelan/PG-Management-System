// EXAMPLE: How to use Glide API with RoomList
// This shows how to replace mock data with real Glide data
// Uncomment and use this pattern for your other pages too!

import { useState, useEffect } from "react";
import { Box, Card, CardContent, Typography, Button, TextField, Chip, Divider, CircularProgress } from "@mui/material";
import MainLayout from "../../layouts/MainLayout";
import useGlideQuery from "../../hooks/useGlideQuery";

function RoomListWithGlide() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Fetch rooms from Glide using custom hook
  const { data: rooms, loading, error, refetch } = useGlideQuery(
    "SELECT * FROM Rooms ORDER BY RoomNumber"
  );

  // Filter rooms based on search
  const filteredRooms = rooms.filter(
    (room) =>
      room.RoomNumber?.includes(searchTerm) ||
      room.Type?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => (status === "Occupied" ? "error" : "success");

  // Show loading state
  if (loading) {
    return (
      <MainLayout>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
          <CircularProgress />
          <Typography sx={{ ml: 2 }}>Loading rooms...</Typography>
        </Box>
      </MainLayout>
    );
  }

  // Show error state
  if (error) {
    return (
      <MainLayout>
        <Box sx={{ p: 3, background: "#ffebee", borderRadius: 1 }}>
          <Typography color="error" variant="h6">
            Error loading rooms: {error}
          </Typography>
          <Button onClick={refetch} variant="contained" sx={{ mt: 2 }}>
            Retry
          </Button>
        </Box>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
          Room Management
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <TextField
            placeholder="Search by room number or type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ flex: 1 }}
          />
          <Button variant="outlined" onClick={refetch}>
            Refresh
          </Button>
        </Box>
      </Box>

      {filteredRooms.length === 0 ? (
        <Typography color="textSecondary">No rooms found</Typography>
      ) : (
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: 2 }}>
          {filteredRooms.map((room) => (
            <Card key={room.RoomID} sx={{ boxShadow: 2, "&:hover": { boxShadow: 4 } }}>
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Room {room.RoomNumber}
                  </Typography>
                  <Chip label={room.Status} color={getStatusColor(room.Status)} />
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography color="textSecondary" sx={{ mb: 0.5 }}>
                    <strong>Type:</strong> {room.Type}
                  </Typography>
                  <Typography color="textSecondary" sx={{ mb: 0.5 }}>
                    <strong>Rent:</strong> ₹{room.Rent}/month
                  </Typography>
                  {room.GuestName && (
                    <Typography color="textSecondary" sx={{ mb: 0.5 }}>
                      <strong>Guest:</strong> {room.GuestName}
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
                        {room.ElectricityUnits || 0} kWh
                      </Typography>
                    </Box>
                    <Box sx={{ background: "#fff3e0", p: 1, borderRadius: 1 }}>
                      <Typography variant="caption" color="textSecondary">
                        Current Bill
                      </Typography>
                      <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem", color: "#f57c00" }}>
                        ₹{room.ElectricityBill || 0}
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
      )}
    </MainLayout>
  );
}

export default RoomListWithGlide;
