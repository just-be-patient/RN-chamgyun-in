import React from 'react';
import styled from 'styled-components';
import {NavigationBar} from '../shared/NavigationBar';
import {PreButtonIcon} from '../shared/PreButtonIcon';

const InterestListNavigationBar = () => {
  return (
    <InterestListNavigationBarWrapper>
      <PreButtonIcon />
    </InterestListNavigationBarWrapper>
  );
};

const InterestListNavigationBarWrapper = styled(NavigationBar)``;

export default InterestListNavigationBar;
