import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageContainer = styled.div`
    background-color: #203444;
`;

export const PageHeader = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
    padding: 2rem;
    color: #fff;
    background-color: #203444;
`;

export const CatalogContainer = styled.div`
    min-height: 68vh;
    margin: 0 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`;

export const NoMovieMessage = styled.h2`
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    color: #fff;
    font-size: 20px;
    margin-top: 50px;
    min-height: 20vh;
`;

export const GoHomeLink = styled(Link)`
    text-decoration: underline;
    color: #FFD634;
    font-size: 14px;
`;
