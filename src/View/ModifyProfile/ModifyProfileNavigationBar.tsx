import React from 'react';
import styled from 'styled-components';
import {NavigationBar} from '../shared/NavigationBar';
import {PreButtonIcon} from '../shared/PreButtonIcon';

const ModifyProfileNavigationBar = () => {
  return (
    <ModifyProfileNavigationBarrWrapper>
      <PreButtonIcon />
    </ModifyProfileNavigationBarrWrapper>
  );
};

const ModifyProfileNavigationBarrWrapper = styled(NavigationBar)`
  margin-bottom: 61px;
`;

export default ModifyProfileNavigationBar;
