import { useState } from "react";
import { Box, Card, CardContent, Typography, Button, TextField, Switch, FormControlLabel } from "@mui/material";
import MainLayout from "../layouts/MainLayout";

function Settings() {
  const [settings, setSettings] = useState({
    businessName: "PG Management System",
    email: "admin@pgmanagement.com",
    phone: "9876543210",
    address: "Bangalore, Karnataka",
    currency: "INR",
    notifications: true,
    emailAlerts: true,
    darkMode: false,
  });

  const handleChange = (field, value) => {
    setSettings({ ...settings, [field]: value });
  };

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <MainLayout>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        Settings
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 3 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Business Information
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                fullWidth
                label="Business Name"
                value={settings.businessName}
                onChange={(e) => handleChange("businessName", e.target.value)}
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={settings.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <TextField
                fullWidth
                label="Phone"
                value={settings.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
              <TextField
                fullWidth
                label="Address"
                value={settings.address}
                onChange={(e) => handleChange("address", e.target.value)}
                multiline
                rows={3}
              />
              <TextField
                fullWidth
                label="Currency"
                value={settings.currency}
                onChange={(e) => handleChange("currency", e.target.value)}
              />
              <Button variant="contained" onClick={handleSave}>
                Save Changes
              </Button>
            </Box>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Preferences
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.notifications}
                    onChange={(e) => handleChange("notifications", e.target.checked)}
                  />
                }
                label="Enable Notifications"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.emailAlerts}
                    onChange={(e) => handleChange("emailAlerts", e.target.checked)}
                  />
                }
                label="Email Alerts"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.darkMode}
                    onChange={(e) => handleChange("darkMode", e.target.checked)}
                  />
                }
                label="Dark Mode"
              />
              <Button variant="contained" onClick={handleSave}>
                Save Preferences
              </Button>
            </Box>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Security
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Button variant="outlined">Change Password</Button>
              <Button variant="outlined">Two-Factor Authentication</Button>
              <Button variant="outlined">View Activity Log</Button>
              <Button variant="outlined" color="error">
                Logout
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </MainLayout>
  );
}

export default Settings;
