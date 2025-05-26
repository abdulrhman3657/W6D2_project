import { useState } from "react";
import { useNavigate } from "react-router";

function Home() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [BMI, setBMI] = useState(0);
  const [BMICategory, setBMICategory] = useState("");
  const [IMG, setIMG] = useState("");

  let navigate = useNavigate();

  function redirectPath(){
      navigate("/login")
  }

  if(!localStorage.getItem("username")){
    redirectPath()
  }

  function checkInput() {
    const BMI = weight / (height * height);

    if (BMI < 18.5) {
      setBMICategory("Underweight");
      setIMG("UW.PNG");
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      setBMICategory("normal weight");
      setIMG("nW.PNG");
    } else if (BMI >= 24.9 && BMI <= 29.9) {
      setBMICategory("Overweight");
      setIMG("oW.PNG");
    } else if (BMI >= 29.9 && BMI <= 34.9) {
      setBMICategory("Class I obesity");
      setIMG("OBESE1.PNG");
    } else if (BMI >= 34.9) {
      setBMICategory("Class II obesity");
      setIMG("OBESE2.PNG");
    }

    setBMI(BMI);
  }

  return (
    <div className="flex justify-around">
      <div>
        {IMG && <img className="w-50" src={IMG} alt="" />}
      </div>
      <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            calculate your BMI
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div className="flex flex-col">
              <label className="block text-sm/6 font-medium text-gray-900">
                Your BMI: <span className="text-lg">{BMI}</span>{" "}
              </label>
              <label className="block text-sm/6 font-medium text-gray-900">
                BMI Category: <span className="text-lg">{BMICategory}</span>{" "}
              </label>
            </div>
            <div>
              <label className="block text-sm/6 font-medium text-gray-900">
                weight{" "}
              </label>
              <div className="mt-2">
                {/* weight input */}
                <input
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  type="text"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  height in meter
                </label>
              </div>
              <div className="mt-2">
                {/* height input */}
                <input
                  type="text"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={checkInput}
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                calculate
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
