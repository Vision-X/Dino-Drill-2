import React, { Component } from 'react';
import { Header } from './Header.jsx';
import { Profiles } from './Profiles';
import { Footer } from './Footer.jsx';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      dinoData: []
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    let node = event.target;
    if (node.closest('li.profile-card')) {
      if (node.nextSibling != null && node.nextSibling.classList.contains('hidden')) {
          node.nextSibling.classList.remove('hidden');
      } else if (node.nextSibling !=null && node.nextSibling.classList.contains('skills-container')) {
          node.nextSibling.classList.add('hidden');
      }
    }
  }

  componentDidMount() {
    var dataCopy = (response) => {
      this.setState({dinoData: response})
    };
    let apiURL = './dinosaurs.json';
    return fetch(apiURL)
          .then(response => response.json())
          .then(dataCopy)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Profiles handleClick={this.handleClick} data={this.state.dinoData}/>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
