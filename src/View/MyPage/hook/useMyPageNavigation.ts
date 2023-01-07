import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {MoreMenuOption} from '../../shared/MoreMenu';

export default function useMyPageNavigation() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  const onDddotClick = () => {
    setMenuVisible(!menuVisible);
  };

  const moreMenuOption: MoreMenuOption[] = [
    {
      text: '수정하기',
      callback: () => console.log('수정하기'),
      isWarning: false,
    },
    {
      text: '로그아웃',
      callback: () => console.log('로그아웃'),
      isWarning: true,
    },
  ];

  return {menuVisible, onDddotClick, moreMenuOption};
}
