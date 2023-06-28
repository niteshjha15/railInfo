import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { Box, Card, CardContent, Divider } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TrainInfoCard from "./TrainInfoCard";
import DirectionsRailwayIcon from "@mui/icons-material/DirectionsRailway";

function TrainTimeLine({ trainData }) {
  const statusIcon = (type) => {
    switch (type) {
      case 1:
        return (
          <AddLocationIcon
            sx={{
              color: "#526D82",
            }}
          />
        );

      default:
        return (
          <SwapHorizIcon
            sx={{
              color: "#526D82",
            }}
          />
        );
    }
  };
  const statusHint = (status) => {
    const type = status.type;
    switch (type) {
      case 1:
        return <p className="text-orange-600">{status?.hint}</p>;

      default:
        return (
          <SwapHorizIcon
            sx={{
              color: "#526D82",
            }}
          />
        );
    }
  };
  return (
    <div>
      <Box
        sx={{
          marginBottom: "2rem",
        }}
      >
        <TrainInfoCard trainInfo={trainData} />
      </Box>

      {trainData?.previous_stations?.length > 0 &&
        [...trainData?.previous_stations]?.map((station) => (
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <FiberManualRecordIcon className="text-green-600" />
            <Accordion
              sx={{
                width: "100%",
                marginBottom: "5px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{station?.station_name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {station?.non_stops?.map(
                  (nonStops) =>
                    nonStops?.station_name && (
                      <section>
                        <p className="text-xs py-4">{nonStops?.station_name}</p>
                      </section>
                    )
                )}
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <DirectionsRailwayIcon
          sx={{
            fontSize: "2rem",
          }}
        />
        <Card
          sx={{
            marginBottom: "2rem",
            marginTop: "2rem",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Current Status
            </Typography>
            {trainData?.current_location_info?.length > 0 &&
              trainData?.current_location_info?.map((status) => (
                <section className="flex gap-3">
                  {statusIcon(status?.type)}
                  <p>{status?.readable_message}</p>
                </section>
              ))}
            <section className="flex gap-3">
              <AccessTimeIcon />
              {trainData?.current_location_info?.length > 0 &&
                statusHint(
                  trainData?.current_location_info?.find(
                    (status) => status.type === 1
                  )
                )}
            </section>
          </CardContent>
        </Card>
      </Box>

      {trainData?.upcoming_stations?.length > 0 &&
        [...trainData?.upcoming_stations]?.map((station) => (
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <FiberManualRecordIcon className="text-orange-600" />
            <Accordion
              sx={{
                width: "100%",
                marginBottom: "5px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{station?.station_name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {station?.non_stops?.map(
                  (nonStops) =>
                    nonStops?.station_name && (
                      <section>
                        <p className="text-xs py-4">{nonStops?.station_name}</p>
                      </section>
                    )
                )}
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
    </div>
  );
}

export default TrainTimeLine;
