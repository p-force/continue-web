import React, { useState } from 'react';
import Box from './Box';

export default function Form() {
  const [dataState, setDataState] = useState([]);
  const [inputs, setInputs] = useState('');

  const inputHandler = (e) => {
    setInputs(e.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    fetch(`http://numbersapi.com/${inputs}`)
      .then((res) => res.text())
      .then((data) => setDataState((prev) => [data, ...prev]));
  };
  return (
    <>
      <div className="container text-center">
        <p><u>You can use the commands below</u></p>
        <div className="row align-items-start">
          <div className="col">
            MATH
            <small>
              <p>
                Random fact about a number:
                <mark> your_number/math</mark>
              </p>
            </small>
          </div>
          <div className="col">
            DATE
            <small>
              <p>
                Fact about some date:
                <mark> month_num/day_num/date</mark>
              </p>
            </small>
          </div>
        </div>
        <div className="row align-items-start">
          <div className="col">
            random/math
            <small>
              <p>
                Random number fact:
                <mark> random/math</mark>
              </p>
            </small>
          </div>
          <div className="col">
            RANDOM
            <small>
              <p>
                Random fact:
                <mark> random</mark>
              </p>
            </small>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <form className="d-flex" style={{ height: '70px', marginBlockEnd: '50px' }}>
          <input value={inputs.value} onChange={inputHandler} className="form-control me-4" type="form-text" placeholder="Input your number" style={{ width: '1000px', marginTop: '30px' }} />
          <button onClick={submitHandler} className="btn btn-dark me-4" type="submit" style={{ width: '124px', marginTop: '30px' }}>Show fact</button>
          <button onClick={() => { setDataState([]); }} className="btn btn-dark col-3" type="submit" style={{ width: '124px', marginTop: '30px' }}>Clear</button>
        </form>
        <div
          className="text-center"
          style={{
            border: '4px double black',
            backgroundColor: 'black',
            borderRadius: '5px',
          }}
        >
          {dataState?.map((el) => (
            <pre
              className="col-sm-9 text-black text-center"
              style={{
                marginTop: '10px',
                marginBottom: '5px',
                marginRight: '20px',
                marginLeft: '120px',
                padding: '10px',

              }}
            >
              <p style={{
                marginBottom: '0px',
                borderLeft: '8px solid rgba(2, 39, 63, 0.5)',
                background: 'white',
              }}
              >
                {el}
              </p>
            </pre>
            // <Box el={el} />
          ))}
        </div>
      </div>
    </>
  );
}
