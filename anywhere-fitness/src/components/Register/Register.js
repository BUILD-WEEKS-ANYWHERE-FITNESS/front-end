import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardTitle,Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const Register = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
        authCode: "",
    })

    //Sets role to either instructor or client based on drop down selection value.

    const changeHandler = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    let isInstructor = false;


    if (user.role === "instructor") {
        isInstructor = true;
    } else {
        isInstructor = false;
    }

    return (
    <div className="card-container">
      <Card className="form-card">
      <div className="half">
            <CardBody className="form-card-body">
                <CardTitle> Sign Up Now!</CardTitle>

                <h1>Registration Page!</h1>
                <Form >
                {//Email Input
                }
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={changeHandler} />
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
                    <Input type="select" name="role" id="role" onChange={changeHandler} >
                      <option value=""> Select a Role </option>
                      <option value="client">Client</option>
                      <option value="instructor">Instructor</option>
                    </Input>
                    <div >
                    <br />
                    {isInstructor ? (
                        <Input type="authCode" name="authCode" id="authCode" placeholder="authCode" onChange={changeHandler}/>
                    ) : (
                            <h1 />
                        )}
                        <br />
                    </div>
                  </FormGroup>
                    <Button>Submit</Button>
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
