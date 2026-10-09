export default function CalculatorButton({
  value,
  className,
  onClick,
}: ButtonConfigs) {
  return (
    <>
      <input
        type="button"
        value={value}
        className={className}
        onClick={onClick}
        readOnly
      ></input>
    </>
  );
}
