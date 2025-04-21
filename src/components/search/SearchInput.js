import React from "react";
import styled from 'styled-components';

const SearchBox = styled.div`
  align-items: baseline;
  display: flex;
  height: 48px;
  margin-bottom: 50px;
  max-width: 560px;
`;

// const SearchLabel = styled.label`
//   margin-bottom: 20px;
// `;

const SearchInputDiv = styled.input`
  border-radius: 24px;
  height: 100%;
  padding-left: 20px;
  width: 100%;
`;

function SearchInput(props) {

  return (
    <SearchBox>
          {/* <svg aria-hidden="true" viewBox="0 0 24 24">
    <path
      d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
    />
  </svg> */}
        {/* <SearchLabel for="search">Search: </SearchLabel> */}
        <SearchInputDiv type="search"   aria-label="Search for a movie or TV show" autocomplete="off" inputmode="search" placeholder="Search for a movie or TV show" name="search" id="search" onChange={(e) => props.handleSearch(e.target.value)}/>
    </SearchBox>
  );
}

export default SearchInput;