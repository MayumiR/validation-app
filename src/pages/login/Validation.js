import React, {useState} from "react";
// export const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
// export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
export default function Validation(values) {
    const errors = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-z0-9]{8,}$/;

    if(values.email === ""){
        errors.email = "email is required!";
    }else if(!email_pattern.test(values.email)){
        errors.email = "email didn't match!"
    }

    if(values.password === ""){
        errors.password = "password is required!";
    }else if(!password_pattern.test(values.password)){
        errors.password = "password didn't match!"
    }

    return errors;
}