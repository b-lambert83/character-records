import React, {useState, useEffect, useContext } from 'react';

const Attributes = () => {
  const stats = ['STRENGTH', 'DEXTERITY', 'CONSTITUTION', 'INTELLIGENCE', 'WISDOM', 'CHARISMA'];

  const statBuilder = stats.map((data) => (
    <div className="attributePair" key={`attribute${data}`}>
      <label>
        {data}
        <input type="number" key={data} value="10"/>
      </label>
      <p id="bonusBox"> + 0 </p>
    </div>
    ))

  return (
    <div className="attributesContainer">
      {statBuilder}
    </div>
  )
}

export default Attributes;