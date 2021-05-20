import React, {useState, useEffect, useContext } from 'react';

const Features = () => {

  const [featuresObj, setFeatureObj] = useState({
    Feature: ['Source', 'Description']
  });

  const featuresRender = Object.keys(featuresObj).map((key) => (
    <div key={key}>
      <t>{key}</t><t> {featuresObj[key][0]} </t><t> {featuresObj[key][1]} </t>
    </div>
  ));


  const handleFeatureSubmit = (e) => {
    e.preventDefault();
    e.persist();
    setFeatureObj({
      ...featuresObj,
      [e.target[0].value]: [e.target[1].value, e.target[2].value]
    })
  }

  return (
    <div>
      {featuresRender}
      <form id="addFeature" onSubmit={handleFeatureSubmit}/>
      <div>
      <input form="addFeature" name="feature" type="text" />
      <t>Feature</t>
      </div>
      <div>
      <input form="addFeature" name="source" type="text" />
      <t>Source</t>
      </div>
      <div>
      <textarea form="addFeature" name="description" type="text" />
      <t>Description</t>s
      </div>
      <input type="submit" value="Add Feature" form="addFeature"/>
      <h1>{`FEATURES & TRAITS`}</h1>
    </div>
  )
}

export default Features;