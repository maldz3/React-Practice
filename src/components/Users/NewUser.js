import React, {useState} from 'react';

import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helper/Wrapper';

import './NewUser.css';

const NewUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+enteredAge < 0) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }

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

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <form onSubmit={onSubmitHandler}>
                <Card className='new-user'>
                    <div>
                        <div className='new-user__control'>
                            <label htmlFor='username'>Username</label>
                            <input
                                id='username'
                                type='text'
                                value={enteredUsername}
                                onChange={usernameChangeHandler}
                            />
                        </div>
                        <div className='new-user__control'>
                            <label htmlFor='age'>Age</label>
                            <input
                                id='age'
                                type='number'
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
        </Wrapper>
    )
}

export default NewUser;