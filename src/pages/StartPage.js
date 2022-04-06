import { useState, useEffect } from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
// import axios from "axios";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const StartPage = ({
  updatePage,
  profession,
  setProfession,
  age,
  setAge,
  gender,
  setGender,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let temp = localStorage.getItem("mmt-research");
    console.log(temp);
    if (temp) {
      temp = JSON.parse(temp);
      if (temp.profession) setProfession(temp.profession);
      if (temp.age) setAge(temp.age);
      if (temp.gender) setGender(temp.gender);
    }
  }, []);

  const moveNext = () => {
    // store profession, age and gender to local storage
    setLoading(true);
    updatePage(1);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "80vh",
        width: "80%",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        margin: "auto 0",
      }}
    >
      <div
        style={{
          flex: 2,
          background: "#56cfe1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
          }}
        >
          Survey
        </h1>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <AccessTimeFilledIcon style={{ marginRight: "5px" }} />
          30-40 minutes
        </p>
        <p>
          This survey will help us to analyze your music preferences. We will
          not share your information with anyone.
        </p>
      </div>
      <div
        style={{
          flex: 5,
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {loading && (
          <div
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              background: "rgba(0, 0, 0, 0.05)",
              zIndex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </div>
        )}
        <p
          style={{
            color: "#56cfe1",
            fontSize: "3rem",
            margin: "10px 0",
            fontWeight: "bold",
          }}
        >
          Enter your details
        </p>

        <p
          style={{
            color: "rgb(145,163,176)",
            padding: "15px 0",
          }}
        >
          Your identity will be kept anonymous.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "70%",
          }}
        >
          <TextField
            label="Profession"
            variant="filled"
            fullWidth
            InputProps={{ disableUnderline: true }}
            className="inputbox"
            value={profession}
            onChange={(e) => {
              setProfession(e.target.value);
              let temp = localStorage.getItem("mmt-research");
              if (temp) {
                temp = JSON.parse(temp);
                temp.profession = e.target.value;
                localStorage.setItem("mmt-research", JSON.stringify(temp));
              }
            }}
          />
          <TextField
            label="Age"
            type="number"
            variant="filled"
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            className="inputbox"
            value={age}
            onChange={(e) => {
              if (
                e.target.value.length === 0 ||
                (e.target.value > 0 && e.target.value < 100)
              ) {
                setAge(parseInt(e.target.value));
                let temp = localStorage.getItem("mmt-research");
                if (temp) {
                  temp = JSON.parse(temp);
                  temp.age = parseInt(e.target.value);
                  localStorage.setItem("mmt-research", JSON.stringify(temp));
                }
              }
            }}
          />
          <FormControl fullWidth variant="filled" className="inputbox">
            <InputLabel>Gender</InputLabel>
            <Select
              label="Gender"
              disableUnderline
              value={gender !== -1 ? gender : ""}
              onChange={(e) => {
                setGender(e.target.value);
                let temp = localStorage.getItem("mmt-research");
                if (temp) {
                  temp = JSON.parse(temp);
                  temp.gender = parseInt(e.target.value);
                  localStorage.setItem("mmt-research", JSON.stringify(temp));
                }
              }}
            >
              <MenuItem value={0}>Male</MenuItem>
              <MenuItem value={1}>Female</MenuItem>
              <MenuItem value={2}>Not Specified</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Button
          variant="contained"
          sx={{
            padding: "15px 20px",
            borderRadius: "30px",
            width: "300px",
            margin: "20px 0",
          }}
          onClick={() => moveNext()}
          disabled={!profession || !age || gender === -1}
        >
          Begin Survey
        </Button>
      </div>
    </div>
  );
};

export default StartPage;
