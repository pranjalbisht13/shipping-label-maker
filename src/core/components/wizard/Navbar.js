import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "bootstrap/dist/css/bootstrap.min.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    textAlign: "center",
    color: "white",
  },
  tooltip: {
    backgroundColor: "transparent",
  },
  h2: {
    textAlign: "center",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.tooltip} position="static">
        <Toolbar>
          <Typography variant="h7" className={classes.title}>
            <h2>
              <b>SHIPPING LABEL MAKER</b>
            </h2>
          </Typography>
          <Typography>
            <a href="http://localhost:3000/login">
              <h3>
                <b>Login</b>
              </h3>
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
