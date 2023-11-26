import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Button = styled.button`
  /* background-color: ${(props) =>
    props.variant === "primary" ? "red" : "gray"};
  color: ${(props) => (props.variant === "primary" ? "white" : "black")};
  border: 1px solid ${(props) =>
    props.variant === "primary" ? "red" : "gray"}; */

  border-radius: 4px;
  padding: 10px 16px;
  border: 1px solid;

  ${(props) =>
    props.variant === "primary" &&
    css`
      color: ${props.theme.colors.white};
      background-color: ${props.theme.colors.primary};
      border-color: ${props.theme.colors.primary};
    `}

  ${(props) =>
    props.variant === "success" &&
    css`
      color: ${props.theme.colors.white};
      background-color: ${props.theme.colors.success};
      border-color: ${props.theme.colors.success};
    `}
`;

export const Title = styled.h1`
  color: green;
  font-size: 50px;
  font-weight: bold;
`;
