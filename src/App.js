import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="img" className="image" />
        <div className="card_infor">
        <span className="card_category">{props.title}</span>
        <h3 className="card_title">{props.sname}</h3>
        <a href={props.link} target="_blank">
          <button>Watch Now</button>
          </a>
        </div>
      </div>

    </div>
  );
}

export default App;
