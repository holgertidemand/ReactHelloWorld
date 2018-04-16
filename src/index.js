import React from 'react';
import ReactDOM from 'react-dom';
// create a new component. this component should produce some html 

const App = () => {
    return <div>Hi!</div>;
}

// take this component's generaded html and put it in the dom.

ReactDOM.render(<App />, document.querySelector('.container'));