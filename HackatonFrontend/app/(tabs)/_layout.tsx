import React, { useState } from 'react';
import LoadingPage from '@/app/(tabs)/loading';
import LoginPage from '@/app/(tabs)/login';
import SettingPage from '@/app/(tabs)/setting';
import HomePage from '@/app/(tabs)/index';
import { dataContext, ContextStruct } from '@/config'

export default function TabLayout() {
  const [page, setPage] = useState('loading')

  const sharedDatas : ContextStruct = ({
    'page': page,
    'setPage': setPage,
    'userName': 'Omer',
    'userImage': require('@/assets/images/person.png'),
  })

  return (
    <dataContext.Provider value={sharedDatas}>
      { (sharedDatas.page === 'home') ? <HomePage /> :
        (sharedDatas.page === 'login') ? <LoginPage /> :
        (sharedDatas.page === 'setting') ? <SettingPage /> :
        <LoadingPage />
      }
    </dataContext.Provider>
  );
}
