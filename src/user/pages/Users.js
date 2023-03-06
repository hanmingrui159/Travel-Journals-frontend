import React from 'react';

import UsersList from '../components/UsersList.js';

const Users = () => {
  const USERS = [
    {id:'u1', name:'Max Schwarz', image:"https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg", places:3}
  ];
  
    return <UsersList items={USERS} />;
};

export default Users;