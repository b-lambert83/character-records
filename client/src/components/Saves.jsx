import React, {useState, useEffect, useContext } from 'react';

const Saves = () => {
  const [strengthSave, setStrengthSave] = useState(0);
  const [dexteritySave, setDexteritySave] = useState(0);
  const [constitutionSave, setConstitutionSave] = useState(0);
  const [intelligenceSave, setIntelligenceSave] = useState(0);
  const [wisdomSave, setWisdomSave] = useState(0);
  const [charismaSave, setCharismaSave] = useState(0);

  const [stengthProf, setStrengthProf] =useState(false);
  const [dexterityProf, setDexterityProf] =useState(false);
  const [constitutionProf, setConstitutionProf] = useState(false);
  const [intelligenceProf, setIntelligenceProf] = useState(false);
  const [wisdomProf, setWisdomProf] = useState(false);
  const [charismaProf, setCharismaProf] = useState(false);

  const stats = {
    STRENGTH: [strengthSave, setStrengthSave, stengthProf, setStrengthProf],
    DEXTERITY: [dexteritySave, setDexteritySave, dexterityProf, setDexterityProf],
    CONSTITUTION: [constitutionSave, setConstitutionSave, constitutionProf, setConstitutionProf],
    INTELLIGENCE: [intelligenceSave, setWisdomSave, intelligenceProf, setIntelligenceProf],
    WISDOM: [wisdomSave, setWisdomSave, wisdomProf, setWisdomProf],
    CHARISMA: [charismaSave, setCharismaSave, charismaProf, setCharismaProf]
  };

  const savesList = Object.keys(stats).map((key) => (
    <div className={`save${key}`} key={`save${key}`}>
      <input type="checkbox" name={`save${key}`}
      checked={stats[key][2]}
      onChange={() => stats[key][3](!stats[key][2])}/>
      <input type="number" name={`saveScore${key}`}
      value={stats[key][0]}
      onChange={(e) => stats[key][1](e.target.value)}/>
      <p>{key}</p>
    </div>
  ))

  return (
    <div className="savesContainer">
      {savesList}
      <p>SAVING THROWS</p>
    </div>
  )
}

export default Saves;