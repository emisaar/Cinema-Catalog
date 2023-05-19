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
    width: 85vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
`;
