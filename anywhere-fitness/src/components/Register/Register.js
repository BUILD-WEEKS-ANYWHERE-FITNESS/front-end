import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const Register = () => {


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
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>

          {//Dropdown for instructor vs client;
          }
          <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>

    )
}

export default Register;
