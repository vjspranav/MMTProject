import React from "react";
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
  page,
}) {
  const [answers, setAnswers] = React.useState({});
  React.useEffect(() => {
    let temp = JSON.parse(localStorage.getItem("mmt-research"));
    // If temp has songName, then add a field
    if (songName in temp.data) {
      if ("answers" in temp.data[songName]) {
        setAnswers(temp.data[songName].answers);
      } else {
        setAnswers({});
        temp.data[songName].answers = answers;
        localStorage.setItem("mmt-research", JSON.stringify(temp));
      }
    } else {
      setAnswers({});
      temp.data[songName].answers = answers;
      localStorage.setItem("mmt-research", JSON.stringify(temp));
    }
  }, [page]);
  return (
    <div>
      <div>
        <MyPlayer
          songName={songName}
          artistName={artistName}
          filePath={filePath}
          albumArt={albumArt}
          page={page}
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
                  <FormControlLabel
                    value={a}
                    checked={
                      JSON.parse(localStorage.getItem("mmt-research")).data[
                        songName
                      ]
                        ? JSON.parse(localStorage.getItem("mmt-research")).data[
                            songName
                          ].answers
                          ? JSON.parse(localStorage.getItem("mmt-research"))
                              .data[songName].answers[q.qid]
                            ? JSON.parse(localStorage.getItem("mmt-research"))
                                .data[songName].answers[q.qid] === a
                            : false
                          : false
                        : false
                    }
                    onChange={(e) => {
                      setAnswers({ ...answers, [q.qid]: e.target.value });
                      let temp = JSON.parse(
                        localStorage.getItem("mmt-research")
                      );
                      temp.data[songName].answers = {
                        ...answers,
                        [q.qid]: e.target.value,
                      };
                      localStorage.setItem(
                        "mmt-research",
                        JSON.stringify(temp)
                      );
                    }}
                    control={<Radio />}
                    label={a}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          ))}
        </div>
      </Card>
    </div>
  );
}
