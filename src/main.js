import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './HelloWorld'

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(HelloWorld),
    document.getElementById('mount')
  );
});
