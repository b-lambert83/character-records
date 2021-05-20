import React, {useState, useEffect, useContext } from 'react';
import { CharContext } from '../Context.jsx';

const Skills = () => {

  const {skillsObj, setSkillsObj} = useContext(CharContext);

  const skillList = Object.keys(skillsObj).map((key) => (
    <div className={`skill${key}`} key={`skill${key}`}>
        <input type="checkbox" checked={skillsObj[key][2]} name={`skillProf${key}`}
        onChange={(e) => setSkillsObj({
          ...skillsObj,
          [key]:[skillsObj[key][0], skillsObj[key][1], !skillsObj[key][2]]
        })} />
        <input type="number" value={skillsObj[key][1]} name={`skillScore${key}`}
        onChange={(e) => setSkillsObj({
          ...skillsObj,
          [key]: [skillsObj[key][0], e.target.value, skillsObj[key][2]]
        })}/>
        <p>{key}</p><t>{skillsObj[key][0]}</t>
    </div>
  ))

  return (
    <div className="skillsContainer">
      {skillList}
      <p>SKILLS</p>
      <div className="passivePerceptPair">
        <label>
          {skillsObj['Perception'][1]}
          <p>{`PASSIVE WISDOM (PERCEPTION)`}</p>
        </label>
      </div>
    </div>
  )
}

export default Skills;