import Alert from "@mui/material/Alert";

const InstructionsPage = (props) => {
  return (
    <div
      style={{
        height: "80vh",
        width: "80%",
        borderRadius: "10px",
        overflow: "auto",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        margin: "auto 0",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          margin: "auto 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <p
          style={{
            color: "#56cfe1",
            fontSize: "3rem",
            margin: "10px 0",
            fontWeight: "bold",
          }}
        >
          Instructions
        </p>

        <p
          style={{
            color: "rgb(160,163,176)",
            padding: "0 0",
          }}
        >
          Go through the steps below to get started.
        </p>
        <h3
          style={{
            color: "rgb(145,163,176)",
            marginTop: "5px",
          }}
        >
          Earworms: a catchy song or tune that runs continually through a
          person's mind.
        </h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            width: "60%",
          }}
        >
          <Alert severity="success" sx={{ margin: "10px 0" }}>
            The Next 10 pages will have 10 songs and a few questions.
          </Alert>
          <Alert severity="success" sx={{ margin: "10px 0" }}>
            You have to listen to the songs and slect at-most 5 clips from song
            which you believe make these songs an earworm.
          </Alert>
          <Alert severity="success" sx={{ margin: "10px 0" }}>
            You can enter start time, end time and click on Add button,
            Alternatively clicking set will set the current time as start/end
            time.
          </Alert>
          <Alert severity="success" sx={{ margin: "10px 0" }}>
            Then answer the questions for each song.
          </Alert>
          <Alert severity="success" sx={{ margin: "10px 0" }}>
            At the end there will be a short questionaire to get your feedback.
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default InstructionsPage;
