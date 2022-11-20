import {useEffect, useState} from 'react';
import {MyPageTab, Profile} from '../type/MyPageDataType';

export default function useMyPage() {
  const [profile, setProfile] = useState<Profile>();
  const [tabMenu, setTabMenu] = useState<MyPageTab[]>([
    {title: '내 고민', isClicked: true},
    {title: '내 참견', isClicked: false},
  ]);

  const fetchData = async () => {
    const res = await fetch('http://localhost:8081/mock/profile_mock_data.json')
      .then(d => d.json())
      .catch(e => console.error(e));
    setProfile(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onClickTabMenu = (idx: number) => {
    if (tabMenu[idx].isClicked) {
      return;
    }

    const newTabState = tabMenu.map((menu, i) => {
      return {title: menu.title, isClicked: idx === i};
    });

    setTabMenu(newTabState);
  };

  return {profile, tabMenu, onClickTabMenu};
}
