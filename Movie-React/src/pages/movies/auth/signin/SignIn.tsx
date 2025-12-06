import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ApiClient from "../../../../utils/ApiClient";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";

interface SignInForm {
    email: string,
    password: string
}

function SignIn() {
    const navigate = useNavigate();
    const [isloading, setIsLoading] = useState(false);
    const [form, setForm] =  useState<SignInForm>({
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
        
        setIsLoading(true);

        try{
            const response = await ApiClient.post("/signin", form);
            console.log(response);

            if(response.status === 200){
                // redirect user ke halaman movie
                localStorage.setItem("AuthToken",response.data.data.token);
                navigate("/movie", {replace: true});
            }

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return <div>
        <h2>Sign In</h2>
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId='formEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                value={form.email}
                onChange={onHandleChange}
                name="email"
                type="text"
                placeholder="Email address"></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId='formPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                value={form.password}
                onChange={onHandleChange}
                name="password"
                type="text"
                placeholder="Password"></Form.Control>
            </Form.Group>
                <Button type="submit" variant="primary" disabled={isloading}>
                    {isloading ? "Loading..." : "Sign In"}
                </Button>
                <NavLink to="/">Sign Up</NavLink>
        </Form>
    </div>
}

export default SignIn;