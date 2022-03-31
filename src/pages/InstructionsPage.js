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
            color: "#3BAF9F",
            fontSize: "3rem",
            margin: "10px 0",
            fontWeight: "bold",
          }}
        >
          Instructions
        </p>

        <p
          style={{
            color: "rgb(145,163,176)",
            padding: "15px 0",
          }}
        >
          Go through the steps below to get started.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            width: "60%",
          }}
        >
          <Alert severity="success" sx={{ margin: "10px 0" }}>
            On the next page, a passage based on a topic will be loaded.
          </Alert>
          <Alert severity="success" sx={{ margin: "10px 0" }}>
            You have to go through the content of this passage.
          </Alert>
          <Alert severity="success" sx={{ margin: "10px 0" }}>
            Then, you will move to the questionnaire section, where you will be
            asked a few questions about your experience.
          </Alert>
          <Alert severity="success" sx={{ margin: "10px 0" }}>
            These questions will not involve any technical knowledge.
          </Alert>
          <Alert severity="success" sx={{ margin: "10px 0" }}>
            Your answers will help us to improve the content. You are free to
            leave the survey at any time.
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default InstructionsPage;
