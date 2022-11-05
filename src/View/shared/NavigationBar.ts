import {View} from 'react-native';
import styled from 'styled-components';

const NavigationBar = styled(View)`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;

  border-bottom-width: 0.2px;
  border-style: solid;
`;

export default NavigationBar;
