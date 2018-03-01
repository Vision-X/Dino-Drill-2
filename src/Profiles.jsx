import React, { Component } from 'react';
import './Profiles.css';

class Profiles extends Component {
  render() {
    return (
        <section id="profiles-container">
          <h2>Profiles</h2>
          <ul id="profiles">
            {this.props.data.map((dino, index) => {
              return (
                <li key={index} onClick={this.props.handleClick} className="profile-card">
                  <header className="profile-header">
                    <li key={index + dino.name}>
                      <img src={dino.image} alt= {`a dinosaur called ${dino.name}`} />
                      <h2>{dino.name}</h2>
                    </li>
                  </header>
                  <section className="skills-container hidden">
                    <h4>Skills</h4>
                    <ul className="skills-list">
                      {dino.skills.map((skill, index) => {
                          return <li key={dino.name+index}>{skill}</li>
                          })
                        }
                    </ul>
                  </section>
                </li>
              )}
            )}
          </ul>
        </section>
    );
  }
}

export { Profiles };
