import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { PauseCircle } from "@mui/icons-material";
import Slider from "@mui/material/Slider";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import TimeField from "react-simple-timefield";

export default function MyPlayer(props) {
  const songName = props.songName;
  const artistName = props.artistName;
  const filePath = props.filePath;
  const albumArt = props.albumArt;

  const [audio, setAudio] = React.useState(new Audio(filePath));
  const [loading, setLoading] = React.useState(true);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [startTime, setStartTime] = React.useState(0);
  const [endTime, setEndTime] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);
  audio.oncanplay = () => {
    setLoading(false);
    setEndTime(audio.duration);
  };
  audio.onended = () => {
    setIsPlaying(false);
  };
  audio.ontimeupdate = () => {
    if (audio.currentTime > endTime) {
      audio.pause();
      setIsPlaying(false);
    } else {
      setCurrentTime(audio.currentTime);
    }
  };
  return (
    // Center the player in the page
    // Vertically center the player in the page
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20%",
        width: "50%",
        backgroundColor: loading ? "rgba(0, 0, 0, 0.5)" : "",
      }}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Stack spacing={3} alignItems="center">
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography id="songName" component="div" variant="h5">
                {songName}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {artistName}
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <IconButton
                aria-label="play/pause"
                onClick={() => {
                  if (audio.paused) {
                    audio.play();
                    setIsPlaying(true);
                    // setAudio(audio);
                  } else {
                    audio.pause();
                    setIsPlaying(false);
                    // setAudio(audio);
                  }
                }}
              >
                {!isPlaying ? (
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                ) : (
                  <PauseCircle sx={{ height: 38, width: 38 }} />
                )}
              </IconButton>
            </Box>
            <Stack spacing={2} direction="row" alignItems="center">
              <Box sx={{ width: "147px", margin: "0", flexDirection: "row" }}>
                <div style={{ width: "100%", height: "100%", flex: 1 }}>
                  {Math.floor(currentTime / 60) +
                    ":" +
                    ("0" + `${Math.floor(currentTime % 60)}`).slice(-2) +
                    " / " +
                    Math.floor(audio.duration / 60) +
                    ":" +
                    ("0" + `${Math.floor(audio.duration % 60)}`).slice(-2)}
                </div>
              </Box>
              <Slider
                value={currentTime}
                min={0}
                max={audio.duration}
                size="small"
                valueLabelFormat={(value) =>
                  ("0" + `${Math.floor(value / 60)}`).slice(-2) +
                  ":" +
                  ("0" + `${Math.floor(value % 60)}`).slice(-2)
                }
                valueLabelDisplay="auto"
                onChange={(e, value) => {
                  audio.currentTime = value;
                  // setStartTime(value);
                }}
                onChangeCommitted={(e, value) => {
                  audio.currentTime = value;
                  // setStartTime(value);
                }}
              />
            </Stack>
            <Stack spacing={1} direction="row" alignItems="center">
              <Stack spacing={1} alignItems="center">
                {/* <TextField
                  id="startTime"
                  label="Start Time"
                  type="number"
                  value={startTime}
                  onChange={(e) => {
                    setStartTime(e.target.value);
                    audio.currentTime = e.target.value;
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  variant="outlined"
                  sx={{
                    width: "50%",
                    margin: "0 auto",
                  }}
                /> */}
                <TimeField
                  value={
                    ("0" + `${Math.floor(startTime / 60)}`).slice(-2) +
                    ":" +
                    `${Math.floor(startTime) % 60}`
                  }
                  onChange={(event, value) => {
                    const [minutes, seconds] = value.split(":");
                    setStartTime(parseInt(minutes) * 60 + parseInt(seconds));
                    audio.currentTime =
                      parseInt(minutes) * 60 + parseInt(seconds);
                  }}
                  colon=":"
                />{" "}
              </Stack>
              <Stack spacing={1} alignItems="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    alert("yo");
                  }}
                >
                  Add
                </Button>
              </Stack>
              <Stack spacing={2} alignItems="center">
                {/* <TextField
                  id="endTime"
                  label="End Time"
                  type="number"
                  value={Math.floor(endTime)}
                  onChange={(e) => {
                    setEndTime(e.target.value);
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  variant="outlined"
                  sx={{
                    width: "50%",
                    margin: "0 auto",
                  }}
                /> */}
                <TimeField
                  value={
                    ("0" + `${Math.floor(endTime / 60)}`).slice(-2) +
                    ":" +
                    `${Math.floor(endTime) % 60}`
                  }
                  onChange={(event, value) => {
                    const [minutes, seconds] = value.split(":");
                    setEndTime(parseInt(minutes) * 60 + parseInt(seconds));
                  }}
                  colon=":"
                />
              </Stack>
            </Stack>
          </Stack>
        </Box>
      )}
      <CardMedia
        component="img"
        sx={{
          width: 151,
          backgroundColor: loading ? "rgba(0, 0, 0, 0.5)" : "",
          position: "absolute",
          right: "31%",
        }}
        image={albumArt}
        alt={songName + " by " + artistName}
      />
    </Card>
  );
}
