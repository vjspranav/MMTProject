import React from "react";
// import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Card } from "@mui/material";

export default function EndPage({ page }) {
  const [answers, setAnswers] = React.useState({ fqtheory1: "" });
  React.useEffect(() => {
    let temp = JSON.parse(localStorage.getItem("mmt-research"));
    if ("final" in temp.data) {
      setAnswers(temp.data.final);
    } else {
      setAnswers({ fqtheory1: "" });
      temp.data.final = { fqtheory1: "" };
      localStorage.setItem("mmt-research", JSON.stringify(temp));
    }
  }, [page]);

  return (
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
          Please answer this final set of Questions
        </h2>

        {/*  Add a Form Control for Question Answer */}
        <FormControl
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "10px 0",
            width: "100%",
          }}
        >
          <FormLabel id="fqtheory1">
            Did you know about earworms before
          </FormLabel>
          <input
            type="text"
            value={answers.fqtheory}
            onChange={(e) => {
              setAnswers({ ...answers, fqtheory: e.target.value });
              let temp = JSON.parse(localStorage.getItem("mmt-research"));
              temp.data.final = { ...answers, fqtheory: e.target.value };
              localStorage.setItem("mmt-research", JSON.stringify(temp));
            }}
            placeholder="Answer"
            style={{
              width: "100%",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #56cfe1",
            }}
          />
        </FormControl>
        {/* Do you think there are any other earworm songs which are more prominent ? If yes please list them. */}
        <FormControl
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "10px 0",
            width: "100%",
          }}
        >
          <FormLabel id="fqtheory2">
            Do you think there are any other earworm songs which are more
            prominent ? If yes please list them.
          </FormLabel>
          <input
            type="text"
            value={answers.fqtheory2}
            onChange={(e) => {
              setAnswers({ ...answers, fqtheory2: e.target.value });
              let temp = JSON.parse(localStorage.getItem("mmt-research"));
              temp.data.final = { ...answers, fqtheory2: e.target.value };
              localStorage.setItem("mmt-research", JSON.stringify(temp));
            }}
            placeholder="Answer"
            style={{
              width: "100%",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #56cfe1",
            }}
          />
        </FormControl>
        {/* Do You want to know the results, if yes please enter your email id */}
        <FormControl
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "10px 0",
            width: "100%",
          }}
        >
          <FormLabel id="fqtheory3">
            Do you want to know the final results of the experiment? If yes
            please enter your email id
          </FormLabel>
          <input
            type="text"
            value={answers.fqtheory3}
            onChange={(e) => {
              setAnswers({ ...answers, fqtheory3: e.target.value });
              let temp = JSON.parse(localStorage.getItem("mmt-research"));
              temp.data.final = { ...answers, fqtheory3: e.target.value };
              localStorage.setItem("mmt-research", JSON.stringify(temp));
            }}
            placeholder="Answer"
            style={{
              width: "100%",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #56cfe1",
            }}
          />
        </FormControl>
      </div>
    </Card>
  );
}
