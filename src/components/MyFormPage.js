import Card from "@mui/material/Card";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MyPlayer from "./MyPlayer";
import { qData } from "./qData";

export default function MyFormPage({
  songName,
  artistName,
  filePath,
  albumArt,
}) {
  console.log(qData);

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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "10px 0",
            width: "100%",
          }}
        >
          {/* Answer the following Questions */}
          <h2
            style={{
              color: "#56cfe1",
              margin: "10px 0",
              fontWeight: "bold",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            Answer the following Questions
          </h2>
          {qData.map((q) => (
            <FormControl id={`fc${q.qid}`}>
              <FormLabel id={`q${q.qid}`}>{q.question}</FormLabel>
              <RadioGroup aria-label={`q${q.qid}`} name={`q${q.qid}`} row>
                {q.answers.map((a) => (
                  <FormControlLabel value={a} control={<Radio />} label={a} />
                ))}
              </RadioGroup>
            </FormControl>
          ))}
        </div>
      </Card>
    </div>
  );
}
