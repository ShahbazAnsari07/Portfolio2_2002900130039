import React from 'react'

function EvaluateExpression() {

    let x = 2;
    let y = 30;
  return (
    <div>
        <h1>Evaluate Expression</h1>

        <h3>
            {x} {'>'} {y} {':'} {x>y? 'TRUE':'FALSE'}
        </h3>
    </div>

  );
};

export default EvaluateExpression;