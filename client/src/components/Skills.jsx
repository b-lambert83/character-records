import React, {useState, useEffect, useContext } from 'react';

const Skills = () => {


  //Skill total bonus Values
  const [acrobaticsScore, setAcrobaticsScore] = useState(0);
  const [animalHandleScore, setAnimalHandleScore] = useState(0);
  const [arcanaScore, setArcanaScore] = useState(0);
  const [athleticsScore, setAthleticsScore] = useState(0);
  const [deceptionScore, setDeceptionScore] = useState(0);
  const [historyScore, setHistoryScore] = useState(0);
  const [insightScore, setInsightScore] = useState(0);
  const [intimidationScore, setIntimidationScore] = useState(0);
  const [medicineScore, setMedicineScore] = useState(0);
  const [natureScore, setNatureScore] = useState(0);
  const [perceptionScore, setPerceptionScore] = useState(0);
  const [performanceScore, setPerformanceScore] = useState(0);
  const [persuasionScore, setPersuasionScore] = useState(0);
  const [religeonScore, setReligeonScore] = useState(0);
  const [sleigthOfHandScore, setSleightOfHandScore] = useState(0);
  const [stealthScore, setStealthScore] = useState(0);
  const [survivalScore, setSurvivalScore] = useState(0);

  // is skill proficient marker
  const [acrobaticsProf, setAcrobaticsProf] = useState(false);
  const [animalHandleProf, setAnimalHandleProf] = useState(false);
  const [arcanaProf, setArcanaProf] = useState(false);
  const [athleticsProf, setAthleticsProf] = useState(false);
  const [deceptionProf, setDeceptionProf] = useState(false);
  const [historyProf, setHistoryProf] = useState(false);
  const [insightProf, setInsightProf] = useState(false);
  const [intimidationProf, setIntimidationProf] = useState(false);
  const [medicineProf, setMedicineProf] = useState(false);
  const [natureProf, setNatureProf] = useState(false);
  const [perceptionProf, setPerceptionProf] = useState(false);
  const [performanceProf, setPerformanceProf] = useState(false);
  const [persuasionProf, setPersuasionProf] = useState(false);
  const [religeonProf, setReligeonProf] = useState(false);
  const [sleigthOfHandProf, setSleightOfHandProf] = useState(false);
  const [stealthProf, setStealthProf] = useState(false);
  const [survivalProf, setSurvivalProf] = useState(false);


  const skillObj = {
    'Acrobatics': ['(dex)', acrobaticsScore, setAcrobaticsScore, acrobaticsProf, setAcrobaticsProf],
    'Animal Handling': ['(wis)', animalHandleScore, setAnimalHandleScore, animalHandleProf, setAnimalHandleProf],
    'Arcana': ['(int)', arcanaScore, setArcanaScore, arcanaProf, setArcanaProf],
    'Athletics': ['(str)', athleticsScore, setAthleticsScore, athleticsProf, setAthleticsProf],
    'Deception': ['(cha)', deceptionScore, setDeceptionScore, deceptionProf, setDeceptionProf],
    'History': ['(int)', historyScore, setHistoryScore, historyProf, setHistoryProf],
    'Insight': ['(wis)', insightScore, setInsightScore, insightProf, setInsightProf],
    'Intimidation': ['(cha)', intimidationScore, setIntimidationScore, intimidationProf, setIntimidationProf],
    'Medicine': ['(wis)', medicineScore, setMedicineScore, medicineProf, setMedicineProf],
    'Nature': ['(int)', natureScore, setNatureScore, natureProf, setNatureProf],
    'Perception': ['(wis)', perceptionScore, setPerceptionScore, perceptionProf, setPerceptionProf],
    'Performance': ['(cha)', performanceScore, setPerformanceScore, performanceProf, setPerformanceProf],
    'Persiasion': ['(cha)', persuasionScore, setPersuasionScore, persuasionProf, setPersuasionProf],
    'Religeon': ['(int)', religeonScore, setReligeonScore, religeonProf, setReligeonProf],
    'Slieght of Hand': ['(dex)', sleigthOfHandScore, setSleightOfHandScore, sleigthOfHandProf, setSleightOfHandProf],
    'Stealth': ['(dex)', stealthScore, setStealthScore, stealthProf, setStealthProf],
    'Survival': ['(wis)', survivalScore, setSurvivalScore, survivalProf, setSurvivalProf]
  };


  const skillList = Object.keys(skillObj).map((key) => (
    <div className={`skill${key}`} key={`skill${key}`}>
        <input type="checkbox" checked={skillObj[key][3]} name={`skill${key}`}
        onChange={(e) => skillObj[key][4](!skillObj[key][3])} />
        <input type="number" value={skillObj[key][1]} name={`skillScore${key}`}
        onChange={(e) => skillObj[key][2](e.target.value)}/>
        <p>{key}</p><t>{skillObj[key][0]}</t>
    </div>
  ))

  return (
    <div className="skillsContainer">
      {skillList}
      <p>SKILLS</p>
      <div className="passivePerceptPair">
        <label>
          {perceptionScore}
          <p>{`PASSIVE WISDOM (PERCEPTION)`}</p>
        </label>
      </div>
    </div>
  )
}

export default Skills;