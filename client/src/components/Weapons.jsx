import React, {useState, useEffect, useContext } from 'react';
import { CharContext } from '../Context.jsx'

const Weapons = () => {

  const {weaponOptions, setWeaponOptions} = useContext(CharContext)

  const weaponsRender = Object.keys(weaponOptions).map((key) => (
    <div key={key}>
      <t> {key} </t><t> {weaponOptions[key][0]} </t><t> {weaponOptions[key][1]} </t>
    </div>
  ));

  const handleAttackSubmit = (e) => {
    e.preventDefault();
    e.persist();
    // console.log(e);
    setWeaponOptions({...weaponOptions,
      [e.target[0].value]: [`+${e.target[1].value}`, e.target[2].value]
    })
  };

  return (
    <div className="attacksContainer">
      {weaponsRender}
      <div>
        <form id="addAttack" onSubmit={handleAttackSubmit}/>
        <label>
          <input form="addAttack" type="text" name="attack"/>
          ATTACK
        </label>
        <label>
          <input form="addAttack" type="number" name="bonusToHit"/>
          BONUS
        </label>
        <label>
          <input form="addAttack" type="text" name="attackDamage"/>
          DAMAGE
        </label>
        <input type="submit" value="Add Attack" form="addAttack"/>
      </div>
      <h1>{`ATTACKS & SPELLCASTING`}</h1>
    </div>
  )
}

export default Weapons;