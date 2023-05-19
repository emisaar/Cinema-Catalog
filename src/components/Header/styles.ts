import { default as muiStyled } from "@mui/styled-engine";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const BoxStyled = muiStyled(Box)`
    display: 'flex';
`;

export const LinkToStyled = styled(Link)`
    text-decoration: none;
    color: inherit;
    margin-right: 10px;
`;