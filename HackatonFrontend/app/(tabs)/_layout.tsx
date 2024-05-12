import React, { useState } from 'react';

import LoadingPage from '@/app/(tabs)/loading';
import LoginPage from '@/app/(tabs)/login';
import HomePage from '@/app/(tabs)/index';
import InvitationPage from '@/app/(tabs)/invit';
import GamePage from '@/app/(tabs)/game';
import OverPage from '@/app/(tabs)/over';

export default function TabLayout() {
  const [page, setPage] = useState('loading')
  const [userName, setUserName] = useState('')
  const [avatarId, setAvatarId] = useState(0)
  const [category, setCategory] = useState(0)
  const [score, setScore] = useState(0)
  return (
    (page === 'loading') ? <LoadingPage setPage={setPage} /> :
    (page === 'login') ? <LoginPage setPage={setPage} userName={userName} setUserName={setUserName} avatarId={avatarId} setAvatarId={setAvatarId} /> :
    (page === 'home') ? <HomePage setPage={setPage} userName={userName} avatarId={avatarId} setCategory={setCategory} /> :
    (page === 'invitation') ? <InvitationPage category={category} setPage={setPage} userName={userName} avatarId={avatarId} /> :
    (page === 'game') ? <GamePage score={score} setScore={setScore} category={category} setPage={setPage} userName={userName} avatarId={avatarId} /> :
    (page === 'over') ? <OverPage score={score} category={category} setPage={setPage} userName={userName} avatarId={avatarId} /> :
    null
  );
}
