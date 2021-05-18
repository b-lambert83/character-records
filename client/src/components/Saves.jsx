import React, {useState, useEffect, useContext } from 'react';

const Saves = () => {
  const stats = ['STRENGTH', 'DEXTERITY', 'CONSTITUTION', 'INTELLIGENCE', 'WISDOM', 'CHARISMA'];

  const savesList = stats.map((stat) => (
    <div className={`save${stat}`} key={`save${stat}`}>
      <label>
        <input type="checkbox" name={`save${stat}`} checked={false}/>
        <input type="number" name={`saveScore${stat}`} value={0}/>
        <p>{stat}</p>
      </label>
    </div>
  ))

  return (
    <div className="savesContainer">
      {savesList}
      <p>SAVING THROWS</p>
    </div>
  )
}

export default Saves;