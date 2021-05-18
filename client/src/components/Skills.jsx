import React, {useState, useEffect, useContext } from 'react';

const Skills = () => {
  const skillObj = {
    'Acrobatics': '(dex)',
    'Animal Handling': '(wis)',
    'Arcana': '(int)',
    'Athletics': '(str)',
    'Deception': '(cha)',
    'History': '(int)',
    'Insight': '(wis)',
    'Intimidation': '(cha)',
    'Medicine': '(wis)',
    'Nature': '(int)',
    'Perception': '(wis)',
    'Performance': '(cha)',
    'Persiasion': '(cha)',
    'Religeon': '(int)',
    'Slieght of Hand': '(dex)',
    'Stealth': '(dex)',
    'Survival': '(wis)'
  };


  const skillList = Object.keys(skillObj).map((key) => (
    <div className={`skill${key}`} key={`skill${key}`}>
      <label>
        <input type="checkbox" checked={false} name={`skill${key}`}/>
        <input type="number" value={0} name={`skillScore${key}`}/>
        <p>{key}</p><t>{skillObj[key]}</t>
      </label>
    </div>
  ))

  return (
    <div className="skillsContainer">
      {skillList}
      <p>SKILLS</p>
      <div className="passivePerceptPair">
        <label>
          <input type="number" name="profBonus"/>
          <p>{`PASSIVE WISDOM (PERCEPTION)`}</p>
        </label>
      </div>
    </div>
  )
}

export default Skills;