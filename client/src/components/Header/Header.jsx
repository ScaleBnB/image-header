import React, { useState, useEffect } from 'react';
import SVG from "react-inlinesvg";
import ContainerDiv from '../../elements/containerDiv';
import logo from '../../elements/logo.svg';
import search from '../../elements/search.svg';
import SearchInput from '../../elements/Header/searchInput';

const Header = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocusHandler = () => {
    setIsFocused(true);
  };

  const onBlurHandler = () => {
    setIsFocused(false);
  };

  console.log(isFocused)
  const content = (
    <>
      <ContainerDiv position="relative" height="81" widthpercent="100" display="table" border-spacing="0">
        <ContainerDiv name="logo" position="absolute" toppercent="50" transform="translateY(-50%)" box_sizing="border-box" padding="24">
          <SVG
            src={logo}
          />
        </ContainerDiv>
        <ContainerDiv>
          <ContainerDiv name="search container" position="absolute" transition="width 200ms ease-in !important" align_items="center" display="flex" left="80" top="16" widthSearch={isFocused} height="48" border="1px solid #EBEBEB" border_radius="4px" box_shadow="0 2px 4px rgba(0,0,0,0.1)">
            <SVG
              src={search}
            />
            <SearchInput onFocus={onFocusHandler} onBlur={onBlurHandler} placeholder="Search" />
          </ContainerDiv>
        </ContainerDiv>
        <ContainerDiv name="navbar">
        </ContainerDiv>
      </ContainerDiv>
    </>
  );

  return content;
};

export default Header;
