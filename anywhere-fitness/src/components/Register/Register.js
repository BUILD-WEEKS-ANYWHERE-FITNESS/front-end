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
            <CardHeader>Register</CardHeader>
            <CardBody className="form-card-body">
                <CardTitle> Sign Up Now!</CardTitle>

                <h1>Registration Page!</h1>
                <Form >
                {//Email Input
                }
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onChange={changeHandler} />
                  </FormGroup>

                  {//Password Input
                  }
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" onChange={changeHandler}/>
                  </FormGroup>

                  {//Confirm Password Input
                  }
                  <FormGroup>
                    <Label for="examplePassword">Confirm Password</Label>
                    <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="password placeholder" onChange={changeHandler}/>
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
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXd3d21tbWysrLX19fAwMDc3Ny8vLzOzs7Kysq3t7fg4ODV1dXBwcHZ2dnFxcW6urqvWIoeAAAD1UlEQVR4nO2da5uqIBRGVS4mRv3/f3sEm4kSqzNuYEPvmm/TM46r/XLRJLoOAAAAAAAAAAAAAAAAAAAAAPAlqONHsASnkQ5BoCgFwYmkQkiKo0hhjr9PaaAR7DptDc2BqLFEgmyDSlVBB0tFugo6lrZIebjjKGM17RG5VdFQRnQdVZkp0gqucFIkrqBDLT+Sz+xGyDTdgutuWIz9KSK6wiSoVqZ5n91RNQfFdBV0MKhiSkE/aBTubgztTGaLMpriiuzPGKFTT65U0aAmGAdj6HJBpZ6L7lAuqHkq6CgU1HyCRRRVroiu/6zE9WLOCjqyj4u5BbNP4HILsrjCAAAAAAAAAAAAAAC7GBpKa+wznuVZHucyM3W009DTMGS/N/oRaiLyc4pnjlU8UVXQK5b/NH2Dkf7MKHDHGfkV0Wh3YrMVR7EuDMOptM+W1ZDgdr8ZWzfsYFgKGH5OM4a78882DI24aH0eo6+1YXj2E6BhmiOvNWGof2Z4Q0SxAUNzCaaw279owNAGghGVBgzH8Cpk2vSo9Rs+hLQfYMgGpDTgoae5bF5uwPA23q+G2ycAazOMOv/etBoiE7faDLvYY5r2eqviGFliXJuh6LctbWGU03S9RB9SrczQLr/UsewuXWgTV09iDWPkmWm1+5RqVYbit0P5j9ufNRnaYNj7RNH4dlmRoejvDNf3Q6U5ade11mMYCjrefWam5CArMlRBRD9qjGZepgE1GW4qGJ+D3vEfXdVkGBF0I+PeOhS13rmpyDAquDBFG6NPaF2Ge4LxxmhcQqeqDPcFNyOj8n3oz4u1GG560afG+DAymjl4rRbDl4KOoDGah4//KzFUbw3vjTFIaFOGP43xIaFtGU7D1T4ntC1Dx9wtCX16yqgtw2e7Bg0jwLAoMIQhDMsDQxjCsDwwhGFVhtOf8V9pyd/w6LfXVGB4EBiW4lvWW8yHl8wIe+qZGpKte+rdLRyOhoRr1yaWa9fo1h8ux+G5/rD9NaQLJ4pVwIzXAX/BUm4AAAAAAAAAAAAAhsS+0aKl/9eJRHuf7aEyb/xi5vwbamRVzLSx1APr/ouZgmNEvl17QrTNZFiignn3Qk29e90LZJYqCl1sm26VZYeiIhG9k34rrYIR7XxjTL1zX6ptaj/HpO1uCkd0JWVQC42DIX5H22RBZVHBLmFQuQj6vVBTBLVsL/pEiqCW70XvqBRBZRNRxzpHJX3Hy0y2X0OryE+QOKj8BD10VWTVi4ZQKTKtoIMmqIwFaRTZRvQ2aBAM/bx3xj1+drz9uJ8eAAAAAAAAAAAAAAAAAAAAAHXxD+30LgghGYFcAAAAAElFTkSuQmCC" />
            </Card>
        </div>

    )
}

export default Register;
