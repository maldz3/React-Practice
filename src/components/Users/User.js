import React from 'react';

import Card from '../UI/Card';

import './User.css';

const User = (props) => {
    return (
        <li>
            <Card className="each-user">
                <h3>{props.username}</h3>
                <h3>{props.age}</h3>
            </Card>
        </li>       
    );
}

export default User;