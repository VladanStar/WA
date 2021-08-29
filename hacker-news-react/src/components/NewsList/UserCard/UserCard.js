import React from 'react';
import './UserCard.css'
import FontAwesome from 'react-fontawesome';

class UserCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            score: '',
            author: '',
            comments: ''
        }
    }

    render(){
        return (
            <div className="UserCard__wrapper">
                <h3>{this.state.title}</h3>
                <div className="UserCard__info">
                <p>{this.state.score} points</p>
                <p>{this.state.author}</p>
                <p>{this.state.comments} comments</p>
                </div>

            </div>
        )
    }
    componentDidMount() {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json?print=pretty`)
        .then(res => res.json())
        .then(storyApi => {
            console.log(storyApi);
            
                  this.setState({
                      title: storyApi.title,
                      score: storyApi.score,
                      author: storyApi.by,
                      comments: storyApi.descendants

                  })
        })
    }
}

export { UserCard }