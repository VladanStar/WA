import React from 'react';
import './Post.css';
class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            score: '',
            author: '',
            time: '',
            comments: ''



        }
    }

    render() {
        return (
            <div className="Post__wrapper">
                <h3 className="Post__title">{this.state.title}</h3>
                <div className="Post__info">
                    <p className="Post__score"> {this.state.score}</p>
                    <p className="Post__author"> {this.state.author}</p>
                    <p className="Post__time"> {this.state.time}</p>
                    <p className="Post__comments"> {this.state.comments} comments</p>
                </div>
            </div >
        )
    }

    componentDidMount() {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json?print=pretty`)
            .then(res => res.json())
            .then(apiStory => {
                console.log(apiStory);
                this.setState({
                    title: apiStory.title,
                    score: apiStory.score,
                    author: apiStory.by,
                    time: apiStory.time,
                    comments: apiStory.descendants
                });
            });
    }
}

export { Post };