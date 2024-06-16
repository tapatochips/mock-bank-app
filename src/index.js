import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppRegistry } from 'react-native';
import appConfig from './app.json';
import reportWebVitals from './reportWebVitals';

//register app
App.AppRegistry.registerComponent(appConfig.name, () => App);
App.runApplication(appConfig.name, {
  initialProps: {},
  rootTag: document.getElementById('root'),
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
