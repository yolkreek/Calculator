import { useState } from "react";
import CalculatorButton from "./CalculatorButton";

function calculate(prev: string, curr: string, operator: string | null) {
  const prevNum = Number(prev);
  const currNum = Number(curr);
  switch (operator) {
    case "+":
      return String(prevNum + currNum);
    case "-":
      return String(prevNum - currNum);
    case "*":
      return String(prevNum * currNum);
    case "/":
      return String(prevNum / currNum);
    default:
      return curr;
  }
}

export default function Calculator() {
  const [calcState, setCalcState] = useState<CalState>({
    currentNumber: "0", //현재 입력/표시되는 숫자
    previousNumber: "", //이전
    operation: null,
    isNewNumber: true,
  });

  const handleClear = () => {
    setCalcState({
      currentNumber: "0",
      previousNumber: "",
      operation: null,
      isNewNumber: true,
    });
  };

  const handleOperator = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
  ) => {
    if (calcState.isNewNumber) return;

    setCalcState({
      ...calcState,
      previousNumber: calcState.currentNumber,
      operation: e.currentTarget.value,
      isNewNumber: true,
    });
  };

  const handleNum = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setCalcState({
      ...calcState,
      currentNumber: calcState.isNewNumber
        ? e.currentTarget.value
        : calcState.currentNumber + e.currentTarget.value,
      isNewNumber: false,
    });
  };

  const handleResult = () => {
    if (calcState.isNewNumber) return;

    setCalcState({
      currentNumber: calculate(
        calcState.previousNumber,
        calcState.currentNumber,
        calcState.operation,
      ),
      previousNumber: "",
      operation: null,
      isNewNumber: false,
    });
  };

  const handleDot = () => {
    if (calcState.isNewNumber) return;
    if (calcState.currentNumber.includes(".")) return;

    setCalcState({
      ...calcState,
      currentNumber: calcState.currentNumber + ".",
    });
  };

  const buttonConfigs: ButtonConfigs[] = [
    { value: "C", className: "clear", onClick: handleClear },
    { value: "/", className: "operator", onClick: handleOperator },
    { value: "1", className: "num", onClick: handleNum },
    { value: "2", className: "num", onClick: handleNum },
    { value: "3", className: "num", onClick: handleNum },
    { value: "*", className: "operator", onClick: handleOperator },
    { value: "4", className: "num", onClick: handleNum },
    { value: "5", className: "num", onClick: handleNum },
    { value: "6", className: "num", onClick: handleNum },
    { value: "+", className: "operator", onClick: handleOperator },
    { value: "7", className: "num", onClick: handleNum },
    { value: "8", className: "num", onClick: handleNum },
    { value: "9", className: "num", onClick: handleNum },
    { value: "-", className: "operator", onClick: handleOperator },
    { value: ".", className: "dot", onClick: handleDot },
    { value: "0", className: "num", onClick: handleNum },
    { value: "=", className: "operator result", onClick: handleResult },
  ];

  return (
    <>
      <article className="calculator">
        <form name="forms">
          <input
            readOnly
            className="input"
            type="text"
            value={calcState.currentNumber}
          ></input>
          {buttonConfigs.map((button) => (
            <CalculatorButton key={button.value} {...button} />
          ))}
        </form>
      </article>
      <div className="text-white w-[282px] h-[100px] break-all ">
        <br />
        currNumber: {calcState.currentNumber}
        <br />
        preNumber: {calcState.previousNumber}
        <br />
        operation: {calcState.operation}
        <br />
        isNewNumber: {String(calcState.isNewNumber)}
      </div>
    </>
  );
}
