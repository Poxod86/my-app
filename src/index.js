import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header'
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
  render() {
    return (
      <div>
        <p> Привет Я могу отобразить новости</p>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <p className='header'>Просто код</p>
    <Header />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
