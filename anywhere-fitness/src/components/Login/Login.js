import React from "react";
import { Card, Button, CardHeader, CardBody, CardTitle, Form, FormGroup, Input, Label, FormFeedback } from 'reactstrap';

const Login = () => {

    return (
        <Card>
            <CardHeader>Login</CardHeader>
            <CardBody>
                <CardTitle>Login to your account</CardTitle>

                {/* Form here */}
                <Form>
                    <FormGroup>
                        <Label for="email">Email:</Label>
                        <Input type="email" name="email" id="email" placeholder="Your email" />
                        <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password:</Label>
                        <Input type="password" name="password" id="password" placeholder="Your password" />
                    </FormGroup>
                    <Button onSubmit={formVlidation}>Login</Button> <Button>Register</Button>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />{' '}Remember Me
                        </Label>
                    </FormGroup>
                </Form>

            </CardBody>
        </Card>
    )
}

export default Login;
