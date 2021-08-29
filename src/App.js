import React, {useState} from 'react';

import NewUser from './components/Users/NewUser';
import UserList from './components/Users/UserList';

const INITIAL_USERS = [
  { id: 'u1', username: 'Maliha', age: '40' },
  { id: 'u2', username: 'Sohail', age: '48' },
]

const App = () => {
  const [users, setUsers] = useState(INITIAL_USERS);

  const addUserHandler = (user) => {
    setUsers(prevUsers => {
      return [user, ...prevUsers];
    });
  }

  return (
    <div>
      <h1>Users!</h1>
      <NewUser onAddUser={addUserHandler} />
      <UserList items={users} />
    </div>
  );
}

export default App;
