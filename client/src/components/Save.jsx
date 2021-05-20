import React, {useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CharContext } from '../Context.jsx'

const Save = () => {

  const { strengthScore, dexterityScore, constitutionScore, wisdomScore, intelligenceScore, charismaScore, backgroundTraits, combatObj, featuresObj, headerObj, inspired, profBonus, items, profObj, savesObj, skillsObj, weaponOptions } = useContext(CharContext);

  const handleCharacterSave = (e) => {
    e.preventDefault();
    e.persist();
    axios.post('localhost/save', {
      strengthScore: strengthScore,
      dexterityScore: dexterityScore,
      constitutionScore: constitutionScore,
      intelligenceScore: intelligenceScore,
      wisdomScore: wisdomScore,
      charismaScore: charismaScore,
      backgroundTraits: backgroundTraits,
      combatObj: combatObj,
      featuresObj: featuresObj,
      headerObj: headerObj,
      inspired: inspired,
      profBonus: profBonus,
      savesObj: savesObj,
      skillsObj: skillsObj,
      weaponOptions: weaponOptions
    })
  }

  return (
    <div>
      <form id="newCharacter" onSubmit={handleCharacterSave}/>
      <input form="newCharacter" type="submit" value="Save new Character"/>
    </div>
  )
}

export default Save;