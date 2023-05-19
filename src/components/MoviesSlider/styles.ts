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
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
`;