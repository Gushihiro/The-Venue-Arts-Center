import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/venueartscenter'>
          <Main/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
