import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ShippingWizard from "./features/shipping-label-maker/ShippingWizard";
import Login from "./features/shipping-label-maker/Login";
import Navbar from "./core/components/wizard/Navbar";
import { Route,BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div style={{ backgroundColor: "#962960", height: "90%" }} className="App">
      <Navbar />
          <Route exact path ="/">
          <ShippingWizard/> 
          </Route>
          <Route path="/login">
            <Login/>
          </Route> 
            {/* <ShippingWizard/> 
          <Login/> */}
            
    </div>
     </BrowserRouter>


  );
}

export default App;
