import React from 'react';
import './UserCard.css';
import PropTypes from 'prop-types';

const UserCard = (props) => {
    return (
        <div className='UserCard__wrapper'>
            <img className='UserCard__img' src={props.img} alt='Users'></img>
            <div className='UserCard__info'>
                <p>Name:{props.name}</p>
                <p>Email:{props.email}</p>
                <p>DOB:{props.dob}</p>
            </div>
        </div>
    )
}

UserCard.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    dob: PropTypes.string
}

UserCard.defaultProps = {
    name: 'Uros',
    email: 'gmail.com',
    dob: '23.04.1994.'
}

export { UserCard };