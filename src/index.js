import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div className="container">
    <p className="text">
      This content management tool has been deprecated.
      Please reach out to <a href="mailto:hannahstahl14@gmail.com">hannahstahl14@gmail.com</a> for access instructions to the new tool.
    </p>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
