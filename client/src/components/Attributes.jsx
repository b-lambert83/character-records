import React, {useState, useEffect, useContext } from 'react';
import { CharContext } from '../Context.jsx'

const Attributes = () => {

  const {strengthScore, setStrengthScore, dexterityScore, setDexterityScore, constitutionScore, setConstitutionScore, intelligenceScore, setIntelligenceScore, wisdomScore, setWisdomScore, charismaScore, setCharismaScore} = useContext(CharContext);

  const stats = {
    STRENGTH: [strengthScore, setStrengthScore],
    DEXTERITY: [dexterityScore, setDexterityScore],
    CONSTITUTION: [constitutionScore, setConstitutionScore],
    INTELLIGENCE: [intelligenceScore, setIntelligenceScore],
    WISDOM: [wisdomScore, setWisdomScore],
    CHARISMA: [charismaScore, setCharismaScore]
  };

  // ['STRENGTH', 'DEXTERITY', 'CONSTITUTION', 'INTELLIGENCE', 'WISDOM', 'CHARISMA'];

  const statBuilder = Object.keys(stats).map((key) => (
    <div className="attributePair" key={`attribute${key}`}>
      {key}
      <input type="number" value={stats[key][0]} onChange={(e) => stats[key][1](e.target.value)}/>
      <p id="bonusBox"> {`+ ${Math.floor((stats[key][0] / 2) - 5)}`} </p>
    </div>
    ))

  return (
    <div className="attributesContainer">
      {statBuilder}
    </div>
  )
}

export default Attributes;