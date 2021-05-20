import React, {useState, useEffect, useContext } from 'react';

const CombatBlock = () => {

  const [armorClass, setArmorClass] = useState(10);
  const [initiatice, setInitiative] = useState(0);
  const [speed, setSpeed] = useState('30 ft');
  const [currentHitPoints, setCurrentHitPoints] = useState(0);
  const [maxHitPoints, setMaxHitPoints] = useState(0);
  const [totalHitDice, setTotalHitDice] = useState(0);
  const [currentHitDice, setCurrentHitDice] = useState(0);
  const [success1, setSuccess1] = useState(false);
  const [success2, setSuccess2] = useState(false);
  const [success3, setSuccess3] = useState(false);
  const [failure1, setFailure1] = useState(false);
  const [failure2, setFailure2] = useState(false);
  const [failure3, setFailure3] = useState(false);


  return (
    <div>
      <div>
        <div>
          <input type="Number" name="armorClass"
          value={armorClass} onChange={(e) => setArmorClass(e.target.value)}/>
          <h1>ARMOR CLASS</h1>
        </div>
        <div>
          <input type="Number" name="initiativeBonus"
          value={initiatice} onChange={(e) => setInitiative(e.target.value)}/>
          <h1>INITIATIVE</h1>
        </div>
        <div>
          <input type="text" name="speed"
          value={speed} onChange={(e) => setSpeed(e.target.value)}/>
          <h1>SPEED</h1>
        </div>
        <div>
          <input type="number" name="currentHP"
          value={currentHitPoints} onChange={(e) => setCurrentHitPoints(e.target.value)}/>
          <h1>CURRENT HIT POINTS</h1>
        </div>
        <div>
          <input type="number" name="maximumHP"
          value={maxHitPoints} onChange={(e) => setMaxHitPoints(e.target.value)}/>
          <h1>MAXIMUM HIT POINTS</h1>
        </div>
        <div>
            TOTAL
            <input type="number" name="totalHitDice"
            value={totalHitDice} onChange={(e) => setTotalHitDice(e.target.value)}/>
        </div>
        <div>
          CURRENT
          <input type="number" name="currentHitDice"
          value={currentHitDice} onChange={(e) => setCurrentHitDice(e.target.value)}/>
        </div>
          <h1>HIT DICE</h1>
      </div>
      <div>
        <div>
          SUCCESSES
          <input type="checkbox" checked={success1} onChange={() => setSuccess1(!success1)}/>
          <input type="checkbox" checked={success2} onChange={() => setSuccess2(!success2)}/>
          <input type="checkbox" checked={success3} onChange={() => setSuccess3(!success3)}/>
        </div>
        <div>
          FAILURES
          <input type="checkbox" checked={failure1} onChange={() => setFailure1(!failure1)}/>
          <input type="checkbox" checked={failure2} onChange={() => setFailure2(!failure2)}/>
          <input type="checkbox" checked={failure3} onChange={() => setFailure3(!failure3)}/>
        </div>
        DEATH SAVES
      </div>
    </div>
  )
}

export default CombatBlock;