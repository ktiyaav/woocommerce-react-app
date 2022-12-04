import React from 'react';
import Profile from '../components/Authentication/Profile'
import LogoutBtn from '../components/Authentication/Auth0LogoutButton'
function Account() {
  return (
    <>
    <Profile></Profile>
    <LogoutBtn></LogoutBtn>
    </>
  );
}

export default Account;
