<<<<<<< HEAD
import React, { useState, useRef, useEffect } from "react";
import { Card, Button, CardHeader, CardBody, CardTitle, Form, FormGroup, Input, Label, FormFeedback } from 'reactstrap';
=======
import React, { useState } from "react";
import { Card, Button, CardBody, CardTitle, Form, FormGroup, Input, Label, FormFeedback } from 'reactstrap';
>>>>>>> f171b93b493ff9e797f44db25866397501e8515d
import { Link } from "react-router-dom";

const Login = () => {
<<<<<<< HEAD
      const [formData, setFormData] = useState({
        email: '',
        password: ''
=======

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        usernameTouched: false,
        passwordTouched: false
>>>>>>> f171b93b493ff9e797f44db25866397501e8515d
    });

    const formValidation = (e) => {
        e.preventDefault();
        if (formData.username === '' || formData.password === '') {
            console.log('Error: fill out empty fields');
            alert('Please fill out empty fields');
        }
    }

    // Controlled inputs
    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value, [`${e.target.name}Touched`]: true});
    }

    return (
<<<<<<< HEAD
            <div className="card-container">
                <Card className="form-card">
                    <div className="half">
                        <CardBody className="form-card-body login">
                            <CardTitle><h1>Login to your account</h1></CardTitle>

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
                                <Button className="login-button">Login</Button>
                                <Link to="/register"><Button className="register-button">Register</Button></Link>
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
=======
        <div className="card-container">
            <Card className="form-card">
                <div className="half">
                    <CardBody className="form-card-body login">
                        <CardTitle><h1>Login to your account</h1></CardTitle>

                        {/* Form here */}
                        <Form>
                            {/* Username */}
                            <FormGroup>
                                <Label htmlFor="username">Username:</Label>
                                <Input
                                    type="username"
                                    name="username"
                                    id="username"
                                    placeholder="Your username"
                                    value={formData.username}
                                    onChange={changeHandler}
                                    invalid={formData.usernameTouched && formData.username === ''}
                                />
                                <FormFeedback>Please enter username.</FormFeedback>
                            </FormGroup>

                            {/* Password */}
                            <FormGroup>
                                <Label htmlFor="password">Password:</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Your password"
                                    value={formData.password}
                                    onChange={changeHandler}
                                    invalid={formData.passwordTouched && formData.password === ''}
                                />
                                <FormFeedback>Please enter password.</FormFeedback>
                            </FormGroup>
                            <Button className="login-button" onClick={formValidation}>Login</Button>
                            <Link to="/register"><Button className="register-button">Register</Button></Link>
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
>>>>>>> f171b93b493ff9e797f44db25866397501e8515d
    )
}

export default Login;
