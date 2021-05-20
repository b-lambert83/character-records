import React, {useState, useEffect, useContext } from 'react';
import { CharContext } from '../Context.jsx'

const Header = () => {

  const {headerObj, setHeaderObj} = useContext(CharContext);

  return (
    <div className="headerContainer">
      <div className="nameBox headerPair">
        <input type="text" name="charName"
          onChange={(e) => setHeaderObj({
            ...headerObj,
            [e.target.name]: e.target.value
          })}
          value={headerObj.charName}
        />
        <t>Character Name</t>
      </div>
      <div className="informationBox headerPair">
          <input type="text" name="classLevel"
            onChange={(e) => setHeaderObj({
              ...headerObj,
              [e.target.name]: e.target.value
            })}
          value={headerObj.classLevel}/>
          <t>Class and Level</t>
      </div>
      <div className="background headerPair">
          <input type="text" name="background"
            onChange={(e) => setHeaderObj({
              ...headerObj,
              [e.target.name]: e.target.value
            })}
            value={headerObj.background}
          />
          <t>Background</t>
      </div>
      <div className="headerPair playerName">
          <input type="text" name="playerName"
            onChange={(e) => setHeaderObj({
              ...headerObj,
              [e.target.name]: e.target.value
            })}
            value={headerObj.playerName}
          />
          <t>Player Name</t>
      </div>
      <div className="headerPair species">
        <input type="text" name="species"
          onChange={(e) => setHeaderObj({
            ...headerObj,
            [e.target.name]: e.target.value
          })}
          value={headerObj.species}
        />
        <t>Species</t>
      </div>
      <div className="headerPair alignment">
        <input type="text" name="alignment"
          onChange={(e) => setHeaderObj({
            ...headerObj,
            [e.target.name]: e.target.value
          })}
          value={headerObj.alignment}
        />
        <t>Alignment</t>
      </div>
      <div className="headerPair experience">
        <input type="number" name="experience"
          onChange={(e) => setHeaderObj({
            ...headerObj,
            [e.target.name]: e.target.value
          })}
          value={headerObj.experience}
        />
        <t>Experience Points</t>
      </div>
    </div>
  )
}

export default Header;