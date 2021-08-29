import React from 'react';
import { ListView } from './ListView/ListView';
import { GridView } from './GridView/GridView';
import { UsersNotFound } from './UsersNotFound/UsersNotFound'

const Users = (props) => {
    if (props.users.length === 0) {
        return <UsersNotFound />
    }

    return (
        props.isListView
            ? <ListView users={props.users} />
            : <GridView users={props.users} />
    )
}

export { Users }