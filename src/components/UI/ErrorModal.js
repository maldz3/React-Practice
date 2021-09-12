// import { classes } from 'istanbul-lib-coverage';
import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import './ErrorModal.css';

const Backdrop = (props) => {
    return (
        <div className='backdrop' onClick={props.onConfirm}></div>
    )
}

const ModalOverlay = (props) => {
    return (
        <Card className='modal'>
            <header className='header'>
                <h2>{props.title}</h2>
            </header>
            <div className='content'>
                <p>{props.message}</p>
            </div>
            <footer className='actions'>
                <button onClick={props.onConfirm} type='submit'>Okay</button>
            </footer>
        </Card>
    )
}

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay onConfirm={props.onConfirm} title={props.title} message={props.message} />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    )
}
export default ErrorModal;