import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Label } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function GetSenderAddress(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{ backgroundColor: "#cac9f2", height: "55vh", width: "80vh" }}
        >
          <form className={classes.root} noValidate autoComplete="off">
            <h3 class="ml">Shipping Label Maker</h3>
            <h4 class="ml">Enter the Sender's Detail</h4>

            <Label>
              {" "}
              <h4 class="ml1">Name:</h4>{" "}
            </Label>
            <TextField
              // onChange={inputUserChange}
              style={{ width: "70%", marginLeft: "-7%", marginRight: "-5%" }}
              size="m"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              required
            />
            <br />

            <Label for="Address">
              <h4 class="ml1">Address:</h4>{" "}
            </Label>
            <TextField
              style={{ width: "70%", marginLeft: "-9%", marginRight: "-5%" }}
              id="outlined-basic"
              label="Address"
              variant="outlined"
            />
            <br />

            <label for="City">
              <h4 class="ml1">City:</h4>
            </label>
            <TextField
              style={{ width: "70%", marginLeft: "-3%", marginRight: "-5%" }}
              id="outlined-basic"
              label="City"
              variant="outlined"
            />
            <br />
            <label for="State">
              <h4 class="ml1">State:</h4>
            </label>

            <TextField
              style={{ width: "30%", marginLeft: "-7%" }}
              id="outlined-basic"
              label="State"
              variant="outlined"
            />
            <br />
            <label for="ZIP">
              <h4 class="ml1">ZIP:</h4>
            </label>
            <TextField
             type="numeric"  
              style={{ width: "30%", marginLeft: "-5%" }}
              id="outlined-basic"
              label="ZIP"
              variant="outlined"
            />
            <br />
          </form>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
