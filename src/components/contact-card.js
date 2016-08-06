import React, { Component } from 'react';

class ContactCard extends Component {
  render() {
    return (
      <div className="ContactCard">
        <h3>Theron Cross</h3>
        <h4>theroncross@gmail.com</h4>
        <ul>
          <li><a href="https://github.com/theroncross">Github</a></li>
          <li><a href="https://www.linkedin/in/theroncross">LinkedIn</a></li>
          <li><a href="https://twitter.com/theroncross">Twitter</a></li>
        </ul>
      </div>
    );
  }
}

export default ContactCard;
