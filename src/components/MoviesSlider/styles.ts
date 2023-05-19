import { Link } from "react-router-dom";
import styled from "styled-components";

export const SliderWrapper = styled.div`
    fontFamily: 'Montserrat, sans-serif';
`;


export const SliderContainer = styled.div`
    overflow-x: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
`;

export const SliderComponent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 1rem;
`;

export const SliderHeader = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-left: 2rem;
    color: #fff;
    &:hover {
        color: #FFD634;
        cursor: pointer;
    }
`;

export const SliderLink = styled(Link)`
    text-decoration: none;
`;

export const SliderHr = styled.hr`
    border: 0;
    height: 2px;
    background-color: #fff;
    margin-left: 2rem;
    margin-right: 2rem;
`;
