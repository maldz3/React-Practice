import React from 'react';

import Card from '../UI/Card';

import './User.css';

const User = (props) => {

    const deleteUserHandler = () => {
        props.onDelete(props.id);
    }

    return (
        <li onClick={deleteUserHandler}>
            <Card className="each-user">
                <h3>{props.username}</h3>
                <h3>{props.age}</h3>
            </Card>
        </li>       
    );
}

export default User;