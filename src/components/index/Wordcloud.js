import React, { useState } from "react";
import PacmanLoader from 'react-spinners/PacmanLoader'
import '../css/ViewFilesForm.css'
import ReactWordcloud from 'react-wordcloud';

const override = {
  display: "green",
  margin: "0 auto",
  borderColor: "red",
};

const callbacks = {
  getWordColor: word => word.value > 50 ? "blue" : "red",
  onWordClick: console.log,
}

const options = {
  rotations: 2,
  rotationAngles: [-90, 0],
};

const size = [600, 400];

const words = [
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 11,
  },
  {
    text: 'thought',
    value: 16,
  },
  {
    text: 'bad',
    value: 17,
  },
]

function CreateWordcloud({status, wordcloud}) {
  if (status == 'success') {
    return (
      <ReactWordcloud
        callbacks={callbacks}
        options={options}
        size={size}
        words={wordcloud}
      />
    );
  }

  if (status == 'loading') {
    return (
      <PacmanLoader
        color={"#000000"}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  if (status == 'error') {
    return (
      <div className="error-box">
        The Wordcloud ID is no longer valid!
      </div>
    )
  }
  
  return (
    <ReactWordcloud
      callbacks={callbacks}
      options={options}
      size={size}
      words={words}
    />
  );
}


export default CreateWordcloud