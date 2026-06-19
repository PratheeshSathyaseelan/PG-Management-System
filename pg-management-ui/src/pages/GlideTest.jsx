import { useState } from "react";
import { Box, Button, Card, CardContent, Typography, TextField, CircularProgress, Alert } from "@mui/material";
import MainLayout from "../layouts/MainLayout";

function GlideTest() {
  const [apiKey, setApiKey] = useState("");
  const [appId, setAppId] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const testConnection = async () => {
    if (!apiKey || !appId) {
      setError("Please enter API Key and App ID");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // Test query to Glide
      const response = await fetch("https://api.glideapp.io/api/function/queryTablesql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          appID: appId,
          sql: "SELECT * FROM Rooms LIMIT 5",
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data = await response.json();
      setResult({
        success: true,
        message: "✅ Connection Successful!",
        data: data,
        rowCount: Array.isArray(data) ? data.length : 0,
      });
    } catch (err) {
      setError(`❌ Connection Failed: ${err.message}`);
      console.error("Glide Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
        <Card sx={{ boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
              🔗 Test Glide Connection
            </Typography>

            <TextField
              fullWidth
              label="Glide API Key"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Paste your API Key"
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Glide App ID"
              value={appId}
              onChange={(e) => setAppId(e.target.value)}
              placeholder="Paste your App ID"
              sx={{ mb: 3 }}
            />

            <Button
              fullWidth
              variant="contained"
              onClick={testConnection}
              disabled={loading}
              sx={{ mb: 2 }}
            >
              {loading ? <CircularProgress size={24} sx={{ mr: 1 }} /> : "Test Connection"}
            </Button>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            {result && (
              <Alert severity={result.success ? "success" : "error"} sx={{ mb: 2 }}>
                <Typography sx={{ fontWeight: "bold" }}>{result.message}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Rows received: {result.rowCount}
                </Typography>
                {result.data && (
                  <Box sx={{ mt: 2, p: 1, background: "#f5f5f5", borderRadius: 1, maxHeight: 300, overflow: "auto" }}>
                    <Typography variant="caption" component="pre">
                      {JSON.stringify(result.data, null, 2)}
                    </Typography>
                  </Box>
                )}
              </Alert>
            )}

            <Box sx={{ p: 2, background: "#f0f4ff", borderRadius: 1, mt: 3 }}>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                📌 Instructions:
              </Typography>
              <Typography variant="caption" component="div">
                1. Copy your API Key from Glide Dashboard → Settings → API
              </Typography>
              <Typography variant="caption" component="div">
                2. Copy your App ID from same location
              </Typography>
              <Typography variant="caption" component="div">
                3. Paste both above and click "Test Connection"
              </Typography>
              <Typography variant="caption" component="div" sx={{ mt: 1, color: "#d32f2f" }}>
                ⚠️ After testing, save these credentials in .env file (never commit to git)
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </MainLayout>
  );
}

export default GlideTest;
