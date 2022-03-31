import Card from "@mui/material/Card";
import MyPlayer from "./MyPlayer";

export default function MyFormPage({
  songName,
  artistName,
  filePath,
  albumArt,
}) {
  return (
    <div>
      <div>
        <MyPlayer
          songName={songName}
          artistName={artistName}
          filePath={filePath}
          albumArt={albumArt}
        />
      </div>
      <Card
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px auto auto",
          marginTop: "20px",
          width: "50%",
          padding: "40px",
        }}
      >
        <h1>Questions here</h1>
      </Card>
    </div>
  );
}
