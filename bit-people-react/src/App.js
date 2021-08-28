import React from 'react';
import { Header } from './components/Header/Header';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Footer } from './components/Footer/Footer';
import { Users } from './components/Users/Users';
import { Loader } from './components/Loader/Loader';
// import { Counter } from './components/Users/Counter/Counter';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      isListView: true,
      value: ''
    }
    this.gridListSwitch = this.gridListSwitch.bind(this)
  };

  componentDidMount() {
    this.getData();
  }
  //// Functions ////

  gridListSwitch = () => {
    this.setState({
      isListView: !this.state.isListView
    })
  }

  getData = () => {
    if (!localStorage.getItem('userKey')) {
      fetch('https://randomuser.me/api/?results=15')
        .then(res => res.json())
        .then(data => {
          this.setState({ users: data.results })
          localStorage.setItem('userKey', JSON.stringify(data.results))
        });
    } else {
      this.setState({ users: JSON.parse(localStorage.getItem('userKey')) })
    }
  }

  onReload = () => {
    fetch('https://randomuser.me/api/?results=15')
      .then(res => res.json())
      .then(data => {
        this.setState({ users: data.results })
        localStorage.setItem('userKey', JSON.stringify(data.results))
      });
  }

  onSearch = (newValue) => {

    this.setState({ value: newValue });
  }

  renderContent = (searchResult) => {
    if (this.state.users.length) {
      return <Users users={searchResult} isListView={this.state.isListView} />
    }
    return <Loader />
  }

  render() {
    const searchResult = this.state.users.filter(user => user.name.first.toLowerCase().includes(this.state.value.toLowerCase()) ||
      user.name.last.toLowerCase().includes(this.state.value.toLowerCase()));

    return (
      <div className="App">
        <Header reload={this.onReload} switchFunc={this.gridListSwitch} switcher={this.state.isListView} />
        <SearchBar onChange={this.onSearch} />
        {/* <Counter gender={this.state.users.gender} /> */}
        {this.renderContent(searchResult)}
        <Footer />
      </div>
    );
  }

}

export default App;














































