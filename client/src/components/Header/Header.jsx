import React, { useState, useEffect } from 'react';
import SVG from "react-inlinesvg";
import ContainerDiv from '../../elements/containerDiv';
import logo from '../../elements/logo.svg';
import search from '../../elements/search.svg';
import globe from '../../elements/globe.svg';
import SearchInput from '../../elements/Header/searchInput';
import UL from '../../elements/Header/ul';
import LI from '../../elements/Header/li';
import SearchBar from '../../elements/Header/searchBar';

const Header = (props) => {
  const [isFocused, setIsFocused] = useState('false');

  const onFocusHandler = () => {
    setIsFocused('true');
  };

  const onBlurHandler = () => {
    setIsFocused('false');
  };

  const content = (
    <>
      <ContainerDiv name="headerbar" position="absolute" top="0" left="0" height="81" widthpercent="100" border-spacing="0">
        <ContainerDiv name="logo" position="absolute" toppercent="50" transform="translateY(-50%)" box_sizing="border-box" padding="24">
          <SVG
            src={logo}
          />
        </ContainerDiv>
        <SearchBar name="search container" search={isFocused}>
          <SVG
            src={search}
          />
          <SearchInput onFocus={onFocusHandler} onBlur={onBlurHandler} placeholder="Search" />
        </SearchBar>
        <ContainerDiv name="navbar" position="absolute" left="716" widthpercent="100" height="80">
          <UL>
            <LI name="english">
              <ContainerDiv position="relative" hover="yes" padding="0px 8" heightpercent="100" line_height="80px" vertical_align="middle">
                <ContainerDiv display="inline-block" font_size="14px" font_family="Nunito sans" cursor="pointer" font_weight="600" color="#484848" vertical_align="middle" line_height="1" padding="8">
                  <span style={{ marginRight: '6px' }}>
                    <SVG
                      src={globe}
                    />
                  </span>
                  English (US)
                </ContainerDiv>
              </ContainerDiv>
            </LI>
            <LI name="english">
              <ContainerDiv position="relative" hover="yes" padding="0px 8" heightpercent="100" line_height="80px" vertical_align="middle">
                <ContainerDiv display="inline-block" font_size="14px" font_family="Nunito sans" cursor="pointer" font_weight="600" color="#484848" vertical_align="middle" line_height="1" padding="8">
                  $ USD
                </ContainerDiv>
              </ContainerDiv>
            </LI>
            <LI name="english">
              <ContainerDiv position="relative" hover="yes" padding="0px 8" heightpercent="100" line_height="80px" vertical_align="middle">
                <ContainerDiv display="inline-block" font_size="14px" font_family="Nunito sans" cursor="pointer" font_weight="600" color="#484848" vertical_align="middle" line_height="1" padding="8">
                  Become a host
                </ContainerDiv>
              </ContainerDiv>
            </LI>
            <LI name="english">
              <ContainerDiv position="relative" hover="yes" padding="0px 8" heightpercent="100" line_height="80px" vertical_align="middle">
                <ContainerDiv display="inline-block" font_size="14px" font_family="Nunito sans" cursor="pointer" font_weight="600" color="#484848" vertical_align="middle" line_height="1" padding="8">
                  Help
                </ContainerDiv>
              </ContainerDiv>
            </LI>
            <LI name="english">
              <ContainerDiv position="relative" hover="yes" padding="0px 8" heightpercent="100" line_height="80px" vertical_align="middle">
                <ContainerDiv display="inline-block" font_size="14px" font_family="Nunito sans" cursor="pointer" font_weight="600" color="#484848" vertical_align="middle" line_height="1" padding="8">
                  Sign up
                </ContainerDiv>
              </ContainerDiv>
            </LI>
            <LI name="english">
              <ContainerDiv position="relative" hover="yes" padding="0px 8" heightpercent="100" line_height="80px" vertical_align="middle">
                <ContainerDiv display="inline-block" font_size="14px" font_family="Nunito sans" cursor="pointer" font_weight="600" color="#484848" vertical_align="middle" line_height="1" padding="8">
                  Log in
                </ContainerDiv>
              </ContainerDiv>
            </LI>
          </UL>
        </ContainerDiv>
      </ContainerDiv>
    </>
  );

  return content;
};

export default Header;
