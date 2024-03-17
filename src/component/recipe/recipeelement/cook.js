import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';

const Cook = ({ selectedRecipes }) => {
  const [clickedRecipes, setClickedRecipes] = useState(new Set());
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [totalPreparingTime, setTotalPreparingTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handlePreparingButtonClick = (recipe) => {
    if (!clickedRecipes.has(recipe.recipe_name)) {
      setClickedRecipes(prevClickedRecipes => new Set(prevClickedRecipes.add(recipe.recipe_name)));
      setShowToast(false);
      setToastMessage(`Preparing ${recipe.recipe_name}`);
      setTotalPreparingTime(prevTime => prevTime + parseInt(recipe.preparing_time));
      setTotalCalories(prevCalories => prevCalories + parseInt(recipe.calories));
    } else {
      setShowToast(true);
      setToastMessage(`Preparing ${recipe.recipe_name}`);
    }
  };
  
  const filteredRecipes = selectedRecipes.filter(recipe => !clickedRecipes.has(recipe.recipe_name));

  return (
    <div className=" p-3">

      <Toast show={showToast} onClose={() => setShowToast(false)}>
        <Toast.Header>
          <strong className="me-auto">Cooking Notification</strong>
        </Toast.Header>
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>

      <h2>Selected Recipes</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th></th>
            <th>Short Description</th>
            <th>Preparing Time</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecipes.map((recipe, index) => (
            <tr key={index}>
              <td>{++index}</td>
              <td>{recipe.recipe_name}</td>
              <td>{recipe.preparing_time}</td>
              <td>{recipe.calories}</td>
              <td>
                <button className="btn btn-success" onClick={() => handlePreparingButtonClick(recipe)}>
                  Preparing
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Currently cooking</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <td></td>
            <th>Short Description</th>
            <th>Preparing Time</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          {selectedRecipes.map((recipe, index) => (
            clickedRecipes.has(recipe.recipe_name) &&
            <tr key={index}>
              <td>{++index}</td>
              <td>{recipe.recipe_name}</td>
              <td>{recipe.preparing_time}</td>
              <td>{recipe.calories}</td>
            </tr>
          ))}
          {Array.from(clickedRecipes).length > 0 && (
            <tr>
              <td colSpan="2"></td>
              <th>{totalPreparingTime} min</th>
              <th>{totalCalories} calories</th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Cook;
