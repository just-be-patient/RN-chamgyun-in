import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const PreButtonIcon = () => {
  const navigation = useNavigation();

  const onPreButtonClick = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={onPreButtonClick}>
      <PreButton source={require('../../../assets/nb_pre.png')} />
    </TouchableOpacity>
  );
};

const PreButton = styled(Image)`
  width: 11.3px;
  height: 20px;
`;

export {PreButtonIcon};
