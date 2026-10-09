type ButtonConfigs = {
  value: string;
  className: string;
  onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
};

type CalState = {
  currentNumber: string; //현재 입력,표시되는 숫자
  previousNumber: string; //이전
  operation: string | null;
  isNewNumber: boolean;
};
