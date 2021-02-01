import React from "react";
import {useHistory} from "react-router-dom";
import { Button,FormGroup, Label, Input, Form} from 'reactstrap';



export default function Login() {

  const history= useHistory();

   const handleClick = ()=> {    
    alert( 'Login Successfull');
    history.push("/")
    
  }
                
        return ( 
          <div>
          <div
        className="container my-5"
        style={{
          backgroundImage: `url("https://mcdn.wallpapersafari.com/medium/30/5/GjFDfp.jpg")`,
          backgroundsize:'cover',
          height:'730px', 
          width: "1800px",
        }}
      >
            <Form  style={{color:"white"}}>

            <FormGroup>
              <Label><h5 class="l">UserName</h5></Label>
              <Input  style={{marginLeft:"35%", width:"30%"}} type="text" placeholder="username" />
                       
                       
            </FormGroup>
            <FormGroup>
              <Label ><h5>Password</h5></Label>
              <Input  style={{marginLeft:"35%", width:"30%"}}  type="password" placeholder="password" />
               
            </FormGroup>           
            <Button class="btn" className="my-3" color="success" size="20" 
                    onClick={() =>handleClick()}>
                      <h4>Login</h4></Button>
            <text>
              {/* <Link to="#"> */}
                <h4> New User ? - Register Here</h4>
                {/* </Link> */}
                </text>
          </Form>
          </div>
          </div>
        );
     }
