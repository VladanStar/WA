import React from 'react';
import "./UserGrid.css"
import { IoMdMail } from 'react-icons/io';
import { FaBirthdayCake } from 'react-icons/fa'

const UserGrid = (props) => {

    return (
        <div className={`UserGrid__wrapper ${props.gender === "female" ? 'UserGrid__wrapper UserGrid__wrapper_female' : ''}`}>
            <img alt="Users pic" src={props.img} />
            <div className="UserGrid__info">
                <h4>{props.name} {props.last}</h4>
                <p> <IoMdMail /> {props.email}</p>
                <p> <FaBirthdayCake /> {props.dob}</p>
            </div>
        </div>
    )
}

export { UserGrid }