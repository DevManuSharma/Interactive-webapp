import React from "react";
import {
    Form,
    FormButton,
    FormContainer,
    FormContent,
    FormH1,
    FormIcon,
    FormInput,
    FormLabel,
    FormText,
    FormWrap,
    FormBackToHomeButton,
} from "./SigninElements";
import { FaArrowLeft } from "react-icons/fa";

const SignIn = () => {
    return (
        <FormContainer>
            <FormWrap>
                <FormIcon to="/">Digital School</FormIcon>
                <FormContent>
                    <Form>
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type="email" required />
                        <FormLabel htmlFor="for">Password</FormLabel>
                        <FormInput type="password" required />
                        <FormButton type="submit">Continue</FormButton>
                        <FormText>Forgot Password</FormText>
                        <FormBackToHomeButton to="/">
                            <FaArrowLeft /> Back to Home
                        </FormBackToHomeButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </FormContainer>
    );
};

export default SignIn;
