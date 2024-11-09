// does not need to import React from "react", for most recent versions.

// functional component - arrow function
const FunctionalGreetingWithProps = (props) => {
    console.log(props)
    return <h2>Hello, {props.name}! I see you're {props.age} years old; {props.greeting}</h2>
}

// must be exported
export default FunctionalGreetingWithProps