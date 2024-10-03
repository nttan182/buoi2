import logo from './logo.svg';
import './App.css';
import {Hello, HelloPerson} from './component/Hello.js';
import {Item, Menu, Header} from './component/Header.js'
import {Hi, hiAll, hiYou} from './component/Hi.js';
import Car from "./component/Car.js";       
import Login from "./component/Login.js";

function App() {
  return (
    <div className="App">
    <Hello/>
    <HelloPerson name={'Thuy An'}/>
    <Header/>
    <Hi/>
    <Car />
    <Login/>
    </div>
  );
}

export default App;