import {useEffect, useState} from 'react';
import {Profile} from '../type/MyPageDataType';

export default function useMyPage() {
  const [profile, setProfile] = useState<Profile>();

  useEffect(() => {
    const fetchMock = async () => {
      const res = await fetch(
        'http://localhost:8081/mock/profile_mock_data.json',
      )
        .then(d => d.json())
        .catch(e => console.error(e));
      setProfile(res);
    };

    fetchMock();
  }, []);

  return {profile};
}
