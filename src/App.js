import './css/style.css';
import {Route, NavLink} from 'react-router-dom';
import Main from './components/Main.js';
import Department from './components/Department.js';
import Flickr from './components/Flickr.js';
import Youtube from './components/Youtube.js';
import Board from './components/Board';


function App() {
  const activeStyle = {color: "aqua"}
  return (
    <div className="App">
      <header>
        <h1>
          <NavLink exact to="/" activeStyle={activeStyle}>DCODELAB</NavLink>
        </h1>
        
        <ul id="gnb">
          <li><NavLink exact to="/department" activeStyle={activeStyle}>Department</NavLink></li>
          <li><NavLink exact to="/flickr" activeStyle={activeStyle}>Flickr</NavLink></li>
          <li><NavLink exact to="/youtube" activeStyle={activeStyle}>Youtube</NavLink></li>
          <li><NavLink exact to="/board" activeStyle={activeStyle}>Board</NavLink></li>
        </ul>       
      </header>

      <Route exact path="/" component={Main}></Route>
      <Route exact path="/department" component={Department}></Route>
      <Route exact path="/flickr" component={Flickr}></Route>
      <Route exact path="/youtube" component={Youtube}></Route>
      <Route exact path="/Board" component={Board}></Route>
    </div>
  );
}

export default App;
