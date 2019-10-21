import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardTitle,Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const Register = () => {
    const [role, setRole] = useState({value: ""});

    //Sets role to either instructor or client based on drop down selection value.
    const handleChange = event => {
        setRole({value: event.target.value})
    }

    let isInstructor = false;


    if (role.value === "instructor") {
        isInstructor = true;
    } else {
        isInstructor = false;
    }

    return (
    <div>
      <Card>
            <CardHeader>Register</CardHeader>
            <CardBody>
                <CardTitle> Sign Up Now!</CardTitle>

                <h1>Registration Page!</h1>
                <Form>
                {//Email Input
                }
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                  </FormGroup>

                  {//Password Input
                  }
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                  </FormGroup>

                  {//Confirm Password Input
                  }
                  <FormGroup>
                    <Label for="examplePassword">Confirm Password</Label>
                    <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="password placeholder" />
                  </FormGroup>

                  {//Dropdown for instructor vs client;
                  }
                  <FormGroup>
                    <Label for="exampleSelect">Client or Instructor?</Label>
                    <Input type="select" name="select" id="exampleSelect" onChange={handleChange} >
                      <option value=""> Select a Role </option>
                      <option value="client">Client</option>
                      <option value="instructor">Instructor</option>
                    </Input>
                    <div >
                    <br />
                    {isInstructor ? (
                        <Input type="authCode" name="authCode" id="authCode" placeholder="authCode" />
                    ) : (
                            <h1 />
                        )}
                        <br />
                    </div>
                  </FormGroup>
                    <Button>Submit</Button>
                  </Form>
                </CardBody>
            </Card>
        </div>

    )
}

export default Register;
