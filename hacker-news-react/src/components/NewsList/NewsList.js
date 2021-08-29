import React from 'react';
import { UserCard } from './UserCard/UserCard'
import './NewsList.css'

class NewsList extends React.Component {
 constructor(props) {
     super(props);

     this.state = {
         newsIds: []
     }
 }

 render() {
return (
    <div className="NewsList__wrapper">
        {this.state.newsIds.map(newsId => <UserCard key={newsId} id={newsId}/>)}
    </div>
    )
 };

componentDidMount(){
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(res => res.json())
    .then(ids =>
        this.setState({ newsIds: ids.slice(0,9) })
        )
 };

}

export { NewsList }