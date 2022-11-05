import React from 'react';
import styled from 'styled-components';
import {NavigationBar, PreButtonIcon} from '../shared/NavigationBar';

interface InterestListNavigationBarProps {
  onPreButtonClick: () => void;
}

const InterestListNavigationBar = ({
  onPreButtonClick,
}: InterestListNavigationBarProps) => {
  return (
    <InterestListNavigationBarWrapper>
      <PreButtonIcon onPreButtonClick={onPreButtonClick} />
    </InterestListNavigationBarWrapper>
  );
};

const InterestListNavigationBarWrapper = styled(NavigationBar)``;

export default InterestListNavigationBar;
