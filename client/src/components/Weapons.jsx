import React, {useState, useEffect, useContext } from 'react';

const Weapons = () => {

  const weaponOptions = {
    Longsword: ['+2', '1d8+2'],
    Firebolt: ['+2', '1d10']
  };

  const weaponsRender = Object.keys(weaponOptions).map((key) => (
    <div key={key}>
      <p>{key}</p><p>{weaponOptions[key][0]}</p><p>{weaponOptions[key][1]}</p>
    </div>
  ));

  return (
    <div>
      <p>NAME</p>
      <p>BONUS</p>
      <p>DAMAGE</p>
      {weaponsRender}
      <form id="addAttack" />
      <label>
        <input form="addAttack" type="text" />
        ATTACK
      </label>
      <label>
        <input form="addAttack" type="number"/>
        BONUS
      </label>
      <label>
        <input form="addAttack" type="text" />
        DAMAGE
      </label>
      <h1>{`ATTACKS & SPELLCASTING`}</h1>
    </div>
  )
}

export default Weapons;