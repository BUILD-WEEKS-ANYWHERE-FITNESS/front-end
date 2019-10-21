import React, { useState } from "react";
import { Card, Button, CardHeader, CardBody, CardTitle, Form, FormGroup, Input, Label, FormFeedback } from 'reactstrap';

// const formValidation = (e) => {
//     e.preventDefault();
//     console.log('error');
// }


const Login = () => {

    const [isValid, setIsValid] = useState(false);
    const [valueState, setValueState] = useState({email: '', password: ''});
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const handleChange = (value) => {
        
        console.log(value)

    }
    return (
        <Card>
            <CardHeader>Login</CardHeader>
            <CardBody>
                <CardTitle>Login to your account</CardTitle>

                {/* Form here */}
                <Form>
                    <FormGroup>
                        <Label for="email">Email:</Label>
                        <Input invalid={isValid} onChange={handleChange(valueState.email)} type="email" name="email" id="email" placeholder="Your email" value={valueState.email} />
                        <FormFeedback>Required! Please enter your email address.</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password:</Label>
                        <Input invalid={isValid} onChange={handleChange(valueState.password)} type="password" name="password" id="password" placeholder="Your password" value={valueState.password} />
                        <FormFeedback>Required! Please enter your password.</FormFeedback>
                    </FormGroup>
                    <Button>Login</Button> <Button>Register</Button>
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
