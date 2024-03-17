
import './App.css';

import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Nav from './component/nav/nav';
import Hero from './component/hero/hero';
import Recipe from './component/recipe/recipe';


function App() {
  return (
    <div className='container'>
        <Nav className="my-2" />
        <Hero className="my-2" />
        <Recipe />
    </div>
  );
}

export default App;
