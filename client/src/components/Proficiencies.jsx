import React, {useState, useEffect, useContext } from 'react';

const Proficiencies = () => {

  const [profObj, setProfObj] = useState({
    'count': 0
  })

  const profList = Object.keys(profObj).map((key) => {
    if (key !== 'count') {
    return (
      <div key={key - 1}>
        <t> {profObj[key][0]} </t><t> {profObj[key][1]} </t>
      </div>
  )}});

  // useEffect(() => {
  //   console.log(profObj);
  // },[profObj])

  const handleProficiencySubmit = (e) => {
    e.preventDefault();
    e.persist();
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    const newType = e.target[0].value;
    const newProf = e.target[1].value;
    setProfObj({...profObj,
      [profObj.count]: [newType, newProf],
      'count': profObj.count + 1
      })
  }

  return (
    <div>
      <t> Type </t><t> Proficiency </t>
      {profList}
      <div>
      <form id="addProficiency" onSubmit={handleProficiencySubmit}/>
      <label>
        <select form="addProficiency" name="profType">
          <option>Language</option>
          <option>Weapon</option>
          <option>Armor</option>
          <option>Tool</option>
        </select>
        Type
      </label>
      <label>
        <input type="text" form="addProficiency" name="profDescription"/>
        Proficiency
      </label>
      <input type="submit" value="Add Proficiency" form="addProficiency"/>
      </div>
    </div>
  )
}

export default Proficiencies;