import { useState } from "react";
import { Button } from "@mui/material";
import MyFormPage from "./components/MyFormPage";
import StartPage from "./pages/StartPage";
import EndPage from "./pages/EndPage";
import { songs } from "./songsData";
import { makeStyles } from "@mui/styles";

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

function App() {
  const [page, setPage] = useState(0);
  const styles = useStyles();
  const calculatePage =
    page === 0 ? (
      <StartPage />
    ) : page === songs.length ? (
      <EndPage />
    ) : (
      <MyFormPage songs={songs} />
    );

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
      {page === 0 ? (
        <StartPage />
      ) : (
        <div
          style={{
            display: "inline-flex",
          }}
        >
          <MyFormPage
            songName={songs[page - 1].songName}
            artistName={songs[page - 1].artistName}
            filePath={songs[page - 1].filePath}
            albumArt={songs[page - 1].albumArt}
          />
        </div>
      )}
      <div
        style={{
          width: "50%",
        }}
      >
        {/* Add Next button position to right of div */}
        {/* Add back button position to left of div */}
        <Button
          className={styles.button}
          style={{
            position: "relative",
            display: "inline-block",
            margin: "10px auto auto",
            float: "left",
          }}
          onClick={() => setPage(page === 0 ? 0 : page - 1)}
        >
          Prev
        </Button>
        {page < songs.length ? (
          <Button
            className={styles.button}
            style={{
              position: "relative",
              display: "inline-block",
              margin: "10px auto auto",
              float: "right",
            }}
            onClick={() => setPage(page === songs.length ? page : page + 1)}
          >
            Next
          </Button>
        ) : (
          <Button
            className={styles.button}
            style={{
              position: "relative",
              display: "inline-block",
              margin: "10px auto auto",
              float: "right",
            }}
            onClick={() => setPage(page === songs.length ? page : page + 1)}
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  );
}

export default App;
