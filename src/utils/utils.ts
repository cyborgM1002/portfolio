export function CapitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function ReturnCss({
  condition,
  trueValue,
  falseValue,
}: {
  condition: boolean;
  trueValue: string;
  falseValue: string;
}) {
  if (condition) return trueValue;
  else falseValue;
}
