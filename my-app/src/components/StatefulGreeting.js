import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick() {
        console.log("Button clicked.")
        this.setState((prevState, prevProps) => {
            console.log("Previous state: ", prevState);
            console.log("Previous Props: ", prevProps);
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            }   
        }, () => {
            // this callback executes AFTER the setState async function has finished
            // add the optional callback as a second parameter to the setState function
            console.log("New state: ", this.state.introduction);
            console.log("New state: ", this.state.buttonText);
        });
    }

    increment() {
        this.setState((prevState, prevProps) => {
            console.log("Previous state: ", prevState);
            console.log("Previous Props: ", prevProps);
            return {
                count: prevState.count + 1,
            }
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.increment()}>{this.state.count}</button>
            </div>
        )
    }
}

export default StatefulGreeting;