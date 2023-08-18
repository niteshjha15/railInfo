"use client"
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
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import style from "./trainStatus.module.css"
import { useEffect, useRef } from "react";

function TrainTimeLine({ trainData }) {

  const currentCard = useRef()

  useEffect(() => {
    currentCard?.current?.scrollIntoView({ behavior: 'smooth' });
  },[])

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
            key={station?.station_name}
          >
            <FiberManualRecordIcon className="text-green-600" />
            <Accordion
              sx={{
                width: "100%",
                marginBottom: "10px",
                marginTop: "0.8rem"
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
                <Timeline className={style.timelineWrap}>
                  {station?.non_stops?.map(
                    (nonStops, idx) =>
                      nonStops?.station_name && (
                        <TimelineItem key={nonStops?.station_name}>
                          <TimelineSeparator>
                            <TimelineDot sx={{ backgroundColor: "green" }} />
                            {idx !== station?.non_stops?.length - 1 && <TimelineConnector sx={{ backgroundColor: "green" }} />}
                          </TimelineSeparator>
                          <TimelineContent sx={{ fontSize: "12px" }}>{nonStops?.station_name}</TimelineContent>
                        </TimelineItem>
                      )
                  )}
                </Timeline>
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
        ref={currentCard}
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
              trainData?.current_location_info?.map((status,idx) => (
                <section key={idx} className="flex gap-3">
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
            key={station?.station_name}
          >
            <FiberManualRecordIcon className="text-orange-600" />
            <Accordion
              sx={{
                width: "100%",
                marginBottom: "5px",
                marginTop: "0.8rem"
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                {station?.station_name && <Typography>{station?.station_name || "N/A"}</Typography>}
              </AccordionSummary>
              <AccordionDetails>
                <Timeline className={style.timelineWrap}>
                {station?.non_stops?.map(
                  (nonStops,idx) =>
                    nonStops?.station_name && (
                      <TimelineItem key={nonStops?.station_name}>
                        <TimelineSeparator>
                          <TimelineDot sx={{ backgroundColor: "orange" }} />
                          {idx !== station?.non_stops?.length - 1 && <TimelineConnector sx={{ backgroundColor: "orange" }} />}
                        </TimelineSeparator>
                        <TimelineContent sx={{ fontSize: "12px" }}>{nonStops?.station_name}</TimelineContent>
                      </TimelineItem>
                    )
                )}
                </Timeline>
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
    </div>
  );
}

export default TrainTimeLine;
