import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ApiClient from "../../../../utils/ApiClient";

interface SignUpForm {
    username: string,
    email: string,
    password: string
}

function SignUp() {
    const [form, setForm] =  useState<SignUpForm>({
        username: "",
        email: "",
        password: ""
    });

    const onHandleChange = (event : ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setForm({
            ...form,
            [name] : value
        })
    }

    const onSubmit = async (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try{
            const response = await ApiClient.post("/", form);
            console.log(response);

        } catch (error) {
            console.log(error);
        }
    }

    return <div>
        <h2>Sign Up Page</h2>
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId='Username'>
                <Form.Label>Username</Form.Label>
                    <Form.Control 
                    value={form.username}
                    onChange={onHandleChange}
                    name="Username"
                    type="text"
                    placeholder="Enter your username"></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId='Email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    value={form.email}
                    onChange={onHandleChange}
                    name="Email"
                    type="text"
                    placeholder="Enter your email"></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId='Password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    value={form.password}
                    onChange={onHandleChange}
                    name="Password"
                    type="text"
                    placeholder="Enter your password"></Form.Control>
                </Form.Group>
                    <Button variant="primary" type="submit">Sign Up</Button>
            </Form>
    </div>
}

export default SignUp;