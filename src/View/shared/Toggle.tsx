import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import styled from 'styled-components';

interface ToggleProps {
  isOn: boolean;
  onClickToogle: () => void;
}

const Toggle = ({isOn, onClickToogle}: ToggleProps) => {
  return (
    <TouchableWithoutFeedback onPress={onClickToogle}>
      <ToggleWrapper isOn={isOn}>
        <ToggleBall isOn={isOn} />
      </ToggleWrapper>
    </TouchableWithoutFeedback>
  );
};

interface ToggleUIProps {
  isOn: boolean;
}

const ToggleWrapper = styled(View)<ToggleUIProps>`
  display: flex;
  padding: 3px;
  width: 50px;
  height: 25px;

  border-radius: 20px;
  background-color: ${({isOn}) => (isOn ? '#0e6438' : 'black')};
`;

const ToggleBall = styled(View)<ToggleUIProps>`
  width: 19px;
  height: 19px;
  align-self: ${({isOn}) => (isOn ? 'flex-end' : 'flex-start')};

  border-radius: 20px;
  background-color: white;
`;

export default Toggle;
