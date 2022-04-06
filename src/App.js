import "./App.css";

import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import MyFormPage from "./components/MyFormPage";
import StartPage from "./pages/StartPage";
import InstructionsPage from "./pages/InstructionsPage";
import EndPage from "./pages/EndPage";
import { songs } from "./songsData";
import Stepper from "./components/Stepper";
import ThankYouPage from "./pages/ThankYouPage";
import axios from "axios";

function App() {
  const [page, setPage] = useState(0);
  const [profession, setProfession] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState(-1);

  useEffect(() => {
    let temp = localStorage.getItem("mmt-research");
    console.log(temp);
    if (temp) {
      temp = JSON.parse(temp);
      setPage(temp.page);
    } else {
      localStorage.setItem(
        "mmt-research",
        JSON.stringify({ page: page, data: {} })
      );
    }
  }, []);

  const updatePage = (pgNum) => {
    setPage(pgNum);
    let temp = JSON.parse(localStorage.getItem("mmt-research"));
    temp.page = pgNum;
    localStorage.setItem("mmt-research", JSON.stringify(temp));
  };

  const calculatePage = () => {
    return page === 0 ? (
      <StartPage
        updatePage={updatePage}
        profession={profession}
        setProfession={setProfession}
        age={age}
        setAge={setAge}
        gender={gender}
        setGender={setGender}
      />
    ) : page === 1 ? (
      <InstructionsPage />
    ) : page === songs.length + 2 ? (
      <EndPage page={page} />
    ) : page > songs.length + 2 ? (
      <ThankYouPage />
    ) : (
      <MyFormPage
        songName={songs[page - 2].songName}
        artistName={songs[page - 2].artistName}
        filePath={songs[page - 2].filePath}
        albumArt={songs[page - 2].albumArt}
        page={page}
      />
    );
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
          overflow: "auto",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Stepper page={page} songsLength={songs.length} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {calculatePage()}
        <div
          style={{
            width: "50%",
          }}
        >
          {page !== 0 ? (
            <Button
              sx={{
                position: "relative",
                display: page > songs.length + 2 ? "none" : "inline-block",
                margin: "10px auto auto",
                float: "left",
                // disable if page==1
                opacity: page === 1 ? 0.5 : 1,

                "&:hover": {
                  backgroundColor: page === 1 ? "transparent" : "#48bfe3",
                  color: page === 1 ? "gray" : "white",
                  cursor: page === 1 ? "not-allowed" : "pointer",
                },
                backgroundColor: page === 1 ? "transparent" : "#56cfe1",
                color: page === 1 ? "gray" : "white",
              }}
              {...(page === 1 ? "disabled" : "enabled")}
              onClick={() => {
                if (page !== 1) updatePage(page === 0 ? 0 : page - 1);
              }}
            >
              Prev
            </Button>
          ) : (
            ""
          )}
          {page < songs.length + 2 ? (
            <Button
              sx={{
                position: "relative",
                display:
                  page === 0 || page >= songs.length + 2
                    ? "none"
                    : "inline-block",
                margin: "10px auto auto",
                float: "right",
                "&:hover": {
                  backgroundColor: "#48bfe3",
                  color: "white",
                },
                backgroundColor: "#56cfe1",
                color: "white",
              }}
              onClick={() =>
                updatePage(page === songs.length + 2 ? page : page + 1)
              }
            >
              Next
            </Button>
          ) : (
            <Button
              sx={{
                position: "relative",
                display: page > songs.length + 2 ? "none" : "inline-block",
                margin: "10px auto auto",
                float: "right",
                "&:hover": {
                  backgroundColor: "#48bfe3",
                  color: "white",
                },
                backgroundColor: "#56cfe1",
                color: "white",
              }}
              onClick={async () => {
                let url =
                  "https://hegezilbzh.execute-api.ap-south-1.amazonaws.com/prod/mmtAddData";
                // axios post with data
                const res = await axios.post(
                  url,
                  {
                    age: JSON.parse(localStorage.getItem("mmt-research")).age,
                    profession: JSON.parse(localStorage.getItem("mmt-research"))
                      .profession,
                    gender: JSON.parse(localStorage.getItem("mmt-research"))
                      .gender,
                    data: JSON.parse(localStorage.getItem("mmt-research")).data,
                  },
                  { mode: "no-cors" }
                );
                // if status is 200
                if (res.status === 200) {
                  updatePage(page + 1);
                } else {
                  console.log("error: ", res);
                  alert("Error in sending data");
                }
              }}
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
