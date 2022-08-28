import { Col, Row, Container } from "react-bootstrap";
import styled from "styled-components/macro";

export const SignInSignUpContainer = styled(Container)`
  background-color: #f2f3f6;
  min-height: calc(100vh - 76px);
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SignInSignUpFormContainer = styled.div`
  max-width: 90vw;
  display: flex;
  padding: 40px 30px 60px 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;
export const SignInSignUpTitle = styled.h3`
  font-size: 27px;
  font-weight: 700;
`;
export const SignInSignUpTop = styled(Row)`
  padding-top: 10px;
`;
export const SignInSignUpBtm = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const FormInput = styled.input`
  background-color: #f2f3f6;
  border: none;
  border-radius: 3px;
  width: 284px;
  height: 40px;
  padding: 5px 10px;
  font-weight: 400;

  &.push_dwn {
    margin-bottom: 10px;
  }
`;
export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
`;
export const AuthBtn = styled(Col)`
  border-radius: 2px;
  color: #009688;
  font-size: 18px;
  cursor: pointer;

  font-weight: 500;
  padding: 3px 6px !important;
  border: solid 3px #009688;
  &.push {
    margin-right: 10px;
  }
  &:hover {
    color: #fff;
    background-color: #009688;
  }
`;
