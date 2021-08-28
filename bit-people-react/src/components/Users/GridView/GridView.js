import React from 'react';
import { UserGrid } from './UserGrid/UserGrid';
import "./GridView.css";


class GridView extends React.Component {

    render() {
        return (
            <div className="GridView__wrapper">
                {this.props.users.map((userId, i) => (
                    <UserGrid key={i} img={userId.picture.large}
                        name={userId.name.first} last={userId.name.last}
                        email={userId.email} dob={userId.dob.date} gender={userId.gender} />
                ))}
            </div>
        )
    }

}

export { GridView }


