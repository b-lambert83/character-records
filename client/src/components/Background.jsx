import React, {useState, useEffect, useContext } from 'react';
import { CharContext } from '../Context.jsx'

const Background = () => {

  const { backgroundTraits, setBackgroundTraits } = useContext(CharContext);

  const traitsRender = Object.keys(backgroundTraits).map((key) => (
    <div key={key}>
       <textarea type="text" name="key" form="addTrait" value={backgroundTraits[key]} onChange={(e) => {setBackgroundTraits({
        ...backgroundTraits,
        [key]: e.target.value
      })}}/>
       <h1> {key} </h1>
    </div>
  ));

  return (
    <div>
      {traitsRender}
    </div>
  )
}

export default Background;