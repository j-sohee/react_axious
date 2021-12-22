import './css/style.css';
import {Route, Link} from 'react-router-dom';
import Main from './components/Main.js';
import Department from './components/Department.js';
import Flickr from './components/Flickr.js';
import Youtube from './components/Youtube.js';
import Board from './components/Board';


function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <Link to="/">DCODELAB</Link>
        </h1>
        
        <ul id="gnb">
          <li><Link to="/department">Department</Link></li>
          <li><Link to="/flickr">Flickr</Link></li>
          <li><Link to="/youtube">Youtube</Link></li>
          <li><Link to="/board">Board</Link></li>
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
