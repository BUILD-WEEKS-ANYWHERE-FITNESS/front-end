import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardTitle,Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'

const Register = (props) => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        role: "",
        authCode: "",
    })

    //Sets role to either instructor or client based on drop down selection value.

    const changeHandler = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const register = e => {
      e.preventDefault();
      axios
        .post(
          "https://fitnessanywhere.herokuapp.com/api/auth/clients/register",
          user
        )
        .then(res => {
          console.log("register")
          localStorage.setItem("token", res.data.payload);
          props.history.push("/login");
        })
        .catch(err => console.log(err));
    };
  

    return (
    <div className="card-container">
      <Card className="form-card">
      <div className="half">
            <CardBody className="form-card-body">
                <CardTitle> <h1>Sign Up Now!</h1></CardTitle>

                <Form >
                {//Email Input
                }
                  <FormGroup>
                    <Label for="exampleEmail">username</Label>
                    <Input type="text" name="username" id="exampleUsername" placeholder="Username" onChange={changeHandler} />
                  </FormGroup>

                  {//Password Input
                  }
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange={changeHandler}/>
                  </FormGroup>

                  {//Confirm Password Input
                  }
                  <FormGroup>
                    <Label for="examplePassword">Confirm Password</Label>
                    <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm" onChange={changeHandler}/>
                  </FormGroup>

                  {//Dropdown for instructor vs client;
                  }
                  <FormGroup>
                    <Label for="exampleSelect">Client or Instructor?</Label>
                    <Input style={{width:"75%"}} type="select" name="role" id="role" onChange={changeHandler} >
                      <option value=""> Select a Role </option>
                      <option value="client">Client</option>
                      <option value="instructor">Instructor</option>
                    </Input>
                    <br />
                  </FormGroup>
                <Button className="btn btn-secondary register-button" onClick={register} >Submit</Button>
                  </Form>
                  {console.log(user)}
                </CardBody>
                </div>
            <img src={require('../../images/img1.jpg')} />
            </Card>
        </div>

    )
}

export default Register;
