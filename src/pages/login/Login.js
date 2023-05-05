import React, {useState} from "react";
import Card from "antd/es/card/Card";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import "./Login.css";
import {TextField} from "@mui/material";
import  Validation from './Validation'


export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const [values,setValues] = useState({email:'',password:''})
    const [errors,setErrors] = useState({})
    function handleSubmit(event){
        event.preventDefault()
        setErrors(Validation(values));
    }

    function handleInput(event){
        const newObj = {...values,[event.target.email]:event.target.value}
        setValues(newObj);
    }
    return (
        <div className="login-form">

            <Card className="card-style">

    
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <h4>Login Here</h4>
                    <TextField
                        label="Email"
                        onChange={handleInput}
                        variant="outlined"
                        color="primary"
                        type="email"
                        sx={{mb: 3}}
                        fullWidth
                       
                    />
                    {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                    <TextField
                        label="Password"
                        onChange={handleInput}
                        variant="outlined"
                        color="primary"
                        type="password"
                        fullWidth
                        sx={{mb: 3}}
                    />
                    {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
                    <Button variant="contained" color="primary" type="submit">Login</Button>

                </form>
            </Card>

        </div>
    );
}