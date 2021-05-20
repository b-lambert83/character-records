import React, {useState, useEffect, useContext } from 'react';

const InspProf = () => {

  const [inspired, setInspired] = useState(false);
  const [profBonus, setProfBonus] = useState(0);

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