import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Typography from "@material-ui/core/Typography";
import GetSenderAddress from "../../core/components/wizard/GetSenderAddress";
import GetReceiverAddress from "../../core/components/wizard/GetReceiverAddress";
import GetWeight from "../../core/components/wizard/GetWeight";
import GetShippingOption from "../../core/components/wizard/GetShippingOption";
import Confirm from "../../core/components/wizard/Confirm";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "black",
    width: "100%",
    heigth: "5%",
  },

  backButton: {
    marginRight: theme.spacing(1),
    
  },
  instructions: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
  },
}));

function getSteps() {
  return [
    "Get Sender Address",
    "Get Receiver Address",
    "Get Weight",
    "Get Shipping Option",
    "Confirm",
  ];
}

export default function ShippingWizard() {
  const shippingRate = 0.4;
  const [weight, setWeight] = React.useState(0);
  const [shippingOption, setShippingOption] = React.useState(0);
  const [shippingCost, setShippingCost] = React.useState(0);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <GetSenderAddress />;
      case 1:
        return <GetReceiverAddress />;
      case 2:
        return <GetWeight setWeight={setWeight} />;
      case 3:
        return <GetShippingOption setShippingOption={setShippingOption} />;
      case 4:
        return <Confirm shippingCost={shippingCost} />;
      default:
        return "Unknown stepIndex";
    }
  }

  React.useEffect(() => {
    const cost = weight * shippingRate * shippingOption;
    setShippingCost(cost);
  }, [weight, shippingOption]);

  return (
    <div>
      <div
        className="container my-5"
        style={{
          backgroundImage: `url("https://fivethirtyeight.com/wp-content/uploads/2020/05/MAIL-PARTISAN-4x3-1.png?w=1024")`,
          backgroundsize: "cover",
          height: "717px",
          width: "1600px",
        }}
      >
        <div className={classes.root}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  <h2>
                    <b>Thank you for choosing our service. Your Shipping is confirmed !!</b>
                  </h2>
                </Typography>
                {/* <Button color="primary" onClick={handleReset}>Reset</Button> */}
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
