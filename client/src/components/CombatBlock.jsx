import React, {useState, useEffect, useContext } from 'react';
import { CharContext } from '../Context.jsx'

const CombatBlock = () => {
  const { combatObj, setCombatObj } = useContext(CharContext);

  return (
    <div>
      <div>
        <div>
          <input type="Number" name="armorClass"
          value={combatObj.armorClass}
          onChange={(e) => setCombatObj({
            ...combatObj,
            [e.target.name]: e.target.value
          })}/>
          <h1>ARMOR CLASS</h1>
        </div>
        <div>
          <input type="Number" name="initiative"
          value={combatObj.initiative}
          onChange={(e) => setCombatObj({
            ...combatObj,
            [e.target.name]: e.target.value
          })} />
          <h1>INITIATIVE</h1>
        </div>
        <div>
          <input type="text" name="speed"
          value={combatObj.speed}
          onChange={(e) => setCombatObj({
            ...combatObj,
            [e.target.name]: e.target.value
          })} />
          <h1>SPEED</h1>
        </div>
        <div>
          <input type="number" name="currentHitPoints"
          value={combatObj.currentHitPoints}
          onChange={(e) => setCombatObj({
            ...combatObj,
            [e.target.name]: e.target.value
          })} />
          <h1>CURRENT HIT POINTS</h1>
        </div>
        <div>
          <input type="number" name="maxHitPoints"
          value={combatObj.maxHitPoints}
          onChange={(e) => setCombatObj({
            ...combatObj,
            [e.target.name]: e.target.value
          })} />
          <h1>MAXIMUM HIT POINTS</h1>
        </div>
        <div>
            TOTAL
            <input type="number" name="maxHitDice"
            value={combatObj.maxHitDice}
            onChange={(e) => setCombatObj({
              ...combatObj,
              [e.target.name]: e.target.value
            })} />
        </div>
        <div>
          CURRENT
          <input type="number" name="currentHitDice"
          value={combatObj.currentHitDice}
          onChange={(e) => setCombatObj({
            ...combatObj,
            [e.target.name]: e.target.value
          })} />
        </div>
          <h1>HIT DICE</h1>
      </div>
      <div>
        <div>
          SUCCESSES
          <input type="checkbox" name="success1" checked={combatObj.success1}
          onChange={(e) => setCombatObj({
            ...combatObj,
            [e.target.name]: !e.target.checked
          })} />
          <input type="checkbox" name="success2" checked={combatObj.success2}
          onChange={(e) => setCombatObj({
            ...combatObj,
            [e.target.name]: !e.target.checked
          })} />
          <input type="checkbox" name="success3" checked={combatObj.success3}
          onChange={(e) => setCombatObj({
            ...combatObj,
            [e.target.name]: !e.target.checked
          })} />
        </div>
        <div>
          FAILURES
          <input type="checkbox" checked={combatObj.failure1} name="failure1"
           onChange={(e) => setCombatObj({
            ...combatObj,
            [e.target.name]: !e.target.checked
          })} />
          <input type="checkbox" checked={combatObj.failure2} name="failure2"
           onChange={(e) => setCombatObj({
            ...combatObj,
            [e.target.name]: !e.target.checked
          })} />
          <input type="checkbox" checked={combatObj.failure3} name="failure3"
           onChange={(e) => setCombatObj({
            ...combatObj,
            [e.target.name]: !e.target.checked
          })} />
        </div>
        DEATH SAVES
      </div>
    </div>
  )
}

export default CombatBlock;