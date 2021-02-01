import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1), 
    minWidth: 120,
  },
}));

export default function GetWeight(props) {
  const classes = useStyles();
 
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {    
    props.setWeight(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  }; 

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{ backgroundColor: "#cac9f2", height: "40vh", width: "85vh" }}
        >
          <div>
            <Button className={classes.button} onClick={handleOpen}>
              <h4>
                <b>Select Weight</b>{" "}
              </h4>
            </Button>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">
                <b>Weight</b>
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={0}>0 pound </MenuItem>
                <MenuItem value={1}>1 pound</MenuItem>
                <MenuItem value={2}>2 pound</MenuItem> 
                <MenuItem value={3}>3 pound</MenuItem>
                <MenuItem value={4}>4 pound</MenuItem>
                <MenuItem value={5}>5 pound</MenuItem>
                <MenuItem value={6}>6 pound</MenuItem>
                <MenuItem value={7}>7 pound</MenuItem>
                <MenuItem value={8}>8 pound</MenuItem>
                <MenuItem value={9}>9 pound</MenuItem>
                <MenuItem value={10}>10 pound</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
