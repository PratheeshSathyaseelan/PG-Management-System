import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";
import AuthLayout from "../../layouts/AuthLayout";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    // Simple validation - in real app would call API
    if (email && password) {
      localStorage.setItem("token", "demo-token");
      localStorage.setItem("user", JSON.stringify({ email, role: "admin" }));
      navigate("/dashboard");
    }
  };

  return (
    <AuthLayout>
      <Card sx={{ p: 4, boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}>
        <Typography
          variant="h4"
          sx={{ mb: 1, fontWeight: "bold", textAlign: "center", color: "#333" }}
        >
          PG Management
        </Typography>
        <Typography
          variant="body2"
          sx={{ mb: 3, textAlign: "center", color: "#666" }}
        >
          Welcome back! Please login to your account.
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@pgmanagement.com"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            variant="outlined"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              py: 1.5,
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Login
          </Button>
        </Box>

        <Typography
          variant="body2"
          sx={{ mt: 3, textAlign: "center", color: "#999" }}
        >
          Demo: Use any email and password
        </Typography>
      </Card>
    </AuthLayout>
  );
}

export default Login;
