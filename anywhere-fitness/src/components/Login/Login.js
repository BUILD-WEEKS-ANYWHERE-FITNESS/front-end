import React, { useState } from "react";
import { Card, Button, CardHeader, CardBody, CardTitle, Form, FormGroup, Input, Label, FormFeedback } from 'reactstrap';


const Login = () => {

    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const formValidation = (e) => {
        e.preventDefault();
        if(formData.email === '') {
            setIsEmailValid(true)
        }
        if(formData.password === '') {
            setIsPasswordValid(true)
        }
    }

    // const handleChange = (event) => {

    //     setFormData({
    //         ...formData, [event.target.name]: event.target.value
    //     })

    //     if(formData.password === '') {
    //         setisPasswordValid(true)
    //     } else {
    //         setisPasswordValid(false)
    //     }
    //     if (formData.email === '') {
    //         setIsEmailValid(true)
    //     } else {
    //         setIsEmailValid(false)
    //     }

    // }

    return (
        <div className="card-container">
            <Card className="form-card">
                <div className="half">
                    <CardHeader>Login</CardHeader>
                    <CardBody className="form-card-body login">
                        <CardTitle>Login to your account</CardTitle>
                        <h1> Login Page! </h1>

                        {/* Form here */}
                        <Form>
                            <FormGroup>
                                <Label for="email">Email:</Label>
                                <Input invalid type="email" name="email" id="email" placeholder="Your email" />
                                <FormFeedback>Required!</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password:</Label>
                                <Input invalid type="password" name="password" id="password" placeholder="Your password" />
                                <FormFeedback>Required!</FormFeedback>
                            </FormGroup>
                            <Button onSubmit={formValidation}>Login</Button> <Button>Register</Button>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}Remember Me
                            </Label>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </div>

                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXd3d21tbWysrLX19fAwMDc3Ny8vLzOzs7Kysq3t7fg4ODV1dXBwcHZ2dnFxcW6urqvWIoeAAAD1UlEQVR4nO2da5uqIBRGVS4mRv3/f3sEm4kSqzNuYEPvmm/TM46r/XLRJLoOAAAAAAAAAAAAAAAAAAAAAPAlqONHsASnkQ5BoCgFwYmkQkiKo0hhjr9PaaAR7DptDc2BqLFEgmyDSlVBB0tFugo6lrZIebjjKGM17RG5VdFQRnQdVZkp0gqucFIkrqBDLT+Sz+xGyDTdgutuWIz9KSK6wiSoVqZ5n91RNQfFdBV0MKhiSkE/aBTubgztTGaLMpriiuzPGKFTT65U0aAmGAdj6HJBpZ6L7lAuqHkq6CgU1HyCRRRVroiu/6zE9WLOCjqyj4u5BbNP4HILsrjCAAAAAAAAAAAAAAC7GBpKa+wznuVZHucyM3W009DTMGS/N/oRaiLyc4pnjlU8UVXQK5b/NH2Dkf7MKHDHGfkV0Wh3YrMVR7EuDMOptM+W1ZDgdr8ZWzfsYFgKGH5OM4a78882DI24aH0eo6+1YXj2E6BhmiOvNWGof2Z4Q0SxAUNzCaaw279owNAGghGVBgzH8Cpk2vSo9Rs+hLQfYMgGpDTgoae5bF5uwPA23q+G2ycAazOMOv/etBoiE7faDLvYY5r2eqviGFliXJuh6LctbWGU03S9RB9SrczQLr/UsewuXWgTV09iDWPkmWm1+5RqVYbit0P5j9ufNRnaYNj7RNH4dlmRoejvDNf3Q6U5ade11mMYCjrefWam5CArMlRBRD9qjGZepgE1GW4qGJ+D3vEfXdVkGBF0I+PeOhS13rmpyDAquDBFG6NPaF2Ge4LxxmhcQqeqDPcFNyOj8n3oz4u1GG560afG+DAymjl4rRbDl4KOoDGah4//KzFUbw3vjTFIaFOGP43xIaFtGU7D1T4ntC1Dx9wtCX16yqgtw2e7Bg0jwLAoMIQhDMsDQxjCsDwwhGFVhtOf8V9pyd/w6LfXVGB4EBiW4lvWW8yHl8wIe+qZGpKte+rdLRyOhoRr1yaWa9fo1h8ux+G5/rD9NaQLJ4pVwIzXAX/BUm4AAAAAAAAAAAAAhsS+0aKl/9eJRHuf7aEyb/xi5vwbamRVzLSx1APr/ouZgmNEvl17QrTNZFiignn3Qk29e90LZJYqCl1sm26VZYeiIhG9k34rrYIR7XxjTL1zX6ptaj/HpO1uCkd0JWVQC42DIX5H22RBZVHBLmFQuQj6vVBTBLVsL/pEiqCW70XvqBRBZRNRxzpHJX3Hy0y2X0OryE+QOKj8BD10VWTVi4ZQKTKtoIMmqIwFaRTZRvQ2aBAM/bx3xj1+drz9uJ8eAAAAAAAAAAAAAAAAAAAAAHXxD+30LgghGYFcAAAAAElFTkSuQmCC" />
            </Card>
        </div>
    )
}

export default Login;
