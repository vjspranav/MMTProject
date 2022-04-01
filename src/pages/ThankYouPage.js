import { Card } from "@mui/material";

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
      </div>
    </Card>
  );
}
