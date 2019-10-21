import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const Register = () => {
    const [role, setRole] = useState({value: ""});

    //Sets role to either instructor or client based on drop down selection value.
    const handleChange = event => {
        setRole({value: event.target.value})
    }

    return (
    <div>
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
            {console.log(role)}
          </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>

    )
}

export default Register;
