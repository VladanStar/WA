import React from 'react';
import './UsersNotFound.css'
import { IoMdSad } from 'react-icons/io'

const UsersNotFound = () => {
    return (
        <div className="UsersNotFound__wrapper">
            <IoMdSad />
            <h1>We couldn't find any people matching your search</h1>
        </div>
    )
}

export { UsersNotFound }