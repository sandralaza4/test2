import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div>
          <h1>Contact :</h1>
          <form id="m">
            <label>E-mail : </label>
            <input type="text"/><br/>
            <label>Password :</label>
            <input type="password"/>
            <button>Connexion</button>
          </form>
          
      </div>
    )
  }
}
