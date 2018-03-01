import React, { Component } from 'react';

class ProfileCard extends Component {
  render() {
    return
    <div class="profile-card">
      <header class="profile-header">
        <img src="{{image}}" />
        <h2>{{name}}</h2>
      </header>
      <section class="skills-container hidden">
        <h4>Skills</h4>
        <ul class="skills-list">
          {this.props.skills.map(skill => {return <li key={i = i + 1}>{skill}></li>})
          }
        </ul>
      </section>
    </div>
    );
  }
}

export { ProfileCard };
