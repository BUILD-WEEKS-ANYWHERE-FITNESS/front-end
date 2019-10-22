import React, { useState } from "react";
import { Card, Button, CardHeader, CardBody, CardTitle, Form, FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import { Link } from "react-router-dom";


const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });


    return (
        <div className="card-container">
            <Card className="form-card">
                <div className="half">
                    <CardBody className="form-card-body login">
                        <CardTitle>Login to your account</CardTitle>
                        <h1> Login Page! </h1>

                        {/* Form here */}
                        <Form>
                            <FormGroup>
                                <Label for="email">Email:</Label>
                                <Input type="email" name="email" id="email" placeholder="Your email"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password:</Label>
                                <Input  type="password" name="password" id="password" placeholder="Your password" />
                            </FormGroup>
                            <Button >Login</Button> <Link to="/register"><Button>Register</Button></Link>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}Remember Me
                            </Label>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </div>

                <img src={require("../../images/img2.jpg")} />
            </Card>
        </div>
    )
}

export default Login;
