
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import '../../App.css';
import RecipeArray from './recipeelement/recipearray';
import Cook from './recipeelement/cook';
import RecipeCard from './recipeelement/recipecard';

function Recipe() {
  return (
    <div className="my-5 py-5">
        <h1 className='fw-bolder text-center py-2 pb-4'>Our Recipes</h1>
        <p className='col-8 px-5 text-center mx-auto pb-5'>
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.
        </p>
        <div className='row'>
            <div className='col-12'>
                <Row>
                    <RecipeCard />
                </Row>
            </div>
        </div>
    </div>
  );
}

export default Recipe;