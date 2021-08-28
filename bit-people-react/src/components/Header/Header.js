import React from 'react';
import './Header.css';
import { IoMdRefresh } from 'react-icons/io';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { FaThList } from 'react-icons/fa';

const Header = (props) => {
    return (
        <div className="Header__wrapper">
            <h1>BIT People</h1>
            <div className="Header__switcher">
                <h4>About</h4>
                <IoMdRefresh onClick={props.reload} />
                {props.switcher ? <BsFillGrid3X3GapFill
                    onClick={props.switchFunc} /> : <FaThList onClick={props.switchFunc} />}
            </div>


        </div>
    )
}

export { Header };