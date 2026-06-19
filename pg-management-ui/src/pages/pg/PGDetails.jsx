import { Box, Card, CardContent, Typography, Button, Chip } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

const mockProperty = {
  id: 1,
  name: "City Heights PG",
  address: "Koramangala, Bangalore",
  city: "Bangalore",
  state: "Karnataka",
  pincode: "560034",
  totalRooms: 20,
  occupiedRooms: 15,
  rent: 8000,
  rating: 4.5,
  type: "Shared",
  amenities: ["WiFi", "AC", "Meals", "Laundry", "Study Area", "Common Kitchen"],
  owner: "John Doe",
  ownerPhone: "9876543210",
  description: "Premium PG with excellent amenities in the heart of Bangalore",
};

function PGDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Button variant="outlined" onClick={() => navigate("/properties")} sx={{ mb: 2 }}>
        ← Back
      </Button>
      <Card sx={{ boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            {mockProperty.name}
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 3, mb: 3 }}>
            <Box>
              <Typography variant="body2" color="textSecondary">
                Location
              </Typography>
              <Typography>{mockProperty.address}</Typography>
              <Typography variant="body2">{mockProperty.city}, {mockProperty.state}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary">
                Owner Details
              </Typography>
              <Typography>{mockProperty.owner}</Typography>
              <Typography variant="body2">{mockProperty.ownerPhone}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary">
                Occupancy
              </Typography>
              <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                {mockProperty.occupiedRooms}/{mockProperty.totalRooms} Rooms
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary">
                Rent
              </Typography>
              <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                ₹{mockProperty.rent}/month
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Amenities
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {mockProperty.amenities.map((amenity, index) => (
                <Chip key={index} label={amenity} color="primary" variant="outlined" />
              ))}
            </Box>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Description
            </Typography>
            <Typography>{mockProperty.description}</Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Button variant="contained">Edit Property</Button>
            <Button variant="outlined" color="error">Delete</Button>
          </Box>
        </CardContent>
      </Card>
    </MainLayout>
  );
}

export default PGDetails;
