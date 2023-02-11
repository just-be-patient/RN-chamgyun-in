import React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components';

export interface MoreMenuOption {
  text: string;
  callback: () => void;
  isWarning: boolean;
}

interface MoreMenuProps {
  top: number;
  right: number;
  options: MoreMenuOption[];
}

const MoreMenu = ({top, right, options}: MoreMenuProps) => {
  return (
    <MoreMenuWrapper top={top} right={right}>
      {options.map(option => {
        return (
          <TouchableWithoutFeedback onPress={option.callback} key={option.text}>
            <MoreMenuItem>
              <MoreMenuText isWarning={option.isWarning}>
                {option.text}
              </MoreMenuText>
            </MoreMenuItem>
          </TouchableWithoutFeedback>
        );
      })}
    </MoreMenuWrapper>
  );
};

interface MoreMenuWrapperProps {
  top: number;
  right: number;
}

const MoreMenuWrapper = styled(View)<MoreMenuWrapperProps>`
  position: absolute;
  top: ${({top}) => `${top}px`};
  right: ${({right}) => `${right}px`};
  z-index: 999;
  width: 245px;
  height: auto;
  overflow: hidden;

  border-width: 0.2px;
  border-style: solid;
  border-radius: 8px;
  background-color: ${({theme}) => theme.white};
`;

const MoreMenuItem = styled(View)`
  padding: 13px 24px;
  width: 100%;
  height: 48.5px;

  border-top-width: 0.2px;
  border-bottom-width: 0.2px;
  border-color: #adadaf;
  border-style: solid;
`;

interface MoreMenuTextProps {
  isWarning: boolean;
}

const MoreMenuText = styled(Text)<MoreMenuTextProps>`
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: ${({theme, isWarning}) => (isWarning ? theme.red01 : theme.black)};
`;

export {MoreMenu};
