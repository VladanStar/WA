import React from 'react';
import { Post } from './Post/Post';
// import {Post} from './Post/Post';


class NewsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            storyIds: []
        };
    }
    render() {
        return (
            <div className="NewsList__list">
                {this.state.storyIds.map(storyId => <li><Post key={storyId} id={storyId}/></li>)}
            </div>
        )
    }
    componentDidMount() {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(res => res.json())
            .then(ids => {
                this.setState({ storyIds: ids.slice(0, 9) });
            });
    }

}

export { NewsList }

