import { useState } from "react";
import { Box, Card, CardContent, Typography, Button, TextField, Rating } from "@mui/material";
import MainLayout from "../../layouts/MainLayout";

const mockProperties = [
  {
    id: 1,
    name: "City Heights PG",
    address: "Koramangala, Bangalore",
    totalRooms: 20,
    occupiedRooms: 15,
    rent: 8000,
    rating: 4.5,
    type: "Shared",
    amenities: ["WiFi", "AC", "Meals", "Laundry"],
  },
  {
    id: 2,
    name: "Tech Park Residency",
    address: "Whitefield, Bangalore",
    totalRooms: 30,
    occupiedRooms: 25,
    rent: 10000,
    rating: 4.8,
    type: "Semi-Private",
    amenities: ["WiFi", "AC", "Meals", "Gym", "Study Area"],
  },
  {
    id: 3,
    name: "Green Valley Homes",
    address: "Indiranagar, Bangalore",
    totalRooms: 25,
    occupiedRooms: 18,
    rent: 9000,
    rating: 4.3,
    type: "Shared",
    amenities: ["WiFi", "AC", "Meals"],
  },
];

function PGList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [properties] = useState(mockProperties);

  const filteredProperties = properties.filter(
    (prop) =>
      prop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prop.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
          My Properties
        </Typography>
        <TextField
          placeholder="Search properties..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          sx={{ mb: 3 }}
        />
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: 3 }}>
        {filteredProperties.map((prop) => (
          <Card key={prop.id} sx={{ boxShadow: 2, "&:hover": { boxShadow: 4 } }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                {prop.name}
              </Typography>
              <Typography color="textSecondary" sx={{ mb: 2 }}>
                📍 {prop.address}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Rating value={prop.rating} readOnly precision={0.1} />
                <Typography variant="body2" color="textSecondary">
                  {prop.rating}/5
                </Typography>
              </Box>
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, mb: 2 }}>
                <Box>
                  <Typography variant="body2" color="textSecondary">
                    Occupancy
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {prop.occupiedRooms}/{prop.totalRooms}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="textSecondary">
                    Type
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>{prop.type}</Typography>
                </Box>
              </Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                💰 ₹{prop.rent}/month
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button variant="contained" fullWidth>
                  View Details
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </MainLayout>
  );
}

export default PGList;
