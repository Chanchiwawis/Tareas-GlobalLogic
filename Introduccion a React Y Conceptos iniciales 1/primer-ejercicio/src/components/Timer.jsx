import React from "react";
    export class Timer extends React.Component{
        constructor() {
            super();
            this.state = {
                color: "red"
            };
            setTimeout(this.cambiarColor, 5000);
        }
        cambiarColor = () => {
            this.setState({
                color: "green"
            });
        }
        render() {
            return (
                <div className = "color">
                    <h2>Ejercicio 2</h2>
                    <div>
                        {this.state.color}
                    </div>
                </div>
                )
        }
    }
