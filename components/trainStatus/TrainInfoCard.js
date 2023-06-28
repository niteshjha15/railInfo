import { Box, Card, CardContent, Typography } from "@mui/material";
import DirectionsRailwayIcon from "@mui/icons-material/DirectionsRailway";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

function TrainInfoCard({ trainInfo }) {
  return (
    <Card>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "10px",
          }}
        >
          <DirectionsRailwayIcon
            sx={{
              color: "#526D82",
            }}
          />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {trainInfo?.train_number}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {trainInfo?.train_name}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
          }}
        >
          <CalendarMonthIcon
            sx={{
              color: "#526D82",
            }}
          />
          {trainInfo?.run_days?.split(",")?.length > 0 &&
            trainInfo?.run_days?.split(",")?.map((day) => (
              <Typography
                key={day}
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {day}
              </Typography>
            ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <CompareArrowsIcon
            sx={{
              color: "#526D82",
            }}
          />
          {trainInfo?.source && (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {trainInfo?.source}
            </Typography>
          )}
          <CompareArrowsIcon
            sx={{
              color: "#526D82",
              fontSize: "15px",
            }}
          />
          {trainInfo?.destination && (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {trainInfo?.destination}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <AccessAlarmIcon
            sx={{
              color: "#526D82",
            }}
          />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {trainInfo?.title || "NA"}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default TrainInfoCard;
