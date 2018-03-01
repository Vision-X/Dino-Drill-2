import React, { Component } from 'react';
import { ProfileCard } from './ProfileCard';
// import './Profiles.css';

class Profiles extends Component {
  render() {
    return (
      <main>
        <section id="profiles-container">
          <h2>Profiles</h2>
          <ul id="profiles"></ul>
        </section>
      </main>

    );
  }
}

export { Profiles };
