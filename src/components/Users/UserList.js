import React from 'react';
import User from './User';
import Card from '../UI/Card';

import './UserList.css';

const UserList = (props) => {

    if (props.items.length === 0) {
        return (
            <h2 className="user-list__fallback">No users found.</h2>
        )
    }

    return (
        <Card className="users">
            <ul className="user-list">
                {props.items.map((user) => (
                    <User
                        key={user.id}
                        id={user.id}
                        username={user.username}
                        age={user.age}
                        onDelete={props.onDeleteItem}
                    />
                ))}
            </ul>
        </Card> 
    )
}

export default UserList;