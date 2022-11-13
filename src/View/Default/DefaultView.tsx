import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import styled from 'styled-components';
import Wrapper from '../shared/Wrapper';

const DefaultView: React.FC = ({navigation}: any) => {
  const replace = () => {
    setTimeout(() => navigation.replace('Login'), 2000);
  };

  useEffect(() => {
    replace();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DefaultWrapper>
      <Image source={require('../../../assets/default_logo.png')} />
    </DefaultWrapper>
  );
};

const DefaultWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default DefaultView;
