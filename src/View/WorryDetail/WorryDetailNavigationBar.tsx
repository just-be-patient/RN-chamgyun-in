import React from 'react';
import styled from 'styled-components';
import {NavigationBar} from '../shared/NavigationBar';
import {PreButtonIcon} from '../shared/PreButtonIcon';

const WorryDetailNavigationBar = () => {
  return (
    <WorryDetailNavigationBarWrapper>
      <PreButtonIcon />
    </WorryDetailNavigationBarWrapper>
  );
};

const WorryDetailNavigationBarWrapper = styled(NavigationBar)``;

export default WorryDetailNavigationBar;
