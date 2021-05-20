import React, {useState, useEffect, useContext } from 'react';
import { CharContext } from '../Context.jsx';

const Saves = () => {

  const {savesObj, setSavesObj} = useContext(CharContext);

  const savesList = Object.keys(savesObj).map((key) => (
    <div className={`save${key}`} key={`save${key}`}>
      <input type="checkbox" name={key}
        checked={savesObj[key][1]}
        onChange={(e) => setSavesObj({
          ...savesObj,
          [e.target.name]: !e.target.checked
        })}
      />
      <input type="number" name={key}
        value={savesObj[key][0]}
        onChange={(e) => setSavesObj({
          ...savesObj,
          [e.target.name]: e.target.value
        })}
      />
      <p>{key}</p>
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