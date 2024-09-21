import { useState } from "react";
import "./App.css";

const App = () => {
  const [weight, setweight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState(" ");
  const [msg, setMsg] = useState(" ");

  let clacBmi = (event) => {
    event.preventDefault();

    if (weight == 0 || height == 0) {
      alert("Enter valid weight and height");
    } else {
      let bmi;
      let m = height / 100;
      let h2 = m * m;
      bmi = weight / h2;

      let f_bmi = Math.floor(bmi);

      let diff = bmi - f_bmi;
      diff = diff * 10;

      diff = Math.round(diff);
      if (diff == 10) {
        // Need to bump up the whole thing instead
        f_bmi += 1;
        diff = 0;
      }
      bmi = f_bmi + "." + diff;
      setBmi(bmi);

      if (bmi < 18.5) {
        setMsg("You are Under Weight");
      } else if (bmi < 24.9 && bmi > 18.5) {
        setMsg("You are Normal");
      } else if (bmi < 29.9 && bmi > 25) {
        setMsg("You are Over Weight");
      } else {
        setMsg("You are Obese");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="main-container">
      <div className="left_container">
        <h1>BMI CALCULATOR</h1>
      </div>
      <div className="right_container">
        <div className="input_boxes">
          <form action="#" className="boxes" onSubmit={clacBmi}>
            <label htmlFor="Weight">
              <p>Weight(kgs):</p>
              <input
                type="text"
                placeholder="Enter your weight"
                value={weight}
                name="Weight"
                onChange={(e) => setweight(e.target.value)}
              />
            </label>

            <label htmlFor="Height">
              <p>Height(cm):</p>
              <input
                type="text"
                placeholder="Enter your height"
                value={height}
                name="Height"
                onChange={(e) => setHeight(e.target.value)}
              />
            </label>
            <div className="btn_div">
              <button type="submit" className="btn">
                Calculate
              </button>
              <button className="btn" onClick={reload} type="submit">
                Reload
              </button>
            </div>
          </form>
        </div>
        <div className="text_msg">
          <h1>Your BodyMassIndex is : {bmi}</h1>
          <h1>{msg}</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
