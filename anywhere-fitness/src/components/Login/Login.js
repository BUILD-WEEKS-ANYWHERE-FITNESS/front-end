import React, { useState } from "react";
import { Card, Button, CardBody, CardTitle, Form, FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import { Link } from "react-router-dom";
//ANIMATION CODE
import { fadeInDown } from 'react-animations'
import styled, { keyframes } from "styled-components";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
const SlideInDownAnimation = keyframes`${fadeInDown}`;
const SlideInDownDiv = styled.div`
  animation: 2s ${SlideInDownAnimation}; margin-left:20%;
`;

const Login = (props) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        usernameTouched: false,
        passwordTouched: false
    });

    // Controlled inputs
    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value, [`${e.target.name}Touched`]: true });
    }

    const login1 = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("https://fitnessanywhere.herokuapp.com/api/auth/clients/login", formData)
            .then(res => {
                console.log("hello");
                console.log(res.data);
                localStorage.setItem("token", res.data.payload);
                props.history.push("/classes");
            })
            .catch(err => {
                console.log(err)

                // Form validation.
                if (formData.username === '' && formData.password === '') {
                    console.log('Error: fill out empty fields');
                    setFormData({ ...formData, usernameTouched: true, passwordTouched: true });

                } else if (formData.username === '') {
                    setFormData({ ...formData, usernameTouched: true });
                } else if (formData.password === '') {
                    setFormData({ ...formData, passwordTouched: true });
                }

                if (err.response.status === 401) {
                    alert('Either username or password is invalid!');
                }
            });
    };

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("https://fitnessanywhere.herokuapp.com/api/auth/instructors/login", formData)
            .then(res => {
                console.log("hello");
                console.log(res.data);
                localStorage.setItem("token", res.data.payload);
                props.history.push("/add-class");
            })
            .catch(err => {
                console.log(err)

                // Form validation.
                if (formData.username === '' && formData.password === '') {
                    console.log('Error: fill out empty fields');
                    setFormData({ ...formData, usernameTouched: true, passwordTouched: true });

                } else if (formData.username === '') {
                    setFormData({ ...formData, usernameTouched: true });
                } else if (formData.password === '') {
                    setFormData({ ...formData, passwordTouched: true });
                }

                if (err.response.status === 401) {
                    alert('Either username or password is invalid!');
                }
            });
    };

    return (

        <div className="card-container">
            <SlideInDownDiv>
                <Card className="form-card">
                    <div className="half">
                        <CardBody className="form-card-body login">
                            <CardTitle><h1>Login to your account</h1></CardTitle>

                            {/* Form here */}
                            <Form >
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
                                        onKeyPress={(event)=>{
                                            if (event.which === 13) {
                                                event.preventDefault();
                                                if (formData.username === "") {
                                                    alert('Either username or password is invalid!');
                                                }
                                            }
                                        }}
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
                                        onKeyPress={(event)=>{
                                            if (event.which === 13) {
                                                event.preventDefault();
                                                if (formData.password === "") {
                                                                   alert('Either username or password is invalid!');
                                                               }

                                            }
                                        }}

                                        invalid={formData.passwordTouched && formData.password === ''}
                                    />
                                    <FormFeedback>Please enter password.</FormFeedback>
                                </FormGroup>
                                <Button className="login-button" onClick={login}>Instructor Login</Button>
                                <Button className="login-button" onClick={login1}>Client Login</Button>
                                <Link to="/register"><Button className="register-button" onKeyPress={(e)=>{e.key === "enter" && e.preventDefault();}}>Register</Button></Link>
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
            </SlideInDownDiv>
        </div>
    )
}

export default Login;
