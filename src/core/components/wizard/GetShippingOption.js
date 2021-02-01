import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
export default function GetShippingOption(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">

       <Typography component="div" style={{ backgroundColor: "#cac9f2", height: '55vh',width:'80vh' }}>
          <form className={classes.root} noValidate autoComplete="off">
            <h3 class="ml">Shipping Label Maker</h3>
            <h4 class="ml">Enter the Sender's Detail</h4>

            

            <label for="Ground" class="col-m-2 col-form-label ml2">
            <h4>Ground:</h4>{" "}
          </label>
          <input
            class="ml1"
            type="numeric"
            size="60"
            placeholder="Ground"
            aria-label="Small"
            onChange={(e) => props.setShippingOption(e.target.value)}
          ></input>
          <br></br>

          <label for="Priority" class="col-m-2 col-form-label ml2">
            <h4>Priority:</h4>{" "}
          </label>

          <input
            type="numeric"
            class="ml1"
            size="60"
            placeholder="Priority"
            aria-label="Priority"
            onChange={(e) => props.setShippingOption(e.target.value)}
          ></input>
          </form>

</Typography>
      </Container>
    </React.Fragment>
  );
}

