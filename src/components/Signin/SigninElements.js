import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const FormContainer = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    z-index: 0;
    overflow: hidden;
    ${
        "" /* background: linear-gradient(
        108deg,
        rgba(1, 147, 86, 1) 0%,
        rgba(10, 201, 122, 1) 100%
    ); */
    }
    background: rgb(76, 65, 207);
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        height: 80%;
    }
`;

export const FormIcon = styled(LinkR)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: rgb(234 233 255);
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 20px 32px 40px 32px;
    border-radius: 4px;
    box-shadow: rgb(255 255 255 / 78%) 0px 1px 3px;

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    } ;
`;

export const FormBackToHomeButton = styled(LinkR)`
    float: right;
    text-decoration: none;
    font-size: 12px;
    text-align: center;
    padding-top: 50px;

    &:active {
        color: #444;
    }
`;

export const FormH1 = styled.h1`
    margin-top: 30px;
    margin-bottom: 40px;
    color: rgb(69 39 159);
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: rgb(69 39 159);
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;

    &:focus {
        outline: none;
    }
`;

export const FormButton = styled.button`
    background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #444;
    font-size: 20px;
    cursor: pointer;
`;

export const FormText = styled.span`
    text-align: center;
    margin-top: 24px;
    color: rgb(69 39 159);
    font-size: 14px;
`;
