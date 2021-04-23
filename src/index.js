import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sdata from './Sdata';


function ncard(val){
  return (
    <App 
    imgsrc={val.imgsrc}
    title={val.title} 
    sname={val.sname} 
    link={val.link} />
  ); 
}

ReactDOM.render(
  <>
  <h1 className="heading+style">List of 5 Netflix Series 2021</h1>
   


    {Sdata.map(ncard)};

  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
