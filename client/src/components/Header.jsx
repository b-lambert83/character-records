import React, {useState, useEffect, useContext } from 'react';

const Header = () => {

  return (
    <div className="headerContainer">
      <div className="nameBox headerPair">
        <label>
          <input type="text" name="CharName" />
          Character Name
        </label>
      </div>
      <div className="informationBox headerPair">
        <label>
          <input type="text" name="classLevel" />
          Class and Level
        </label>
      </div>
      <div className="background headerPair">
        <label>
          <input type="text" name="background"/>
          Background
        </label>
      </div>
      <div className="headerPair playerName">
        <label>
          <input type="text" name="playerName"/>
          Player Name
        </label>
      </div>
      <div className="headerPair species">
        <label>
          <input type="text" name="species"/>
          Species
        </label>
      </div>
      <div className="headerPair alignment">
        <label>
          <input type="text" name="alignment"/>
          Alignment
        </label>
      </div>
      <div className="headerPair experience">
        <label>
          <input type="number" name="experience"/>
          Experience Points
        </label>
      </div>
    </div>
  )
}

export default Header;