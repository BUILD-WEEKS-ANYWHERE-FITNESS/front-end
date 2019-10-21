import React from "react";
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

const Login = () => {

    return (
        <Card>
        <CardHeader>Login</CardHeader>
        <CardBody>
          <CardTitle>Login to your account</CardTitle>
          
            {/* Form here */}

          <Button>Login</Button> <Button>Register</Button>
        </CardBody>
      </Card>
    )
}

export default Login;
