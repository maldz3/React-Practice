import React, {useState} from 'react';

import Card from '../UI/Card';

import './NewUser.css';

const NewUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        const userData = {
            username: enteredUsername,
            age: enteredAge,
        };

        onSaveUserData(userData);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const onSaveUserData = (enteredUserData) => {
        const userData = {
            ...enteredUserData,
            id: Math.random().toString()
        };
        props.onAddUser(userData);
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <Card className='new-user'>
                <div className='new_user__controls'>
                    <div className='new-user__control'>
                        <label>Username</label>
                        <input
                            type='text'
                            value={enteredUsername}
                            onChange={usernameChangeHandler}
                        />
                    </div>
                    <div className='new-user__control'>
                        <label>Age</label>
                        <input
                            type='text'
                            value={enteredAge}
                            onChange={ageChangeHandler}
                        />
                    </div>
                    <div className='new-user__action'>
                        <button type='submit'>Add User</button>
                    </div>
                </div> 
            </Card>
        </form>
    )
}

export default NewUser;