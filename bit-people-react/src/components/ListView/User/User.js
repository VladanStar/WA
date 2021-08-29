import React from 'react';
import "./User.css";
import { IoMdMail } from 'react-icons/io';
import { FaBirthdayCake } from 'react-icons/fa'

const User = (props) => {

    return (
        <div className="User__wrapper">
            <img alt="Users pic" src={props.img} />
            <div className="User__info">
                <h4>{props.name} {props.last}</h4>
                <p> <IoMdMail /> {props.email}</p>
                <p> <FaBirthdayCake /> {props.dob}</p>
            </div>
        </div>
    )
}

export { User }