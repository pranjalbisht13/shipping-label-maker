import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

export default function Confirm(props) {

  const onComplete=()=>{
    alert( " Your shipping is confirmed and total price is " + props.shippingCost +"$");
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{ backgroundColor: "#cac9f2", height: "40vh", width: "85vh" }}
        >
          <h3 class="ml">Shipping Label Maker</h3>
          <h4 class="ml">Confirm Shipping Cost</h4>
          <h4>{props.shippingCost}</h4>
          <h4>{props.userName}</h4>
          <Button 
           onClick={() =>onComplete()}
           size="large" 
           variant="contained"
           color="secondary">
            Confirm
          </Button>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
