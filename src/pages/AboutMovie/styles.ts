import styled from "styled-components";

export const MainContainer = styled.div`
    background-color: #203444;
    color: #fff;
`;

export const TopContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

export const MovieImage = styled.img`
    width: 300px;
    height: 400px;
    margin: 20px;
    border-radius: 10px;
`;

export const MovieTitle = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    margin: 40px 0 0 0;
`;

export const MovieButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin: 10px 0;
`;

export const MovieHr = styled.hr`
    border: 1px solid #E0E0E0;
    margin: 0 30px 0 0;
`;

export const MovieInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap-left: 10px;
`;

export const MovieInfoSpan = styled.span`
    font-family: 'Montserrat', sans-serif;
    margin: 20px 10px 0 0;
    display: flex;
    flex-direction: row;
    gap: 8px;
`;

export const MovieInfoText = styled.p`
    font-family: 'Montserrat', sans-serif;
    margin: 0;
`;

export const MovieDescriptionContainer = styled.div`
    font-family: 'Montserrat', sans-serif;
    margin: 20px 20px 0 0;
    font-size: 14px;
`;

export const MovieDescriptionTagline = styled.p`
    color: #E0E0E0;
    font-style: italic;
`;

export const MovieDescriptionBody = styled.p`
    color: #fff;
`;

export const GenreContainer = styled.div`
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 20px 0 0 0;
`;

export const GenreTitle = styled.h2`
    font-family: 'Montserrat', sans-serif;  
    font-size: 16px;
    margin: 0;
`;

export const GenreSpan = styled.span`
    display: flex;
    flex-direction: row;
    font-size: 12px;
    gap: 5px;
    padding: 5px;
    border-radius: 5px;
`;
    

export const GenreItem = styled.p`
    background-color: #E0E0E0;
    color: #333;
    padding: 5px;
    border-radius: 5px;
    margin: 0;
`;