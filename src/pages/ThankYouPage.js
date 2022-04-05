import { Button, Card } from "@mui/material";

export default function ThankYouPage() {
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
          Thank you for your time!
        </h2>
        <Button
          variant="contained"
          color="primary"
          style={{
            margin: "10px 0",
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #56cfe1",
          }}
          onClick={() => {
            localStorage.removeItem("mmt-research");
            window.location.href = "/";
          }}
        >
          Click here to submit another survey
        </Button>
      </div>
    </Card>
  );
}
