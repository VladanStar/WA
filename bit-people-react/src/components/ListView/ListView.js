import React from 'react';
import { User } from './User/User';
import "./ListView.css";

class ListView extends React.Component {

    render() {
        return (
            <div className="ListUsers__wrapper">
                {this.props.users.map((userId, i) => (
                    <User key={i} img={userId.picture.thumbnail}
                        name={userId.name.first} last={userId.name.last}
                        email={userId.email} dob={userId.dob.date} />
                ))}
            </div>
        )
    }

}

export { ListView }

