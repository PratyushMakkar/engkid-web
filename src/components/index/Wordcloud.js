import React, { useState } from "react";
import PacmanLoader from 'react-spinners/PacmanLoader'

const override = {
  display: "green",
  margin: "0 auto",
  borderColor: "red",
};

function CreateWordcloud(status, img) {
  if (status == 'success') {

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

  }

  return (
    <p1>
      Hello World
    </p1>
  )
}

export default CreateWordcloud