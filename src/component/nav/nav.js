import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Logo from './nav_element/logo';
import List from './nav_element/list';
import Search from './nav_element/search';

function Nav() {
  return (
    <nav className='navbar navbar-expand-sm bg-light shadow px-5'>
        <div className='col mx-auto'>
            <Logo />
        </div>
        <div className='col mx-auto'>
            <List />
        </div>
        <div className='col mx-auto'>
            <Search />
        </div>
    </nav>
  );
}

export default Nav;