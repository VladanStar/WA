import React from 'react';
import data from '../UsersData/RandomUsers';
import { UserCard } from './UserCard/UserCard';
import './UsersGrid.css'

const UsersGrid = () => {
    return (
        <ul className='GridUsers__list'>
            {data.results.map(person => <UserCard
                key={person.login.uuid}
                img={person.picture.large}
                name={person.name.first}
                email={person.email}
                dob={person.dob.date} />)}
        </ul>
    )
}

export { UsersGrid }