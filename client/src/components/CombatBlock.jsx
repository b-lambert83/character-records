import React, {useState, useEffect, useContext } from 'react';

const CombatBlock = () => {

  return (
    <div>
      <label>
        <input type="Number" name="armorClass" value="10"/>
        <h1>ARMOR CLASS</h1>
      </label>
      <label>
        <input type="Number" name="initiativeBonus"/>
        <h1>INITIATIVE</h1>
      </label>
      <label>
        <input type="text" name="speed"/>
        <h1>SPEED</h1>
      </label>
      <label>
        <input type="number" name="currentHP"/>
        <h1>CURRENT HIT POINTS</h1>
      </label>
      <label>
        <input type="number" name="maximumHP"/>
        <h1>MAXIMUM HIT POINTS</h1>
      </label>
      <label>
        <label>
          TOTAL
          <input type="number" name="totalHitDice" />
        </label>
        <input type="number" name="currentHitDice" />
        <h1>HIT DICE</h1>
      </label>
      <label>
        <label>
          SUCCESSES
          <input type="checkbox" checked={false} />
          <input type="checkbox" checked={false} />
          <input type="checkbox" checked={false} />
          <input type="checkbox" checked={false} />
        </label>
        <label>
          FAILURES
          <input type="checkbox" checked={false} />
          <input type="checkbox" checked={false} />
          <input type="checkbox" checked={false} />
          <input type="checkbox" checked={false} />
        </label>
        DEATH SAVES
      </label>
    </div>
  )
}

export default CombatBlock;