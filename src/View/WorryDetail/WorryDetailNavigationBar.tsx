import React from 'react';
import styled from 'styled-components';
import {NavigationBar, PreButtonIcon} from '../shared/NavigationBar';

interface WorryDetailNavigationBarProps {
  onPreButtonClick: () => void;
}

const WorryDetailNavigationBar = ({
  onPreButtonClick,
}: WorryDetailNavigationBarProps) => {
  return (
    <WorryDetailNavigationBarWrapper>
      <PreButtonIcon onPreButtonClick={onPreButtonClick} />
    </WorryDetailNavigationBarWrapper>
  );
};

const WorryDetailNavigationBarWrapper = styled(NavigationBar)``;

export default WorryDetailNavigationBar;
