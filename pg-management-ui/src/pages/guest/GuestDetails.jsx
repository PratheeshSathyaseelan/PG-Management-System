import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
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
    address: "123 Main Street",
    city: "Bangalore",
    state: "Karnataka",
  },
];

function GuestDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const guest = mockGuests[0];

  return (
    <MainLayout>
      <Button variant="outlined" onClick={() => navigate("/guests")} sx={{ mb: 2 }}>
        ← Back
      </Button>
      <Card>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            {guest.name}
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
            <Box>
              <Typography variant="body2" color="textSecondary">
                Email
              </Typography>
              <Typography>{guest.email}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary">
                Phone
              </Typography>
              <Typography>{guest.phone}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary">
                Room
              </Typography>
              <Typography>{guest.room}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary">
                Status
              </Typography>
              <Typography sx={{ color: guest.status === "Active" ? "green" : "red" }}>
                {guest.status}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary">
                Move In Date
              </Typography>
              <Typography>{guest.moveInDate}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary">
                Move Out Date
              </Typography>
              <Typography>{guest.moveOutDate}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary">
                Address
              </Typography>
              <Typography>{guest.address}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary">
                City, State
              </Typography>
              <Typography>{guest.city}, {guest.state}</Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 3, display: "flex", gap: 1 }}>
            <Button variant="contained">Edit</Button>
            <Button variant="outlined" color="error">Delete</Button>
          </Box>
        </CardContent>
      </Card>
    </MainLayout>
  );
}

export default GuestDetails;
