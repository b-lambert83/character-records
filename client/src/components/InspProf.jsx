import React, {useState, useEffect, useContext } from 'react';

const InspProf = () => {

  return (
    <div className="inspProfContainer">
      <div className="inspProfPair">
        <label>
          <input type="checkbox" name="inspired" checked={false}/>
          INSPIRATION
        </label>
      </div>
      <div className="inspProfPair">
        <label>
          <input type="number" name="profBonus"/>
          PROFICIENCY BONUS
        </label>
      </div>
    </div>
  )
}

export default InspProf;