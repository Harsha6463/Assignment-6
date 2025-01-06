import React, { useState, useMemo } from "react";

const Factorial = () => {
  const [number, setNumber] = useState(0);

  const factorialNumber = (e) => {
    setNumber(Number(e.target.value));
  };

  const factorial = useMemo(() => {
    const factorial = (n) => {
      if (n === 0 || n === 1) return 1;
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result = result * i;
      }
      return result;
    };

    return factorial(number);
  }, [number]);

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <input type="number" value={number} onChange={factorialNumber} />
      <p>
        Factorial of {number} is: {factorial}
      </p>
    </div>
  );
};

export default Factorial;
