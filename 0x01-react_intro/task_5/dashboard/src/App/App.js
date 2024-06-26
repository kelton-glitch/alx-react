import { getFooterCopy, getFullYear } from '../utils/utils';
import './App.css';
import holberton_logo from '../assets/holberton-logo.jpg';

function App() {
  return (
    <>
      <div className="App-header">
        <img src={holberton_logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email: </label>
        <input id="email" type="email"/>
        <label htmlFor='password'>Password: </label>
        <input id="password" type="password"/>
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </>
  );
}

export default App;
