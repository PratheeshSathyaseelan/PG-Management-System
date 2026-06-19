import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";

function PGCard({
  name,
  location,
  beds,
  vacant,
}) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>

        <Typography variant="h6">
          {name}
        </Typography>

        <Typography color="text.secondary">
          {location}
        </Typography>

        <Stack
          direction="row"
          spacing={4}
          mt={2}
        >
          <Typography>
            Beds : {beds}
          </Typography>

          <Typography color="green">
            Vacant : {vacant}
          </Typography>
        </Stack>

        <Button
          variant="contained"
          sx={{ mt: 3 }}
        >
          Open PG
        </Button>

      </CardContent>
    </Card>
  );
}

export default PGCard;