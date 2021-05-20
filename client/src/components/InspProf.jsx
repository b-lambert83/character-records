import React, {useState, useEffect, useContext } from 'react';
import { CharContext } from '../Context.jsx';

const InspProf = () => {

  const {inspired, setInspired, profBonus, setProfBonus} = useContext(CharContext);

  return (
    <div className="inspProfContainer">
      <div className="inspProfPair">
          <input type="checkbox" name="inspired" checked={inspired} onChange={() => setInspired(!inspired)}/>
          <t>INSPIRATION</t>
      </div>
      <div className="inspProfPair">
        <input type="number" name="profBonus" value={profBonus} onChange={(e) => setProfBonus(e.target.value)}/>
        <t>PROFICIENCY BONUS</t>
      </div>
    </div>
  )
}

export default InspProf;