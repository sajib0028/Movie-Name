import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sdata from './Sdata';


console.log(Sdata[0]);

ReactDOM.render(
  <>
  <h1 className="heading+style">List of 5 Netflix Series 2021</h1>
    <App 
    imgsrc={Sdata[0].imgsrc}
    title={Sdata[0].title} 
    sname={Sdata[0].sname} 
    link={Sdata[0].link} />

  <App 
    imgsrc={Sdata[1].imgsrc}
    title={Sdata[1].title} 
    sname={Sdata[1].sname} 
    link={Sdata[1].link} />


    <App 
    imgsrc={Sdata[2].imgsrc}
    title={Sdata[2].title}
     sname={Sdata[2].sname} 
     link={Sdata[2].link} />

    <App 
    imgsrc={Sdata[3].imgsrc}
    title={Sdata[3].title}
     sname={Sdata[3].sname}
      link={Sdata[3].link} />

    <App 
    imgsrc={Sdata[4].imgsrc}
    title={Sdata[4].title}
     sname={Sdata[4].sname}
      link={Sdata[4].link} />
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
