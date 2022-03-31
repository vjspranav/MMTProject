import * as React from "react";
import Card from "@mui/material/Card";
import { Button, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  PauseCircle,
  Replay,
  ReplayCircleFilledOutlined,
} from "@mui/icons-material";
import Slider from "@mui/material/Slider";
import CircularProgress from "@mui/material/CircularProgress";
import { Chip } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
  const [durationData, setDurationData] = React.useState([]);

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

  const useStyles = makeStyles({
    button: {
      backgroundColor: "#56cfe1",
      color: "white",
      "&:hover": {
        backgroundColor: "#48bfe3",
        color: "white",
      },
    },
  });

  const deleteChip = (id) => {
    setDurationData(durationData.filter((_, ind) => ind !== id));
  };

  const classes = useStyles();
  return (
    // Center the player in the page
    // Vertically center the player in the page
    <div>
      {loading ? (
        // <Card
        //   sx={{
        //     display: "flex",
        //     justifyContent: "center",
        //     alignItems: "center",
        //     margin: "20%",
        //     width: "50%",
        //     height: "200px",
        //     backgroundColor: "rgba(0, 0, 0, 0.5)",
        //   }}
        // >
        <CircularProgress />
      ) : (
        // {/* </Card> */}
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            width: "50%",
            padding: "40px",
          }}
        >
          <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              {durationData.length > 0
                ? durationData.map((data, ind) => {
                    console.log(data);
                    return (
                      <Chip
                        key={ind}
                        label={`${Math.floor(data[0] / 60)}:${(
                          "0" + Math.floor(data[0] % 60)
                        ).slice(-2)} - ${Math.floor(data[1] / 60)}:${(
                          "0" + Math.floor(data[1] % 60)
                        ).slice(-2)}`}
                        onDelete={() => deleteChip(ind)}
                        onClick={() => {
                          setStartTime(data[0]);
                          audio.currentTime = data[0];
                          setEndTime(data[1]);
                        }}
                        style={{ margin: "3px 0" }}
                      />
                    );
                  })
                : "Select some timestamps"}
            </div>
            <div
              style={{
                flex: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "stretch",
                textAlign: "center",
                margin: "0 30px",
              }}
            >
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
                style={{ alignSelf: "center" }}
              >
                {!isPlaying ? (
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                ) : (
                  <PauseCircle sx={{ height: 38, width: 38 }} />
                )}
              </IconButton>

              <Slider
                value={currentTime}
                min={0}
                max={audio.duration}
                size="small"
                valueLabelFormat={(value) =>
                  `0${Math.floor(value / 60)}`.slice(-2) +
                  ":" +
                  `0${Math.floor(value % 60)}`.slice(-2)
                }
                onChange={(e, value) => {
                  audio.currentTime = value;
                  // setStartTime(value);
                }}
                onChangeCommitted={(e, value) => {
                  audio.currentTime = value;
                  // setStartTime(value);
                }}
                valueLabelDisplay="on"
                style={{ margin: "30px 0", color: "#48bfe3" }}
              />
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    className={classes.button}
                    sx={{
                      minWidth: 0,
                      borderRadius: "15px",
                      height: "20px",
                    }}
                    onClick={() => {
                      setStartTime(audio.currentTime);
                    }}
                  >
                    Set
                  </Button>
                  <TimeField
                    value={`${`0${Math.floor(startTime / 60)}`.slice(-2)}:${
                      Math.floor(startTime) % 60
                    }`}
                    onChange={(event, value) => {
                      const [minutes, seconds] = value.split(":");
                      setStartTime(parseInt(minutes) * 60 + parseInt(seconds));
                      audio.currentTime =
                        parseInt(minutes) * 60 + parseInt(seconds);
                    }}
                    colon=":"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    className={classes.button}
                    onClick={() => {
                      if (durationData.length < 5) {
                        // If endTime - startTime is greater than 30 seconds don't allow it
                        if (endTime - startTime > 30) {
                          alert(
                            "Please select a duration less than 30 seconds"
                          );
                        } else {
                          setDurationData(
                            [...durationData, [startTime, endTime]]
                            // .filter(
                            //   function (item, index, inputArray) {
                            //         for (let i = 0; i < inputArray.length; i++)
                            //           if (
                            //             inputArray[i][0] == item[0] &&
                            //             inputArray[i][1] == item[1] &&
                            //             index != i
                            //           )
                            //             return false;
                            //         return true;
                            //   }
                            // )
                          );
                        }
                      }
                    }}
                  >
                    Add
                  </Button>
                  <IconButton
                    aria-label="reset"
                    onClick={() => {
                      setStartTime(0);
                      audio.currentTime = 0;
                      setEndTime(audio.duration);
                    }}
                  >
                    <ReplayCircleFilledOutlined />
                  </IconButton>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    className={classes.button}
                    sx={{
                      minWidth: 0,
                      borderRadius: "15px",
                      height: "20px",
                    }}
                    onClick={() => {
                      setEndTime(audio.currentTime);
                    }}
                  >
                    Set
                  </Button>
                  <TimeField
                    value={
                      `0${Math.floor(endTime / 60)}`.slice(-2) +
                      ":" +
                      `${Math.floor(endTime) % 60}`
                    }
                    onChange={(event, value) => {
                      const [minutes, seconds] = value.split(":");
                      setEndTime(parseInt(minutes) * 60 + parseInt(seconds));
                    }}
                    colon=":"
                  />
                </div>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <img
                src={albumArt}
                alt={songName + " by " + artistName}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
