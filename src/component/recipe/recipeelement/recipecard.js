import React, { useState } from 'react';
import '../../../App.css';
import Record from './record.json';
import Cook from './cook';
import { Toast } from 'react-bootstrap';

function RecipeCard() {
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleCookButtonClick = (recipeId) => {
    const selectedRecipe = Record.find(recipe => recipe.recipe_id === recipeId);
    if (!selectedRecipes.find(recipe => recipe.recipe_name === selectedRecipe.recipe_name)) {
      setSelectedRecipes(prevSelectedRecipes => [...prevSelectedRecipes, selectedRecipe]);
    } else {
      setShowToast(true);
      setToastMessage(`You have already selected ${selectedRecipe.recipe_name}`);
    }
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <div className="container">
    <Toast show={showToast} onClose={() => setShowToast(false)}>
      <Toast.Header>
        <strong className="me-auto">{toastMessage}</strong>
      </Toast.Header>
    </Toast>
      <div className="row">
        <div className="col">
          <div className="row">
            {Record.map((record, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card RecipeCard">
                  <img className="card-img-top RecipeCardImage" src={record.image_path} alt="Card image" />
                  <div className="card-body">
                    <h4 className="card-title">{record.recipe_name}</h4>
                    <p className="card-text text-muted fw-light fs-6">{record.short_description}</p>
                    <hr />
                    <h5>Ingredients: <span>{record.ingredients.length}</span></h5>
                    <ul className='text-muted'>
                      {record.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                    <hr />
                    <p><span className='text-muted pe-3'>{record.preparing_time} minutes</span><span className='text-muted ps-3'>{record.calories} calories</span></p>
                    <button
                      className="btn btn-success"
                      onClick={() => handleCookButtonClick(record.recipe_id)}
                    >
                      Want to Cook
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col">
          <Cook selectedRecipes={selectedRecipes} />
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
