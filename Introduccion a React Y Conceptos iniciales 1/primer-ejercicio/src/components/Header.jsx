import React from "react";
export class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      texto: document.title,
    };
  }
  render() {
    return (
      <div className="header">
        <h2>Ejercicio 2.2</h2>
        <header className="header">{this.state.texto}</header>
      </div>
    );
  }
}
