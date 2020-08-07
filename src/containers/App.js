import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll'

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots:[],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearchChange=(event)=> {
        this.setState({ searchfield: event.target.value})
    }

    render() {
        const {robots,searchfield}= this.state;
        const fillterRobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return ( 
            ! robots.length ? 
            <h1>loading...</h1> : 
            (   
                <div className="tc">
                        <h1 className="f1">Robo</h1>
                        <SearchBox searchchange={this.onSearchChange}/>
                        <Scroll>
                            <CardList robots={fillterRobots}/>
                        </Scroll>                       
                </div>
            )      
        )
    };
}

export default App;