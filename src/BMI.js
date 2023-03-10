import React, { useState } from 'react';

function BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');

  const calculateBmi = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
  }

  return (
    <div>
      <h1>BMI Calculator</h1>
      <label>
        Height (in cm):
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </label>
      <br />
      <label>
        Weight (in kg):
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </label>
      <br />
      <button onClick={calculateBmi}>Calculate BMI</button>
      <br />
      {bmi && <p>Your BMI is {bmi}</p>}
    </div>
  );
}

export default BMI;
