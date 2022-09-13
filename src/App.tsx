import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
// import cls from './App.module.scss';
import Home from './components/Home'
// import Squares from './components/Squares'
import { Todo } from './components/Todo'
// import Ishop from './components/Ishop'
// import Filter2 from './components/Filter2'


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/squares">Squares</Link>
            </li> */}
            <li>
              <Link to="/todo">Todo</Link>
            </li>
            {/* <li>
              <Link to="/ishop">Ishop</Link>
            </li>
            <li>
              <Link to="/filter2">Filter2</Link>
            </li> */}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route exact path="/squares" element={<Squares />} /> */}
          <Route path="/todo" element={<Todo />} />
          {/* <Route exact path="/ishop" element={<Ishop />} />
          <Route exact path="/filter2" element={<Filter2 />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App;