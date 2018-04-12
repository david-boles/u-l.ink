import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function getPage() {
    if(window.location.hash.substr(1) === "") {
        return <App />
    }else {
        return <p>Hello!</p>
    }
}

ReactDOM.render(getPage(), document.getElementById('root'));
registerServiceWorker();
