import React from 'react'
import { SearchBoxProps } from './types';
import { SearchBoxContainer, SearchBoxStyled } from './styles';

const SearchBox: React.FC<SearchBoxProps> = ({ onChangeHandler }) => {
    return (
        <SearchBoxContainer>
            <SearchBoxStyled
                type='search'
                placeholder='Search movie'
                onChange={onChangeHandler}
            />
        </SearchBoxContainer>
    );
};

export default SearchBox