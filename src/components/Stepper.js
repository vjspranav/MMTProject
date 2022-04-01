import { useEffect, useState } from "react";
import MobileStepper from "@mui/material/MobileStepper";

const Stepper = (props) => {
  const steps = props.songsLength + 4;
  const page = props.page;
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    setActiveStep(page);
  }, [page]);

  return (
    <MobileStepper
      variant="progress"
      steps={steps}
      position="static"
      activeStep={activeStep}
      sx={{
        boxSizing: "border-box",
        width: "70%",
        position: "absolute",
        top: "15px",
        background: "rgba(204, 204, 204, 0.2)",
        padding: "20px",
        borderRadius: "60px",
        flexGrow: 1,
        justifyContent: "center",
      }}
    />
  );
};

export default Stepper;
