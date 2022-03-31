import { useState } from "react";
import { Button } from "@mui/material";
import MyFormPage from "./components/MyFormPage";
import StartPage from "./pages/StartPage";
import InstructionsPage from "./pages/InstructionsPage";
import EndPage from "./pages/EndPage";
import { songs } from "./songsData";

function App() {
  const [page, setPage] = useState(0);
  const calculatePage = () => {
    return page === 0 ? (
      <StartPage />
    ) : page === 1 ? (
      <InstructionsPage />
    ) : page === songs.length + 2 ? (
      <EndPage />
    ) : (
      <MyFormPage
        songName={songs[page - 2].songName}
        artistName={songs[page - 2].artistName}
        filePath={songs[page - 2].filePath}
        albumArt={songs[page - 2].albumArt}
      />
    );
  };

  return (
    <div
      className="App"
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
              display: "inline-block",
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
              if (page !== 1) setPage(page === 0 ? 0 : page - 1);
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
              display: "inline-block",
              margin: "10px auto auto",
              float: "right",
              "&:hover": {
                backgroundColor: "#48bfe3",
                color: "white",
              },
              backgroundColor: "#56cfe1",
              color: "white",
            }}
            onClick={() => setPage(page === songs.length + 2 ? page : page + 1)}
          >
            Next
          </Button>
        ) : (
          <Button
            sx={{
              position: "relative",
              display: "inline-block",
              margin: "10px auto auto",
              float: "right",
              "&:hover": {
                backgroundColor: "#48bfe3",
                color: "white",
              },
              backgroundColor: "#56cfe1",
              color: "white",
            }}
            onClick={() => setPage(page === songs.length + 1 ? page : page + 1)}
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  );
}

export default App;
