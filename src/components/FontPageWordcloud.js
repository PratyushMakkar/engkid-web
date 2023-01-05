import React from "react"
import {InteractiveForceGraph, ForceGraphNode, ForceGraphLink} from 'react-vis-force';

const NODE_COUNT = 6

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

function CreateRandomGraphLinks(N) {
  var results = []
  for (var i = 0; i<N; ++i) {
    results[i] = (Math.floor(Math.random()*N+1))
  }
  return results
}

function CreateRandomGraphNodes(N){
  const results = []
  const colours = ["red", "green", "yellow", "blue"]
  for (var i = 0; i<N; ++i) {
    results[i] = ["word", colours.random(), (Math.random()*5+4)]
  }
  return results.concat(CreateRandomGraphLinks(N))
}

function FrontPageWordcloud() {
  return (
    <InteractiveForceGraph
      simulationOptions={{animate: true, height: 150, width: 300 }}
      labelAttr="label"
      onSelectNode={(node) => console.log(node)}
      highlightDependencies>
      {
        CreateRandomGraphNodes(6).map((elem, i) => {
          console.log(i, elem)
          if (i<6) {
            return (<ForceGraphNode node={{id: (i + "node"), label: elem[0]}} r={elem[2]} fill={elem[1]}/>)
          }
          return <ForceGraphLink link={{source: ((i-6)+"node"), target: elem+"node"}}/>
        })
      }
    </InteractiveForceGraph>
  )
}

export default FrontPageWordcloud