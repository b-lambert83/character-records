import React, {useState, useEffect, useContext } from 'react';

const Proficiencies = () => {
  const profObj = {
    Type: 'Proficiency',
  };

  const profList = Object.keys(profObj).map((key) => (
    <div key={key}>
      <t>{key}</t><t>{profObj[key]}</t>
    </div>
  ));

  return (
    <div>
      <t> Type </t><t> Proficiency </t>
      {profList}
      <div>
      <form id="addProficiency" />
      <label>
        <select form="addProficiency">
          <option>Language</option>
          <option>Weapon</option>
          <option>Armor</option>
          <option>Tool</option>
        </select>
        Type
      </label>
      <label>
        <input type="text" form="addProficiency"/>
        Proficiency
      </label>
      <input type="submit" value="Add Proficiency" />
      </div>
    </div>
  )
}

export default Proficiencies;